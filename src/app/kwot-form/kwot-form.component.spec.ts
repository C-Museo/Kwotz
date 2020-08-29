import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KwotFormComponent } from './kwot-form.component';

describe('KwotFormComponent', () => {
  let component: KwotFormComponent;
  let fixture: ComponentFixture<KwotFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KwotFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KwotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
