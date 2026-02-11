import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { IonContent, IonInput, IonItem, IonText, IonTextarea, IonButton } from "@ionic/angular/standalone";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../core/pipes/translate.pipe';
import { HttpClient } from '@angular/common/http';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_ohdvu7t';
const EMAILJS_TEMPLATE_ID = 'template_pfnzr1x';
const EMAILJS_PUBLIC_KEY = 'I90PGX2HSGe8qmFiX';

// Google Perspective API Configuration
const PERSPECTIVE_API_KEY = 'AIzaSyAefHQpEXv9zMkwpdBwy0X1hSBKpeIdzcc';
const PERSPECTIVE_API_URL = 'https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze';
const TOXICITY_THRESHOLD = 0.7;

@Component({
  selector: 'app-contact',
  imports: [IonContent, IonInput, IonItem, IonText, IonTextarea, IonButton, NavigationBar, FooterComponent, ReactiveFormsModule, CommonModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contact: FormGroup;
  messageSent = false;
  messageError = false;
  toxicityError = false;
  isSending = false;
  toxicityScore: number | null = null;

  // Bot detection
  botDetected = false;

  // Rate limiting
  rateLimited = false;
  private lastSubmitTime = 0;
  private readonly RATE_LIMIT_MS = 60000; // 1 minute between submissions

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contact = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      sujet: ['', [Validators.required, Validators.minLength(1)]],
      contenu: ['', [Validators.required, Validators.maxLength(1000)]],
      // Honeypot field - should remain empty (bots will fill it)
      website: ['']
    });
  }

  /**
   * Checks if the honeypot field was filled (indicates a bot)
   */
  private isBot(): boolean {
    return this.contact.value.website !== '';
  }

  /**
   * Analyzes text using Google Perspective API
   * Returns toxicity score between 0 and 1
   */
  private async analyzeToxicity(text: string): Promise<number> {
    const requestBody = {
      comment: { text },
      languages: ['fr', 'en'],
      requestedAttributes: {
        TOXICITY: {},
        SEVERE_TOXICITY: {},
        INSULT: {},
        PROFANITY: {}
      }
    };

    // Build the full URL with API key, then encode it for the CORS proxy
    const fullApiUrl = `${PERSPECTIVE_API_URL}?key=${PERSPECTIVE_API_KEY}`;
    const corsProxyUrl = `https://corsproxy.io/?${encodeURIComponent(fullApiUrl)}`;

    try {
      const response = await this.http.post<any>(
        corsProxyUrl,
        requestBody
      ).toPromise();

      // Get the highest score among all attributes
      const scores = [
        response.attributeScores?.TOXICITY?.summaryScore?.value || 0,
        response.attributeScores?.SEVERE_TOXICITY?.summaryScore?.value || 0,
        response.attributeScores?.INSULT?.summaryScore?.value || 0,
        response.attributeScores?.PROFANITY?.summaryScore?.value || 0
      ];

      return Math.max(...scores);
    } catch (error) {
      return 0;
    }
  }

  /**
   * Checks all form fields for toxic content
   */
  private async checkToxicity(): Promise<boolean> {
    const { nom, sujet, contenu } = this.contact.value;

    // Combine all text fields for analysis
    const combinedText = `${nom} ${sujet} ${contenu}`;

    const score = await this.analyzeToxicity(combinedText);
    this.toxicityScore = score;

    return score >= TOXICITY_THRESHOLD;
  }

  async sendMessage() {
    if (this.contact.invalid) {
      this.contact.markAllAsTouched();
      return;
    }

    // Reset all status flags
    this.isSending = true;
    this.messageSent = false;
    this.messageError = false;
    this.toxicityError = false;
    this.botDetected = false;
    this.rateLimited = false;
    this.toxicityScore = null;

    // Check rate limit
    const now = Date.now();
    if (now - this.lastSubmitTime < this.RATE_LIMIT_MS) {
      const waitSeconds = Math.ceil((this.RATE_LIMIT_MS - (now - this.lastSubmitTime)) / 1000);
      this.rateLimited = true;
      this.isSending = false;
      return;
    }

    // Check for bot (honeypot field filled)
    if (this.isBot()) {
      this.botDetected = true;
      this.isSending = false;
      return;
    }

    // Check for toxic content using Perspective API
    const isToxic = await this.checkToxicity();
    if (isToxic) {
      this.toxicityError = true;
      this.isSending = false;
      return;
    }

    const templateParams = {
      from_name: this.contact.value.nom,
      from_email: this.contact.value.email,
      subject: this.contact.value.sujet,
      message: this.contact.value.contenu
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      this.messageSent = true;
      this.lastSubmitTime = Date.now(); // Update rate limit timer
      this.contact.reset();
    } catch (error) {
      this.messageError = true;
    } finally {
      this.isSending = false;
    }
  }

}
