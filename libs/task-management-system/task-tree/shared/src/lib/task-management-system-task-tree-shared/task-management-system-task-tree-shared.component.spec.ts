import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskManagementSystemTaskTreeSharedComponent } from './task-management-system-task-tree-shared.component';

describe('TaskManagementSystemTaskTreeSharedComponent', () => {
  let component: TaskManagementSystemTaskTreeSharedComponent;
  let fixture: ComponentFixture<TaskManagementSystemTaskTreeSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskManagementSystemTaskTreeSharedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      TaskManagementSystemTaskTreeSharedComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
