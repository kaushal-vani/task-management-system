import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BUTTON_NAME, SCREEN_VIEW, ScreenAction } from '@task-tree-shared';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'lib-add-email',
  templateUrl: './add-email.component.html',
  styleUrls: ['./add-email.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
  ],
})
export class AddEmailComponent {
  @Output() navigate = new EventEmitter<ScreenAction>();
  @Output() back = new EventEmitter<ScreenAction>();

  emailForm: FormGroup;
  successMessage!: string;

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email]],
    });
  }

  get email() {
    return this.emailForm.get('emailAddress');
  }

  saveEmailAddress() {
    if (this.emailForm.valid) {
      this.successMessage = 'Email address added successfully.';
      setTimeout(() => {
        this.navigate.emit({
          currentView: SCREEN_VIEW.ADD_EMAIL,
          buttonName: BUTTON_NAME.SAVE,
          nextView: SCREEN_VIEW.ONE_TIME_PASSWORD,
        });
      }, 2000);
    }
  }

  cancelAddEmail() {
    this.emailForm.reset();
    this.back.emit({
      currentView: SCREEN_VIEW.ADD_EMAIL,
      buttonName: BUTTON_NAME.CANCEL,
      previousView: SCREEN_VIEW.SELECT_DEVICE,
    });
  }
}