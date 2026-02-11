import { NavigationBar } from './../navigation-bar/navigation-bar';
import { Component } from '@angular/core';
import { IonContent } from "@ionic/angular/standalone";
import { ModalController } from '@ionic/angular/standalone';
import { FooterComponent } from '../footer/footer';
import { CommonModule } from '@angular/common';
import { DocumentModalComponent } from './document-modal/document-modal';
import { TranslatePipe } from '../core/pipes/translate.pipe';

export interface DocumentInfo {
  id: string;
  price: number;
  title: string;
  image: string;
  images: string[];
  link: string;
  description: string;
}

@Component({
  selector: 'app-notes',
  imports: [IonContent, NavigationBar, FooterComponent, CommonModule, TranslatePipe],
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
      images: [
        '/assets/images/screenshots_documents/cover_notebook_chemistry.png',
        '/assets/images/screenshots_documents/content_notebook_chemistry.png',
        '/assets/images/screenshots_documents/example_notebook_chemistry.png',
      ],
      link: 'https://www.amazon.ca/Cahier-chimie-organique-Loraine-Gresseau/dp/B0GLFPGH3L/ref=sr_1_1?crid=LAIALBJ54W3I&dib=eyJ2IjoiMSJ9.E2fnmwfHLZh_iGBwTZQlUP96zEqvMT51fd-pzYQ8AKIUwqQKXBytSPAj9lLrVjE0K1_WbSY_NT4BIayW9nwXlxFanOOTpz6FJqe8GLgBnTeA5a04K0KYEFAtREYuHKosq9mScqdqiKATJSF-WrWv3p58yQVjywRQTqqntrPo8ddHuZy6Inu5rxS1um1QKbtRl1-X51sV-Ko5DTpbqKyIJftTbvjb0NYrL7TbwgFGTeA.XLUdIV2Iq6snGTRCKc2Az7NxQ6m3ZsMixzj7c4j5OSY&dib_tag=se&keywords=cahier+de+notes+de+chimie+organique&qid=1770776451&s=books&sprefix=cahier+de+notes+de+chimie+organique%2Cstripbooks%2C239&sr=1-1',
      description: 'Ce cahier est utile pour dessiner et visualiser les molécules organiques ainsi que les réactions chimiques. Idéal pour le domaine de la chimie organique. Utilisez le cahier pour compléter tes notes de cours.',
    },
    {
      id: 'compsci',
      price: 16.99,
      title: 'Cahier de notes en programmation informatique',
      image: '/assets/images/screenshots_documents/cover_notebook_compsci.png',
      images: [
        '/assets/images/screenshots_documents/cover_notebook_compsci.png',
        '/assets/images/screenshots_documents/content_notebook_compsci.png',
        '/assets/images/screenshots_documents/example_notebook_compsci.png',
      ],
      link: 'https://www.amazon.ca/Cahier-programmation-informatique-Loraine-Gresseau/dp/B0GLFPGH3L/ref=sr_1_1?crid=LAIALBJ54W3I&dib=eyJ2IjoiMSJ9.E2fnmwfHLZh_iGBwTZQlUP96zEqvMT51fd-pzYQ8AKIUwqQKXBytSPAj9lLrVjE0K1_WbSY_NT4BIayW9nwXlxFanOOTpz6FJqe8GLgBnTeA5a04K0KYEFAtREYuHKosq9mScqdqiKATJSF-WrWv3p58yQVjywRQTqqntrPo8ddHuZy6Inu5rxS1um1QKbtRl1-X51sV-Ko5DTpbqKyIJftTbvjb0NYrL7TbwgFGTeA.XLUdIV2Iq6snGTRCKc2Az7NxQ6m3ZsMixzj7c4j5OSY&dib_tag=se&keywords=cahier+de+notes+de+programmation+informatique&qid=1770776451&s=books&sprefix=cahier+de+notes+de+programmation+informatique%2Cstripbooks%2C239&sr=1-1',
      description: 'Ce cahier de programmation informatique permet de pratiquer les bases de la programmation en ecrivant du pseudocode, les structures de données, les algorithmes et dessiner des circuits logiques, etc. Conçu pour les débutants et les étudiants en informatique. Utilisez le cahier pour compléter tes notes de cours.',
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
