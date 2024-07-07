import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatPageComponent } from './stat-page.component';

describe('StatPageComponent', () => {
  let component: StatPageComponent;
  let fixture: ComponentFixture<StatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
