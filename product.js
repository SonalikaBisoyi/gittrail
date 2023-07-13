
let books = {
    data: [
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Double black Bed",
        category: "Romance",
        price: "49",
        image: "./img/bed.jpeg",
        details: "This is the Double black Bed.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
    ],
  };
function createBookCard(book) {
    let card = document.createElement("div");
    card.classList.add("card", book.category.toLowerCase(), "hide");
  
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
  
    let image = document.createElement("img");
    image.setAttribute("src", book.image);
    image.setAttribute("alt", book.title);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
  
    let container = document.createElement("div");
    container.classList.add("container");
  
    let title = document.createElement("h5");
    title.classList.add("product-name");
    title.innerText = book.title.toUpperCase();
    container.appendChild(title);
  
    let price = document.createElement("h6");
    price.innerText = "$" + book.price;
    container.appendChild(price);
  
    card.appendChild(container);
  
    return card;
  }
  
  function renderBooks() {
    const booksContainer = document.getElementById("books");
    booksContainer.innerHTML = "";
  
    for (let book of books.data) {
      let card = createBookCard(book);
      booksContainer.appendChild(card);
    }
  }
  
  function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() === button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
      if (value === "all") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value.toLowerCase())) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  }
  document.addEventListener("click", function (event) {
    const clickedElement = event.target;
    if (clickedElement.tagName === "IMG") {
      const card = clickedElement.closest(".card");
      const bookIndex = Array.from(card.parentNode.children).indexOf(card);
      const book = books.data[bookIndex];
      displayBookDetails(book);
    }
  });
  
  function displayBookDetails(book) {
    let detailsDiv = document.getElementById("bookDetails");
    detailsDiv.innerHTML = "";
  
    let title = document.createElement("h3");
    title.textContent = book.title;
    detailsDiv.appendChild(title);
  
    let category = document.createElement("p");
    category.textContent = "Category: " + book.category;
    detailsDiv.appendChild(category);
  
    let price = document.createElement("p");
    price.textContent = "Price: $" + book.price;
    detailsDiv.appendChild(price);
  
    let details = document.createElement("p");
    details.textContent = book.details;
    detailsDiv.appendChild(details);
  
    let popup = document.getElementById("bookDetailsPopup");
    popup.style.display = "flex";
  }
  // Add event listener to close the popup
document.getElementById("closePopup").addEventListener("click", function () {
    closeBookDetails();
  });
  
  function closeBookDetails() {
    let popup = document.getElementById("bookDetailsPopup");
    popup.style.display = "none";
  }
  
  
  
  window.addEventListener("DOMContentLoaded", () => {
     renderBooks();
    filterProduct("all");
  });
  