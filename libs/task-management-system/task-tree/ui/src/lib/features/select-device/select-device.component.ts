import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { ScreenAction, SCREEN_VIEW, BUTTON_NAME } from '@task-tree-shared';

@Component({
  selector: 'lib-select-device',
  standalone: true,
  imports: [CommonModule, ButtonModule,CardModule],
  templateUrl: './select-device.component.html',
  styleUrl: './select-device.component.scss',
})
export class SelectDeviceComponent {
  @Output() navigate = new EventEmitter<ScreenAction>();
  @Output() back = new EventEmitter<ScreenAction>();

  selectOption(option: string) {
    let nextView: SCREEN_VIEW;

    switch (option) {
      case 'addEmail':
        nextView = SCREEN_VIEW.ADD_EMAIL;
        break;
      case 'editEmail':
        nextView = SCREEN_VIEW.EDIT_EMAIL;
        break;
      case 'addPhone':
        nextView = SCREEN_VIEW.ADD_PHONE_NUMBER;
        break;
      case 'editPhone':
        nextView = SCREEN_VIEW.EDIT_PHONE_NUMBER;
        break;
      default:
        return;
    }

    this.navigate.emit({
      currentView: SCREEN_VIEW.SELECT_DEVICE,
      buttonName: BUTTON_NAME.NEXT,
      nextView: nextView,
    });
  }
  setUpLater(){
    this.back.emit({
      currentView: SCREEN_VIEW.SELECT_DEVICE,
      buttonName: BUTTON_NAME.SET_UP_LATER,
    })
  }
}
