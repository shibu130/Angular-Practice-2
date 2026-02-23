import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RXJSPlaygroundComponent } from './rxjsplayground.component';

describe('RXJSPlaygroundComponent', () => {
  let component: RXJSPlaygroundComponent;
  let fixture: ComponentFixture<RXJSPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RXJSPlaygroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RXJSPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
