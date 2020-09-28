import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonAttachComponent } from './attach.component';

describe('AttachComponent', () => {
  let component: PersonAttachComponent;
  let fixture: ComponentFixture<PersonAttachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonAttachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonAttachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
