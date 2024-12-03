import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BookListComponent } from "./book-list.component";
import { BookService } from "../../services/book.service";

fdescribe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let mockBookService: jasmine.SpyObj<BookService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('BookService', ['getBooks']);
    TestBed.configureTestingModule({
      declarations: [BookListComponent],
      providers: [{ provide: BookService, useValue: spy }],
    });

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    mockBookService = TestBed.inject(BookService) as jasmine.SpyObj<BookService>;

    mockBookService.getBooks.and.returnValue([
      { id: 1, titre: 'Angular Mastery', auteur: 'John Doe', prix: 30, dateParution: new Date('2023-01-01') },
    ]);
  });

  it('devrait crÃ©er le composant', () => {
    expect(component).toBeTruthy();
  });

  it('devrait afficher les livres', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('li')?.textContent).toContain('Angular Mastery');
  });
});
