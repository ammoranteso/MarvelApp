import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperMenuComponent } from './wrapper-menu.component';

describe('WrapperMenuComponent', () => {
  let component: WrapperMenuComponent;
  let fixture: ComponentFixture<WrapperMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
