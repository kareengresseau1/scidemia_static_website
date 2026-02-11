import { Component, inject, Input, OnDestroy } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, ModalController } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import type { DocumentInfo } from '../notes';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../core/pipes/translate.pipe';

@Component({
  selector: 'app-document-modal',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, CommonModule, RouterLink, TranslatePipe],
  templateUrl: './document-modal.html',
  styleUrl: './document-modal.scss',
})
export class DocumentModalComponent implements OnDestroy {
  @Input() doc: DocumentInfo | null = null;
  private modalCtrl = inject(ModalController);

  currentSlideIndex = 0;
  lightboxOpen = false;
  private lightboxEl: HTMLElement | null = null;
  private boundKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') this.closeLightbox();
  };

  get slideImages(): string[] {
    const d = this.doc;
    if (!d) return [];
    return (d.images && d.images.length > 0) ? d.images : [d.image];
  }

  get currentImage(): string {
    const slides = this.slideImages;
    if (slides.length === 0) return '';
    return slides[this.currentSlideIndex] ?? slides[0];
  }

  get canGoPrev(): boolean {
    return this.slideImages.length > 1 && this.currentSlideIndex > 0;
  }

  get canGoNext(): boolean {
    return this.slideImages.length > 1 && this.currentSlideIndex < this.slideImages.length - 1;
  }

  nextSlide() {
    const slides = this.slideImages;
    if (slides.length <= 1) return;
    this.currentSlideIndex = Math.min(this.currentSlideIndex + 1, slides.length - 1);
  }

  prevSlide() {
    if (this.slideImages.length <= 1) return;
    this.currentSlideIndex = Math.max(this.currentSlideIndex - 1, 0);
  }

  goToSlide(index: number) {
    const slides = this.slideImages;
    if (index >= 0 && index < slides.length) this.currentSlideIndex = index;
  }

  openLightbox() {
    if (this.lightboxEl) return;
    const imgSrc = this.currentImage;
    const alt = this.doc?.title ?? '';
    const backdrop = document.createElement('div');
    backdrop.className = 'document-modal-lightbox-backdrop';
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.setAttribute('aria-label', 'Image agrandie');
    backdrop.innerHTML = `
      <button type="button" class="document-modal-lightbox-close" aria-label="Fermer">×</button>
      <div class="document-modal-lightbox-content">
        <img src="${imgSrc}" alt="${alt.replaceAll('"', '&quot;')}" class="document-modal-lightbox-image">
      </div>
    `;
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) this.closeLightbox();
    });
    backdrop.querySelector('.document-modal-lightbox-close')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.closeLightbox();
    });
    backdrop.querySelector('.document-modal-lightbox-content')?.addEventListener('click', (e) => e.stopPropagation());
    document.body.appendChild(backdrop);
    document.addEventListener('keydown', this.boundKeydown);
    this.lightboxEl = backdrop;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxEl?.remove();
    this.lightboxEl = null;
    document.removeEventListener('keydown', this.boundKeydown);
    this.lightboxOpen = false;
  }

  ngOnDestroy() {
    this.closeLightbox();
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
