import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenAction, SCREEN_VIEW, BUTTON_NAME } from '@task-tree-shared';

@Component({
  selector: 'lib-one-time-password',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './one-time-password.component.html',
  styleUrl: './one-time-password.component.scss',
})
export class OneTimePasswordComponent {
  @Output() navigateAction = new EventEmitter<ScreenAction>();

  changeView() {
    this.navigateAction.emit({
      currentView: SCREEN_VIEW.ONE_TIME_PASSWORD,
      buttonName: BUTTON_NAME.OTP_SUBMIT,
      nextView: SCREEN_VIEW.EDIT_PHONE_NUMBER,
    });
  }
}
