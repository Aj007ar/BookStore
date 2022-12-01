import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplayBooksComponent } from './diplay-books.component';

describe('DiplayBooksComponent', () => {
  let component: DiplayBooksComponent;
  let fixture: ComponentFixture<DiplayBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplayBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiplayBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
