import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTypeBusinessComponent } from './app-type-business.component';

describe('AppTypeBusinessComponent', () => {
  let component: AppTypeBusinessComponent;
  let fixture: ComponentFixture<AppTypeBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTypeBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTypeBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
