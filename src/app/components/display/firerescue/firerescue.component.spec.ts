import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirerescueComponent } from './firerescue.component';

describe('FirerescueComponent', () => {
  let component: FirerescueComponent;
  let fixture: ComponentFixture<FirerescueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirerescueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirerescueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
