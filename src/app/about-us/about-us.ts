import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { addIcons } from "ionicons";
import { RouterLink } from '@angular/router';
import { Router } from "@angular/router";
import { FooterComponent } from '../footer/footer';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { TranslatePipe } from '../core/pipes/translate.pipe';

@Component({
  selector: 'app-about-us',
  imports: [IonButtons, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, RouterLink, NavigationBar, FooterComponent, TranslatePipe],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {

}
