import { TestBed, inject } from '@angular/core/testing';

import { BookshttpService } from './bookshttp.service';

describe('BookshttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookshttpService]
    });
  });

  it('should be created', inject([BookshttpService], (service: BookshttpService) => {
    expect(service).toBeTruthy();
  }));
});
