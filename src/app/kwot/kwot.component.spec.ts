import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KwotComponent } from './kwot.component';

describe('KwotComponent', () => {
  let component: KwotComponent;
  let fixture: ComponentFixture<KwotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KwotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KwotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
