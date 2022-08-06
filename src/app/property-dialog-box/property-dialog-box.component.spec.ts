import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDialogBoxComponent } from './property-dialog-box.component';

describe('PropertyDialogBoxComponent', () => {
  let component: PropertyDialogBoxComponent;
  let fixture: ComponentFixture<PropertyDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
