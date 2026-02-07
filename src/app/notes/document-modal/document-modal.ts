import { Component, inject, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import type { DocumentInfo } from '../notes';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-document-modal',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, CommonModule, RouterLink],
  templateUrl: './document-modal.html',
  styleUrl: './document-modal.scss',
})
export class DocumentModalComponent {
  @Input() doc: DocumentInfo | null = null;
  private modalCtrl = inject(ModalController);

  close() {
    this.modalCtrl.dismiss();
  }
}
