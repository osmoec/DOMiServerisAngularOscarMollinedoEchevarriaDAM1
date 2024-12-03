import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOUTComponent } from './app-out.component';

describe('AppOUTComponent', () => {
  let component: AppOUTComponent;
  let fixture: ComponentFixture<AppOUTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppOUTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppOUTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
