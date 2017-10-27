import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindLocalComponent } from './bind-local.component';

describe('BindLocalComponent', () => {
  let component: BindLocalComponent;
  let fixture: ComponentFixture<BindLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
