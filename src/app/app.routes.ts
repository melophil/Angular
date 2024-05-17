import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TechstackComponent } from './techstack/techstack.component';
import { LearningComponent } from './learning/learning.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'learning', component: LearningComponent},
    { path: 'tech-stack', component: TechstackComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup',component:SignupComponent},
    { path:'footer',component:FooterComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:'**',component:PagenotfoundComponent}
]; 
