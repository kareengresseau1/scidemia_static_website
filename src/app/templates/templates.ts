import { NavigationBar } from './../navigation-bar/navigation-bar';
import { Component } from '@angular/core';
import { IonContent } from "@ionic/angular/standalone";
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-templates',
  imports: [IonContent, NavigationBar, FooterComponent],
  templateUrl: './templates.html',
  styleUrl: './templates.scss',
})
export class Templates {

}
