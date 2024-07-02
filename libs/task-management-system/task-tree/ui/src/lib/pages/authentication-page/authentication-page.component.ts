import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../features/login/login.component';
import { SignUpComponent } from '../../features/sign-up/sign-up.component';
import { AddPhoneNumberComponent } from '../../features/add-phone-number/add-phone-number.component';
import { AddEmailComponent } from '../../features/add-email/add-email.component';
import { EditEmailComponent } from '../../features/edit-email/edit-email.component';
import { EditPhoneNumberComponent } from '../../features/edit-phone-number/edit-phone-number.component';
import { OneTimePasswordComponent } from '../../features/one-time-password/one-time-password.component';

@Component({
  selector: 'lib-authentication-page',
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    SignUpComponent,
    AddPhoneNumberComponent,
    AddEmailComponent,
    EditEmailComponent,
    EditPhoneNumberComponent,
    OneTimePasswordComponent,
  ],
  templateUrl: './authentication-page.component.html',
  styleUrl: './authentication-page.component.scss',
})
export class AuthenticationPageComponent {}
