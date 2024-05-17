import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

import { LocalService } from '../local-service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SignupComponent, FormsModule, ReactiveFormsModule, CommonModule, RouterModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form1 = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });
  get f(){
    return this.form1.controls;
  }
  username: string = '';
  password: string = '';
  constructor(private localService: LocalService) { }
  login() {
    const username = this.localService.getData('username');
    const password = this.localService.getData('password');
  
    const user = JSON.stringify(this.form1.value.username);
    const pass = JSON.stringify(this.form1.value.password);
    if(username===user && password===pass){
      
      window.location.href = 'home';
    }
    else{
      alert("Login Failed");
    }
  }


}