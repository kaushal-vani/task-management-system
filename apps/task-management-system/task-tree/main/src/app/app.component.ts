import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from '@task-tree-smart';
import { HeaderComponent } from '@task-tree-shared';

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [AuthenticationComponent, RouterModule, HeaderComponent]
})
export class AppComponent {
  title = 'task-management-system-task-tree-main';
}
