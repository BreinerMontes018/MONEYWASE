import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ){

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  login(){

    if(this.form.invalid) return;
    const {email, password} = this.form.value;
    const success = this.authService.login(email, password);
    if(success){

      this.router.navigate(['/tabs/dashboard'], { replaceUrl: true });

    }else{

      alert('Credenciales incorrectas');

    }

  }

  irRegistro(){

    this.router.navigate(['/auth/register']);
  }

}