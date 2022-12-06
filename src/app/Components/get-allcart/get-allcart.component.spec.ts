import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllcartComponent } from './get-allcart.component';

describe('GetAllcartComponent', () => {
  let component: GetAllcartComponent;
  let fixture: ComponentFixture<GetAllcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllcartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
