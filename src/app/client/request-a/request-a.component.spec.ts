import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAComponent } from './request-a.component';

describe('RequestAComponent', () => {
  let component: RequestAComponent;
  let fixture: ComponentFixture<RequestAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
