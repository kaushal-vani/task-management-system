import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SCREEN_VIEW, BUTTON_NAME, ScreenAction } from '@task-tree-shared';

@Component({
  selector: 'lib-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  @Output() navigateAction = new EventEmitter<ScreenAction>();
  @Output() submitAction = new EventEmitter<ScreenAction>();
  signUpForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  onSubmit() {
    this.loading = true;

    setTimeout(() => {
      if (this.signUpForm.valid) {
        this.submitAction.emit({
          currentView: SCREEN_VIEW.SIGN_UP,
          buttonName: BUTTON_NAME.SUBMIT,
        });
        console.log('Form Submitted', this.signUpForm.value);
      }
      this.loading = false;
    }, 2000);
  }

  changeView() {
    this.navigateAction.emit({
      currentView: SCREEN_VIEW.SIGN_UP,
      buttonName: BUTTON_NAME.SUBMIT,
      nextView: SCREEN_VIEW.LOGIN,
      previousView: SCREEN_VIEW.SIGN_UP,
    });
  }
}
