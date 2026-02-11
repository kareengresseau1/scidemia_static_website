import { Injectable, ApplicationRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lang, translations } from '../translations/translations';

const STORAGE_KEY = 'scidemia_lang';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly currentLang$ = new BehaviorSubject<Lang>(this.loadStoredLang());

  constructor(private appRef: ApplicationRef) {}

  get currentLang(): Lang {
    return this.currentLang$.value;
  }

  get currentLangObservable() {
    return this.currentLang$.asObservable();
  }

  setLanguage(lang: Lang): void {
    if (this.currentLang$.value === lang) return;
    this.currentLang$.next(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
    this.appRef.tick();
  }

  toggleLanguage(): void {
    this.setLanguage(this.currentLang === 'fr' ? 'en' : 'fr');
  }

  get(key: string): string {
    const lang = this.currentLang$.value;
    const dict = translations[lang];
    return dict[key] ?? key;
  }

  private loadStoredLang(): Lang {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'fr' || stored === 'en') return stored;
    } catch {
      // ignore
    }
    return 'fr';
  }
}
