import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskManagementSystemTaskTreeUiComponent } from './task-management-system-task-tree-ui.component';

describe('TaskManagementSystemTaskTreeUiComponent', () => {
  let component: TaskManagementSystemTaskTreeUiComponent;
  let fixture: ComponentFixture<TaskManagementSystemTaskTreeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskManagementSystemTaskTreeUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskManagementSystemTaskTreeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
