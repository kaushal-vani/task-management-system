import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenAction, SCREEN_VIEW, BUTTON_NAME } from '@task-tree-shared';

@Component({
  selector: 'lib-edit-phone-number',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-phone-number.component.html',
  styleUrl: './edit-phone-number.component.scss',
})
export class EditPhoneNumberComponent {
  @Output() navigate = new EventEmitter<ScreenAction>();

  changeView() {
    this.navigate.emit({
      currentView: SCREEN_VIEW.EDIT_PHONE_NUMBER,
      buttonName: BUTTON_NAME.SUBMIT,
      nextView: SCREEN_VIEW.EDIT_EMAIL,
    });
  }
}
