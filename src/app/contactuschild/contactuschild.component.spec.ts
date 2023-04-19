import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactuschildComponent } from './contactuschild.component';

describe('ContactuschildComponent', () => {
  let component: ContactuschildComponent;
  let fixture: ComponentFixture<ContactuschildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactuschildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactuschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
