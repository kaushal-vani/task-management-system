import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUTTON_NAME, SCREEN_VIEW, ScreenAction } from '@task-tree-shared';

@Component({
  selector: 'lib-sign-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  @Output() navigate = new EventEmitter<ScreenAction>();

  changeView() {
    this.navigate.emit({
      currentView: SCREEN_VIEW.SIGN_UP,
      buttonName: BUTTON_NAME.SUBMIT,
      nextView: SCREEN_VIEW.LOGIN,
    });
  }
}
