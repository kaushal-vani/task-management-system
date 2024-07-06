import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerificationCompletedComponent } from './verification-completed.component';

describe('VerificationCompletedComponent', () => {
  let component: VerificationCompletedComponent;
  let fixture: ComponentFixture<VerificationCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificationCompletedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerificationCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
