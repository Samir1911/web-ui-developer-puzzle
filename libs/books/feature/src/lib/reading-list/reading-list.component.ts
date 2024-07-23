import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToReadingList, getAllBooks, getReadingList, ReadingListBook, removeFromReadingList } from '@tmo/books/data-access';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Book, ReadingListItem } from '@tmo/shared/models';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store, private snackbar: MatSnackBar) {}

  removeFromReadingList(item) {
    let snackbarRef = this.snackbar.open("Book removed from the reading list.", "Undo", {duration:3000});
    let books: ReadingListBook[];
    this.store.select(getAllBooks).subscribe(items=>{
      books = items;
    });

    this.store.dispatch(removeFromReadingList({ item }));

    snackbarRef.onAction().subscribe(()=>{
      let book : Book ={
        authors: item.authors,
        id: item.bookId,
        coverUrl: item.coverUrl,
        description: item.description,
        publishedDate:item.publishedDate,
        publisher: item.publisher,
        title: item.title
      }
      this.store.dispatch(addToReadingList({book}))
    });
  }
}
