import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SecurityService } from '../service/security.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  url: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController,
    public secure:SecurityService
    ) {
    secure.bndBaner = true;
    }


    tiles: Tile[] = [
      {text: 'Registro Incidencias', cols: 3, rows: 1, color: 'white',url:'/register'},
      {text: 'Bitacora', cols: 1, rows: 2, color: 'white',url:'/bitacora'},
      {text: 'Entregables', cols: 1, rows: 1, color: 'white',url:'/entregables'},
      {text: '', cols: 2, rows: 1, color: 'white',url:''},
    ];
}
