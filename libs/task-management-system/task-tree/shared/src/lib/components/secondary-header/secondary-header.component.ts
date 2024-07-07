import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-secondary-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secondary-header.component.html',
  styleUrl: './secondary-header.component.scss',
})
export class SecondaryHeaderComponent {}
