import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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

  @ViewChild('profileMenu')
  profileMenu!: ElementRef;
  @ViewChild('profileMenuContent')
  profileMenuContent!: ElementRef;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  toggleUserMenu() {
    this.userMenuVisible = !this.userMenuVisible;
  }

  toggleProfileMenu() {
    this.profileMenuVisible = !this.profileMenuVisible;
  }

  closeProfileMenu() {
    this.profileMenuVisible = false;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.profileMenu.nativeElement.contains(event.target) && !this.profileMenuContent.nativeElement.contains(event.target)) {
      this.profileMenuVisible = false;
    }
  }
}