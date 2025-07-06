import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentLanguage: string = 'es';
  languageDropdownOpen: boolean = false;

  private translations: any = {
    'es': {
      'NAVBAR.HOME': 'Inicio',
      'NAVBAR.HISTORY': 'Historia',
      'NAVBAR.MENU': 'Cartas',
      'NAVBAR.CONTACT': 'Contacto',
      'NAVBAR.OPEN_MENU': 'Abrir menú principal'
    },
    'en': {
      'NAVBAR.HOME': 'Home',
      'NAVBAR.HISTORY': 'History',
      'NAVBAR.MENU': 'Menu',
      'NAVBAR.CONTACT': 'Contact',
      'NAVBAR.OPEN_MENU': 'Open main menu'
    }
  };

  toggleLanguageDropdown(): void {
    this.languageDropdownOpen = !this.languageDropdownOpen;
  }

  changeLanguage(lang: string): void {
    this.currentLanguage = lang;
    this.languageDropdownOpen = false;
  }

  getCurrentLanguageDisplay(): string {
    return this.currentLanguage === 'es' ? 'ES' : 'EN';
  }

  translate(key: string): string {
    return this.translations[this.currentLanguage][key] || key;
  }
}
