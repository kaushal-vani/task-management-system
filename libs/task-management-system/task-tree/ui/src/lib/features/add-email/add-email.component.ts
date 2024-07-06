import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenAction, SCREEN_VIEW, BUTTON_NAME } from '@task-tree-shared';

@Component({
  selector: 'lib-add-email',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-email.component.html',
  styleUrl: './add-email.component.scss',
})
export class AddEmailComponent {
  @Output() navigateAction = new EventEmitter<ScreenAction>();

  changeView() {
    this.navigateAction.emit({
      currentView: SCREEN_VIEW.ADD_EMAIL,
      buttonName: BUTTON_NAME.SUBMIT,
      nextView: SCREEN_VIEW.VERIFICATION_COMPLETED,
    });
  }
}
