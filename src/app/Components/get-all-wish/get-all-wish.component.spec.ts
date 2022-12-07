import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllWishComponent } from './get-all-wish.component';

describe('GetAllWishComponent', () => {
  let component: GetAllWishComponent;
  let fixture: ComponentFixture<GetAllWishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllWishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
