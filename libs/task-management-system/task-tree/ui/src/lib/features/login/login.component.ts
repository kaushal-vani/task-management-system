import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUTTON_NAME, SCREEN_VIEW, ScreenAction } from '@task-tree-shared';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @Output() navigateAction = new EventEmitter<ScreenAction>();

  changeView() {
    this.navigateAction.emit({
      currentView: SCREEN_VIEW.LOGIN,
      buttonName: BUTTON_NAME.VERIFY,
      nextView: SCREEN_VIEW.ONE_TIME_PASSWORD,
      previousView: SCREEN_VIEW.SIGN_UP
    });
  }
}
