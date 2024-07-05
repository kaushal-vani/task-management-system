import { BUTTON_NAME, SCREEN_VIEW } from '../enums/screen-view.enum';

export interface ScreenAction {
  currentView: SCREEN_VIEW;
  nextView?: SCREEN_VIEW;
  previousView?: SCREEN_VIEW;
  buttonName?: BUTTON_NAME;
  email: boolean;
  phoneNumber: boolean;
}
