import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleUpdateComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: PeopleUpdateComponent;
  let fixture: ComponentFixture<PeopleUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
