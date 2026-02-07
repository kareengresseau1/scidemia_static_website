import { Component } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonContent,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenu,
  IonMenuButton,
  IonIcon,
  IonSearchbar,
  IonButton,
  MenuController,
  IonMenuToggle,
  IonAlert,
  IonInput
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import {
  searchOutline,
  personOutline,
  cartOutline,
  heart,
  menuOutline,
  ellipsisVerticalSharp,
  notificationsOutline,
  homeOutline,
  logOutOutline,
  trashBin
} from 'ionicons/icons';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss',
  imports: [
    IonInput,
    IonAlert,
    IonButton,
    IonIcon,
    IonToolbar,
    IonTitle,
    IonHeader,
    IonContent,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    IonMenu,
    IonButtons,
    IonMenuButton,
    IonMenuToggle,
    IonSearchbar,
    CommonModule
  ],
  providers: [PopoverController],
})
export class NavigationBar {
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private popoverController: PopoverController,
    private menuCtrl: MenuController
  ) {
    addIcons({
      personOutline,
      homeOutline,
      logOutOutline,
      searchOutline,
      notificationsOutline,
      menuOutline,
      ellipsisVerticalSharp,
      heart,
      cartOutline,
      trashBin
    });
  }
}
