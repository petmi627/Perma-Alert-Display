import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocriseComponent } from './infocrise.component';

describe('InfocriseComponent', () => {
  let component: InfocriseComponent;
  let fixture: ComponentFixture<InfocriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfocriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
