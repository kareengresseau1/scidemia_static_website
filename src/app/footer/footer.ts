import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  imports: [FormsModule, RouterLink],
})
export class FooterComponent   {

  loginErrorMessage: string | null = null;

  constructor(private router: Router, private navCtrl: NavController) {}

  redirectLoginPage(){
    this.navCtrl.navigateForward('login');
  }

  redirectHomePage(){
    this.navCtrl.navigateForward('home');
  }



}
