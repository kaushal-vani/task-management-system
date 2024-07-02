import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationPageComponent } from '@task-tree-ui';

@Component({
  selector: 'lib-authentication',
  standalone: true,
  imports: [CommonModule, AuthenticationPageComponent],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss',
})
export class AuthenticationComponent {}
