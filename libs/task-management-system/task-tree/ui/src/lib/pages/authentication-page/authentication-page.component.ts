import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../features/login/login.component';
import { SignUpComponent } from '../../features/sign-up/sign-up.component';
import { AddPhoneNumberComponent } from '../../features/add-phone-number/add-phone-number.component';
import { AddEmailComponent } from '../../features/add-email/add-email.component';
import { EditEmailComponent } from '../../features/edit-email/edit-email.component';
import { EditPhoneNumberComponent } from '../../features/edit-phone-number/edit-phone-number.component';
import { BUTTON_NAME, SCREEN_VIEW, ScreenAction } from '@task-tree-shared';
import { Router } from '@angular/router';
import { ForgotPasswordComponent } from "../../features/forgot-password/forgot-password.component";
import { OneTimePasswordComponent } from "../../features/one-time-password/one-time-password.component";
import { SelectDeviceComponent } from "../../features/select-device/select-device.component";
import { VerificationCompletedComponent } from "../../features/verification-completed/verification-completed.component";

@Component({
    selector: 'lib-authentication-page',
    standalone: true,
    templateUrl: './authentication-page.component.html',
    styleUrl: './authentication-page.component.scss',
    imports: [
        CommonModule,
        LoginComponent,
        SignUpComponent,
        AddPhoneNumberComponent,
        AddEmailComponent,
        EditEmailComponent,
        EditPhoneNumberComponent,
        ForgotPasswordComponent,
        OneTimePasswordComponent,
        SelectDeviceComponent,
        VerificationCompletedComponent
    ]
})
export class AuthenticationPageComponent {
  currentView: SCREEN_VIEW = SCREEN_VIEW.VERIFICATION_COMPLETED;
  router = inject(Router);

  navigateToNextView(screen: ScreenAction) {
    this.currentView = screen.nextView || this.currentView;
  }
  backToPreviousView(screen: ScreenAction) {
    this.currentView = screen.previousView || this.currentView;
  }

  onVerify(screen: ScreenAction) {
    if (screen.buttonName === BUTTON_NAME.SUBMIT) {
      if(screen.currentView === SCREEN_VIEW.SIGN_UP){
        this.router.navigate(['/profile'])
      }
      else{
        this.router.navigate(['/task']);
      }
    }
  }

  onSetupLater(screen:ScreenAction){
    if (screen.buttonName === BUTTON_NAME.SET_UP_LATER) {
      this.router.navigate(['/home']);
    }
  }

  resendCode(screen: ScreenAction){
    if(screen.buttonName === BUTTON_NAME.RESEND){
      console.log('Resend Code works')
    }
  }
}
