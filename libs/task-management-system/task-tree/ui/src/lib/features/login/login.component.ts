import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUTTON_NAME, SCREEN_VIEW, ScreenAction } from '@task-tree-shared';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

// PrimeNG Modules
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  @Output() navigate = new EventEmitter<ScreenAction>();
  @Output() verify = new EventEmitter<ScreenAction>();
  @Output() back = new EventEmitter<ScreenAction>();

  loginForm!: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      if (this.loginForm.valid) {
        this.verify.emit({
          buttonName: BUTTON_NAME.SUBMIT,
          currentView: SCREEN_VIEW.LOGIN,
        });
      }
    }, 2000);
  }

  forgotPassword() {
    this.navigate.emit({
      buttonName: BUTTON_NAME.FORGOT_PASSWORD,
      currentView: SCREEN_VIEW.LOGIN,
      nextView: SCREEN_VIEW.FORGOT_PASSWORD,
      previousView: SCREEN_VIEW.SIGN_UP,
    });
  }

  navigateToSignUp() {
    this.back.emit({
      buttonName: BUTTON_NAME.GO_TO_SIGN_UP,
      currentView: SCREEN_VIEW.LOGIN,
      previousView: SCREEN_VIEW.SIGN_UP,
    });
  }
}
