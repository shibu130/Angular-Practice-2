import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlValAcessorExampleComponent } from './control-val-acessor-example.component';

describe('ControlValAcessorExampleComponent', () => {
  let component: ControlValAcessorExampleComponent;
  let fixture: ComponentFixture<ControlValAcessorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlValAcessorExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlValAcessorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
