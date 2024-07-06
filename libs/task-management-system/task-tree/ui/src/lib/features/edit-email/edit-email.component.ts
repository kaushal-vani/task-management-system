import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenAction, SCREEN_VIEW, BUTTON_NAME } from '@task-tree-shared';

@Component({
  selector: 'lib-edit-email',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-email.component.html',
  styleUrl: './edit-email.component.scss',
})
export class EditEmailComponent {
  @Output() navigateAction = new EventEmitter<ScreenAction>();

  changeView() {
    this.navigateAction.emit({
      currentView: SCREEN_VIEW.EDIT_EMAIL,
      buttonName: BUTTON_NAME.SUBMIT,
      nextView: SCREEN_VIEW.ADD_EMAIL,
    });
  }
}
