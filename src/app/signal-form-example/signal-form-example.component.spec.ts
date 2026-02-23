import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalFormExampleComponent } from './signal-form-example.component';

describe('SignalFormExampleComponent', () => {
  let component: SignalFormExampleComponent;
  let fixture: ComponentFixture<SignalFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignalFormExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
