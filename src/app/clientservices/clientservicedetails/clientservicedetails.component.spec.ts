import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientservicedetailsComponent } from './clientservicedetails.component';

describe('ClientservicedetailsComponentt', () => {
  let component: ClientservicedetailsComponent;
  let fixture: ComponentFixture<ClientservicedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientservicedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientservicedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
