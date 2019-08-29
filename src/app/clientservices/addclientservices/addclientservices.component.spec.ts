import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclientservicesComponent } from './addclientservices.component';

describe('AddclientservicesComponent', () => {
  let component: AddclientservicesComponent;
  let fixture: ComponentFixture<AddclientservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddclientservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclientservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
