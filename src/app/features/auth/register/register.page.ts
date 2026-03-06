import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ){

    this.form = this.fb.group({

      nombre: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      password: ['', Validators.required]

    });

  }

  register(){

  if(this.form.invalid) return;

  const {nombre, email, password} = this.form.value;

  const user = {
    id: crypto.randomUUID(),
    nombre: nombre,
    email: email,
    password: password,
    fechaRegistro: new Date()
  };

  const success = this.authService.register(user);

  if(success){
    this.router.navigate(['/tabs/dashboard']);
  }else{
    alert("El usuario ya existe");
  }

}

}