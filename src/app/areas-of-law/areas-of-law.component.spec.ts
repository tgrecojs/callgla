/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AreasOfLawComponent } from './areas-of-law.component';

describe('AreasOfLawComponent', () => {
  let component: AreasOfLawComponent;
  let fixture: ComponentFixture<AreasOfLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreasOfLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasOfLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
