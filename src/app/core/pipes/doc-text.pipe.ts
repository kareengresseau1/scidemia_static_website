import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';

/** Document-like object with optional EN text for the language toggle */
interface DocTextInfo {
  title: string;
  description: string;
  titleEn?: string;
  descriptionEn?: string;
}

@Pipe({ name: 'docText', standalone: true, pure: false })
export class DocTextPipe implements PipeTransform {
  constructor(private translation: TranslationService) {}

  transform(doc: DocTextInfo | null | undefined, field: 'title' | 'description'): string {
    if (!doc) return '';
    const isEn = this.translation.currentLang === 'en';
    if (field === 'title') {
      return isEn && doc.titleEn ? doc.titleEn : doc.title;
    }
    return isEn && doc.descriptionEn ? doc.descriptionEn : doc.description;
  }
}
