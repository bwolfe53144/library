var myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

const form = document.getElementById('myForm');                    

// Add a form submit event listener
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Access and log the values
    const title = form.elements.title.value;
    var author = form.elements.author.value;
    var pages = form.elements.pages.value;
    var status = form.elements.status.value;
    const book = new Book(title,author,pages,status);
    myLibrary.push(book);
    closeForm();
    displayBooks(myLibrary);

});

function openForm() {
    document.getElementById("myForm").style.display = "block";
    
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    form.elements.title.value = "";
    form.elements.author.value = "";
    form.elements.pages.value = "";
    form.elements.status.value = "";
}

closeForm();

function displayBooks(r) {
    document.querySelectorAll('newBook').forEach(e => e.remove());
    document.querySelectorAll('btn').forEach(e => e.remove());
    for (i=0; i < r.length; i++) {
        placeHolder = document.querySelector(".placeHolder");
        const newBook = document.createElement("newBook");
        newBook.innerText = `
        Title: ${r[i].title}
        Author: ${r[i].author} 
        Pages: ${r[i].pages} 
        ${r[i].status}`;
        newBook.style.cssText = "background-color: blue; margin-top:50px; width:350px; height:400px; font-size: 30px; text-align:center; box-shadow: 10px 10px 5px 5px black;";
        /*make button to remove books*/ 
        let btn = document.createElement("btn");
        btn.dataset.id = i;
        btn.innerHTML = "Remove";
        btn.style.cssText = "background-color: red; color:white; padding:10px; width:60px; height:20px; border-radius: 15px; position:relative; right:210px; top:130px";
        btn.addEventListener("click", function () {
            removeBook(btn.dataset.id)
        });
        placeHolder.appendChild(newBook);
        placeHolder.appendChild(btn);

    }
}

function removeBook(a) {
    notLibrary = myLibrary.splice(a,1);
    displayBooks(myLibrary);
}

const bookOne = new Book("Catcher in the Rye", "J D Salinger", "277", "no");
const bookTwo = new Book("Animal Farm", "George Orwell", "122", "yes");
const bookThree = new Book("The Outsiders", "S. E. Hinton", "208", "no");
const bookFour = new Book("The Grapes of Wrath", "John Steinbeck", "464", "yes");
myLibrary.push(bookOne, bookTwo, bookThree, bookFour);
displayBooks(myLibrary);




