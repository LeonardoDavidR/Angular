import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksformComponent } from './booksform.component';

describe('BooksformComponent', () => {
  let component: BooksformComponent;
  let fixture: ComponentFixture<BooksformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksformComponent]
    });
    fixture = TestBed.createComponent(BooksformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
