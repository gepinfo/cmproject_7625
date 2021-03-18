import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateplansComponent } from './createplans.component';

describe('CreateplansComponent', () => {
  let component: CreateplansComponent;
  let fixture: ComponentFixture<CreateplansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateplansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});