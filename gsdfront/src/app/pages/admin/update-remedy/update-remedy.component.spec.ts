import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRemedyComponent } from './update-remedy.component';

describe('UpdateRemedyComponent', () => {
  let component: UpdateRemedyComponent;
  let fixture: ComponentFixture<UpdateRemedyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRemedyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRemedyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
