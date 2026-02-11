import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonSearchbar } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { addIcons } from "ionicons";
import { RouterLink } from '@angular/router';
import { Router } from "@angular/router";
import { FooterComponent } from "../footer/footer";
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { TranslatePipe } from '../core/pipes/translate.pipe';

@Component({
  selector: 'app-accueil',
  imports: [IonSearchbar, IonButtons, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, RouterLink, FooterComponent, NavigationBar, TranslatePipe],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {

  constructor(private router: Router, private navCtrl: NavController) { }


  redirectLoginPage(){
    this.navCtrl.navigateForward('login');
   }

   redirectHomePage(){
    this.navCtrl.navigateForward('home');
   }

   navigateToTemplates() {
    this.router.navigate(['/templates']);
  }



}
