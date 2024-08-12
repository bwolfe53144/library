/*Set up the library before user interaction*/
var myLibrary = [];
const bookOne = new Book("Catcher in the Rye", "J D Salinger", "277", "no");
const bookTwo = new Book("Animal Farm", "George Orwell", "122", "yes");
const bookThree = new Book("The Outsiders", "S. E. Hinton", "208", "no");
const bookFour = new Book("The Grapes of Wrath", "John Steinbeck", "464", "yes");
myLibrary.push(bookOne, bookTwo, bookThree, bookFour);
displayBooks(myLibrary);

/*Add the form*/
const form = document.getElementById('myForm');                    
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Access and log the values
    const title = form.elements.title.value;
    const author = form.elements.author.value;
    const pages = form.elements.pages.value;
    const status = form.elements.status.value;
    const book = new Book(title,author,pages,status);
    myLibrary.push(book);
    closeForm();
    displayBooks(myLibrary);
});

/*Function to open and close the form, and setting default to close*/
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    form.elements.title.value = "";
    form.elements.author.value = "";
    form.elements.pages.value = "";
    form.elements.status.value = "no";
}

closeForm();

/*Function to create a book*/
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}
/*Function to display books in the array to the page*/
function displayBooks(r) {
    document.querySelectorAll('newBook').forEach(e => e.remove());
    document.querySelectorAll('btn').forEach(e => e.remove());
    document.querySelectorAll('readbtn').forEach(e => e.remove());
    document.querySelectorAll('unreadbtn').forEach(e => e.remove());
    for (i=0; i < r.length; i++) {
        placeHolder = document.querySelector(".placeHolder");
        const newBook = document.createElement("newBook");
        newBook.innerText = `
        Title: ${r[i].title}
        Author: ${r[i].author} 
        Pages: ${r[i].pages} 
        Read: ${r[i].status}`;
        newBook.style.cssText = "background-color: blue; margin-top:50px; line-height:40px; width:350px; height:400px; font-size: 30px; text-align:center; box-shadow: 10px 10px 5px 5px black;";
        /*make button to remove books*/ 
        let btn = document.createElement("btn");
        btn.dataset.id = i;
        btn.innerHTML = "Remove";
        btn.style.cssText = "background-color: red; color:white; padding:10px; width:60px; height:20px; border-radius: 15px; position:relative; right:210px; top:170px";
        btn.addEventListener("click", function () {
            removeBook(btn.dataset.id)
        });
        /*make button to read books*/ 
        let readbtn = document.createElement("readbtn");
        readbtn.dataset.id = i;
        readbtn.innerHTML = "Read";
        readbtn.style.cssText = "background-color: rgba(196, 192, 192, 0.719); color:white; text-align:center; padding:13px 15px 12px 15px; width:60px; height:20px; border-radius: 15px; position:relative; right:380px; top:90px";
        readbtn.addEventListener("click", function () {
            readBook(readbtn.dataset.id);
        });
        /*make button to unread books*/ 
        let unreadbtn = document.createElement("unreadbtn");
        unreadbtn.dataset.id = i;
        unreadbtn.innerHTML = "Not Read";
        unreadbtn.style.cssText = "background-color: rgba(196, 192, 192, 0.719); color:white; text-align:center; padding:5px 15px 20px 15px; width:60px; height:20px; border-radius: 15px; position:relative; right:300px; top:90px";
        unreadbtn.addEventListener("click", function () {
            unreadBook(unreadbtn.dataset.id);
        });
        placeHolder.appendChild(newBook);
        placeHolder.appendChild(btn);
        placeHolder.appendChild(readbtn);
        placeHolder.appendChild(unreadbtn);
    }
}

/*Functions for the buttons to remove the book or mark as read or unread*/
function removeBook(a) {
    notLibrary = myLibrary.splice(a,1);
    displayBooks(myLibrary);
}

function readBook(a) {
    if (myLibrary[a].status == "no") {
        myLibrary[a].status = "yes";
        displayBooks(myLibrary);
    }
}

function unreadBook(a) {
    if (myLibrary[a].status == "yes") {
        myLibrary[a].status = "no";
        displayBooks(myLibrary);
    }
}
