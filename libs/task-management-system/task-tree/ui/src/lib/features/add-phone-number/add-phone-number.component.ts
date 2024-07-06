import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenAction, SCREEN_VIEW, BUTTON_NAME } from '@task-tree-shared';

@Component({
  selector: 'lib-add-phone-number',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-phone-number.component.html',
  styleUrl: './add-phone-number.component.scss',
})
export class AddPhoneNumberComponent {
  @Output() navigateAction = new EventEmitter<ScreenAction>();

  changeView() {
    this.navigateAction.emit({
      currentView: SCREEN_VIEW.ADD_PHONE_NUMBER,
      buttonName: BUTTON_NAME.SUBMIT,
      nextView: SCREEN_VIEW.ADD_EMAIL,
    });
  }
}
