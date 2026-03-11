function searchBooks() {
    const books = [
        "Twilight",
        "The Hunger Games",
        "Harry Potter"
        "The Wizard of Oz",
        "The Notebook",
        "The Great Gatsby" 
    ];


const input = document.getElementById("searchInput").value.toLowerCase();
const resultsDiv = document.getElementById("results");

const filterBooks = books.filter(book =>
    book.toLowerCase().includes(input)
);

if (filteredBooks.length > 0 && input !=="") {
    resultsDiv.innerHTML = "Results found: " + filteredBooks.join(", ");
} else {
    resultsDiv.innerHTML = "No results found. ";
}

}