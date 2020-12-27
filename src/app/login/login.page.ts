import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public authenticationForm: FormGroup;
  public isWelcomeScreenActive = true;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  
  ) {

    this.authenticationForm = new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(9999999999),
        Validators.minLength(10),
        Validators.maxLength(10)      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  public get user(): AbstractControl { return this.authenticationForm.get('username'); }
  public get password(): AbstractControl { return this.authenticationForm.get('password'); }

  public async loginEventHandler(): Promise<void> {
      this.navCtrl.navigateRoot('/home');
  }
}
