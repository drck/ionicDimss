import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SecurityService } from '../service/security.service';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ClientHeaderComponent implements OnInit {
  public showLogoutButton = false;
  public profileImage: string;
  public isInvalidImage = false;
  public isOnDashboard = false;
  public shouldBeVisible = false;

  constructor(
    public navCtrl: NavController,
    private router: Router,
    public secure: SecurityService
  ) {
    const shouldBeVisible=secure.bndBaner;

    const visibilityOnHeader = (url: NavigationEnd) => {
      let status = false;
      return {
        onUrl(): any {
          status = (url.url === ('/login') || url.url === '/') ? false : true;
          return this;
        },
        onRedirect(): boolean {
          status = url.urlAfterRedirects === '/login' ? false : true;
          return status;
        }
      };
    };


    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(async (urlEvent: NavigationEnd) => {
      this.isOnDashboard = (urlEvent.url === '/dashboard') ? true : false;
      this.shouldBeVisible = visibilityOnHeader(urlEvent).onUrl().onRedirect();
    });
  }

  public ngOnInit() {

  }

  private generateImageLink(client: number): string {
    const userValue = String(client);
    const cveClient = userValue.slice(0, 4);
    return `http://photos.global.hsbc/casual/square/${cveClient}/${userValue}.jpg`;
  }

  public async logout(): Promise<void> {
    try {
    } catch (error) { }
  }

  public showLogout(): void {
    this.showLogoutButton = !this.showLogoutButton;
  }
}
