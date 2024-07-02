import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskManagementSystemTaskTreeSmartComponent } from './task-management-system-task-tree-smart.component';

describe('TaskManagementSystemTaskTreeSmartComponent', () => {
  let component: TaskManagementSystemTaskTreeSmartComponent;
  let fixture: ComponentFixture<TaskManagementSystemTaskTreeSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskManagementSystemTaskTreeSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      TaskManagementSystemTaskTreeSmartComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
