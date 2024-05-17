import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgModel } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { CommonModule, NgIf } from '@angular/common';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgbModule,NgbModule,NgbCarousel,FormsModule,CommonModule,NavbarComponent,FooterComponent,LoginComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
   

})
export class AppComponent {
  title = 'app';
}
