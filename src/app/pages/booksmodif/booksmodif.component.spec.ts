import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksmodifComponent } from './booksmodif.component';

describe('BooksmodifComponent', () => {
  let component: BooksmodifComponent;
  let fixture: ComponentFixture<BooksmodifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksmodifComponent]
    });
    fixture = TestBed.createComponent(BooksmodifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
