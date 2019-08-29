import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientservicesComponent } from './clientservices.component';

describe('HospitaldoctorsComponent', () => {
  let component: ClientservicesComponent;
  let fixture: ComponentFixture<ClientservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
