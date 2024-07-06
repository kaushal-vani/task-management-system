import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// PrimeNG Modules
import { SCREEN_VIEW, BUTTON_NAME, ScreenAction } from '@task-tree-shared';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'lib-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  @Output() back = new EventEmitter<ScreenAction>();
  @Output() verify = new EventEmitter<ScreenAction>();
  forgotPasswordForm!: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.loading = true;
    setTimeout(() => {
      if (this.forgotPasswordForm.valid) {
        this.verify.emit({
          currentView: SCREEN_VIEW.FORGOT_PASSWORD,
          buttonName: BUTTON_NAME.SUBMIT,
        });
        // Mock logic for password recovery (send email, etc.)
        console.log('Submitting forgot password form:', this.forgotPasswordForm.value);
      }
      this.loading = false;
    }, 2000);
  }

  navigateToLogin() {
    this.back.emit({
      buttonName: BUTTON_NAME.GO_TO_LOGIN,
      currentView: SCREEN_VIEW.FORGOT_PASSWORD,
      previousView: SCREEN_VIEW.LOGIN,
    });
  }
}
