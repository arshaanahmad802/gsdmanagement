import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRemedyUserComponent } from './update-remedy-user.component';

describe('UpdateRemedyUserComponent', () => {
  let component: UpdateRemedyUserComponent;
  let fixture: ComponentFixture<UpdateRemedyUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRemedyUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRemedyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
