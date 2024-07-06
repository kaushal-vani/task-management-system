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
  selector: 'lib-add-phone-number',
  templateUrl: './add-phone-number.component.html',
  styleUrls: ['./add-phone-number.component.scss'],
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
export class AddPhoneNumberComponent {
  @Output() navigate = new EventEmitter<ScreenAction>();
  @Output() back = new EventEmitter<ScreenAction>();

  phoneForm: FormGroup;
  successMessage!: string;

  constructor(private fb: FormBuilder) {
    this.phoneForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  get phone() {
    return this.phoneForm.get('phoneNumber');
  }

  savePhoneNumber() {
    if (this.phoneForm.valid) {
      this.successMessage = 'Phone number added successfully.';
      setTimeout(() => {
        this.navigate.emit({
          currentView: SCREEN_VIEW.ADD_PHONE_NUMBER,
          buttonName: BUTTON_NAME.SAVE,
          nextView: SCREEN_VIEW.VERIFICATION_COMPLETED,
        });
      }, 2000);
    }
  }

  cancelAddPhone() {
    this.phoneForm.reset();
    this.back.emit({
      currentView: SCREEN_VIEW.ADD_PHONE_NUMBER,
      buttonName: BUTTON_NAME.CANCEL,
      previousView: SCREEN_VIEW.CHANGE_DEVICE,
    });
  }
}