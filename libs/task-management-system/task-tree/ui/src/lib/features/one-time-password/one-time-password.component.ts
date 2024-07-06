import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { InputOtpModule } from 'primeng/inputotp';
import { BUTTON_NAME, SCREEN_VIEW, ScreenAction } from '@task-tree-shared';

@Component({
  selector: 'lib-one-time-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    InputOtpModule,
    CardModule,
  ],
  templateUrl: './one-time-password.component.html',
  styleUrls: ['./one-time-password.component.scss'],
})
export class OneTimePasswordComponent implements OnInit {
  @Output() resend = new EventEmitter<ScreenAction>();
  @Output() navigate = new EventEmitter<ScreenAction>();
  @Output() verify = new EventEmitter<ScreenAction>();

  value = '';
  minutes = 5;
  seconds = 0;
  interval!: number;

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        if (this.minutes > 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          clearInterval(this.interval);
          // Handle timer expiration here
        }
      }
    }, 1000);
  }

  resendCode() {
    this.resend.emit({
      currentView: SCREEN_VIEW.ONE_TIME_PASSWORD,
      buttonName: BUTTON_NAME.RESEND,
    });
  }

  changeDevice() {
    this.navigate.emit({
      currentView: SCREEN_VIEW.ONE_TIME_PASSWORD,
      nextView: SCREEN_VIEW.SELECT_DEVICE,
    });
  }

  submitOTP(){
    this.verify.emit({
      currentView: SCREEN_VIEW.ONE_TIME_PASSWORD,
      buttonName: BUTTON_NAME.SUBMIT
    })
  }
}
