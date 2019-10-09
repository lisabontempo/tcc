import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsPage } from './nps.page';

describe('NpsPage', () => {
  let component: NpsPage;
  let fixture: ComponentFixture<NpsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
