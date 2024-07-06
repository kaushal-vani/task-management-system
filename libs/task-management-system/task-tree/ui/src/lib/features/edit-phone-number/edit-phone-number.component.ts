import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BUTTON_NAME, SCREEN_VIEW, ScreenAction } from '@task-tree-shared';

@Component({
  selector: 'lib-edit-phone-number',
  templateUrl: './edit-phone-number.component.html',
  styleUrls: ['./edit-phone-number.component.scss'],
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
export class EditPhoneNumberComponent {
  @Output() navigate = new EventEmitter<ScreenAction>();
  @Output() back = new EventEmitter<ScreenAction>();

  phoneForm: FormGroup;
  successMessage = '';

  constructor(private fb: FormBuilder) {
    this.phoneForm = this.fb.group({
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(15),
          Validators.pattern('^[0-9]+$'),
        ],
      ],
    });
  }

  get phone() {
    return this.phoneForm.get('phoneNumber');
  }

  savePhoneNumber() {
    if (this.phoneForm.valid) {
      this.successMessage = 'Phone number updated successfully!';
      setTimeout(() => {
        this.navigate.emit({
          currentView: SCREEN_VIEW.EDIT_PHONE_NUMBER,
          buttonName: BUTTON_NAME.SAVE,
          nextView: SCREEN_VIEW.ONE_TIME_PASSWORD,
        });
      }, 2000);
    }
  }

  cancelEdit() {
    this.phoneForm.reset();
    this.back.emit({
      currentView: SCREEN_VIEW.EDIT_PHONE_NUMBER,
      buttonName: BUTTON_NAME.CANCEL,
      previousView: SCREEN_VIEW.SELECT_DEVICE,
    });
  }
}
