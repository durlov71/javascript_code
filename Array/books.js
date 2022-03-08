// problem: books
// (1) Take all the books with price less than 500 and rating greater than 4
// (2) sort them by their rating in Descending Order
// (3)pick their name
const books = [
    { name: 'book1', price: 450, rating: 5.1 },
    { name: 'book2', price: 470, rating: 5.6 },
    { name: 'book3', price: 350, rating: 3.2 },
    { name: 'book4', price: 600, rating: 4.5 },
    { name: 'book5', price: 555, rating: 5.5 },
    { name: 'book6', price: 452, rating: 4.5 },
    { name: 'book7', price: 456, rating: 4.8 },
]

const filteredBook = books.filter(function(book) {
    return book.price < 500 && book.rating > 4
})
console.log(filteredBook);


const sortedBook = filteredBook.sort(function(d1, d2) {
    if (d1.rating < d2.rating) return +1
    return -1

});
console.log(sortedBook);