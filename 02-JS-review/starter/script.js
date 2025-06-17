const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
const book = getBook(3);

// const title = book.title;
// const author = book.author;

const { title, author, publicationDate, genres, hasMovieAdaptation, pages } =
  book;

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// ********** rest operator **********

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre);
console.log(otherGenres);

// ********** spread operator **********

const newGenres = [...genres, "epic fantasy "];

console.log(newGenres);

// ********** object spread **********

const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19",
  pages: 1210,
};

console.log(updatedBook);

const getYear = (str) => str.split("-")[0];

const summary = `The book ${title} was written by ${author} in ${getYear(
  publicationDate
)}.`;

summary;

const pageRange = pages > 1000 ? "long book" : "short book";
pageRange;

console.log(getYear(publicationDate));

console.log(true && "Hello");
console.log(false && "Hello");
console.log(hasMovieAdaptation && "This book has a movie adaptation");

console.log(book.translations.spanish);

const spanishTranslation =
  book.translations.spanish || "No Spanish translation";

spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);

// const countWrong = book.reviews.librarything.reviewsCount || "no data";

// countWrong;

// ********** nullish coalescing operator **********

// const countRight = book.reviews.librarything.reviewsCount ?? "no data";

// countRight;

// ********** optional chaining **********

const getBookTotalReviews = (book) => {
  const goodreadsReviews = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarythingReviews = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreadsReviews + librarythingReviews;
};

console.log(getBookTotalReviews(book));
*/

/*

// ********** array methods **********

const books = getBooks();

const titles = books.map((book) => book.title);

titles;

const essentialData = books.map((book) => {
  const { title, author } = book;
  return { title, author };
});

essentialData;

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

const x = [3, 7, 1, 9, 4, 6];
const sorted = x.slice().sort((a, b) => a - b);

sorted;
x;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);

sortedByPages;
books;

const newBook = {
  id: 6,
  title: "The Hobbit",
  publicationDate: "1937-09-21",
  author: "J. R. R. Tolkien",
  genres: ["fantasy", "high-fantasy", "adventure", "fiction"],
  hasMovieAdaptation: true,
  pages: 310,
};

// Add new item: spread array and new item
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// Delete item: filter array and remove item
const booksAfterDelete = books.filter((book) => book.id !== 3);
booksAfterDelete;

// Update item: map array, spread item and update it
const booksAfterUpdate = books.map((book) =>
  book.id === 1
    ? {
        ...book,
        pages: 1210,
        moviePublicationDate: "2001-12-18",
        title: "Nord o de wing",
      }
    : book
);
booksAfterUpdate;
*/

// ********** asynchronous with promises (fetch) **********

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("dude"); //prints before the fetch

// ********** async/await **********

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}

const todos = getTodos();

console.log(todos);

console.log("dude");
