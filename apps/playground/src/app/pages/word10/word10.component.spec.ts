import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Word10Component } from './word10.component';

describe('Word10Component', () => {
  let component: Word10Component;
  let fixture: ComponentFixture<Word10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Word10Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Word10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
