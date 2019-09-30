import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoriasPage } from './tutorias.page';

describe('TutoriasPage', () => {
  let component: TutoriasPage;
  let fixture: ComponentFixture<TutoriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutoriasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
