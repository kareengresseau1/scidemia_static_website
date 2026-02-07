import { NavigationBar } from './../navigation-bar/navigation-bar';
import { Component } from '@angular/core';
import { IonContent } from "@ionic/angular/standalone";
import { ModalController } from '@ionic/angular/standalone';
import { FooterComponent } from '../footer/footer';
import { CommonModule } from '@angular/common';
import { DocumentModalComponent } from './document-modal/document-modal';

export interface DocumentInfo {
  id: string;
  price: number;
  title: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-notes',
  imports: [IonContent, NavigationBar, FooterComponent, CommonModule],
  templateUrl: './notes.html',
  styleUrl: './notes.scss',
})
export class Notes {
  documents: DocumentInfo[] = [
    {
      id: 'chemistry',
      price: 16.99,
      title: 'Cahier de notes de chimie organique',
      image: '/assets/images/screenshots_documents/cover_notebook_chemistry.png',
      description: 'Ce cahier de chimie organique couvre les concepts fondamentaux de la structure moléculaire, les réactions organiques et la synthèse. Idéal pour les étudiants en sciences de la vie, chimie ou pharmacie. Les notes sont structurées par chapitres avec des exemples et des exercices pratiques.',
    },
    {
      id: 'compsci',
      price: 16.99,
      title: 'Cahier de notes en programmation informatique',
      image: '/assets/images/screenshots_documents/cover_notebook_compsci.png',
      description: 'Ce cahier de programmation informatique présente les bases de la programmation, les structures de données et les algorithmes. Conçu pour les débutants et les étudiants en informatique. Inclut des exemples de code et des explications détaillées.',
    },
  ];

  constructor(private modalCtrl: ModalController) {}

  async openModal(doc: DocumentInfo) {
    const modal = await this.modalCtrl.create({
      component: DocumentModalComponent,
      componentProps: { doc },
      cssClass: 'document-modal-rounded',
    });
    await modal.present();
  }
}
