import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuVisible = false;
  userMenuVisible = false;
  profileMenuVisible = false;

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  toggleUserMenu(): void {
    this.userMenuVisible = !this.userMenuVisible;
  }

  toggleProfileMenu(): void {
    this.profileMenuVisible = !this.profileMenuVisible;
  }
}
