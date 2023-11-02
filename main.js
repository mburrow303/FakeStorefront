const cartNavbar = document.getElementById("cart");
const electronicsNavbar = document.getElementById("electronics");
const jewelryNavbar = document.getElementById("jewelry");
const mensNavbar = document.getElementById("mens");
const womensNavbar = document.getElementById("womens");
const display = document.getElementById("display");
let cart = [];

const apiURL = "https://fakestoreapi.com/products";

//* fakeStore() async function written as block body arrow function
const fakeStore = async (endpoint) => {
  let result = await fetch(apiURL + endpoint);
  let storeData = await result.json();
  displayCards(storeData);
};

function displayCards(storeData) {
  console.log(storeData);

  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }

  let itemId = 0;
  const parentId = (id) => `accordionExample-${id}`;

  //* forEach loop - display each item on a card
  storeData.forEach((item) => {
    //* STEP 1: Create the new element(s)
    let divcol = document.createElement("div");
    let card = document.createElement("div");
    let cardBody = document.createElement("div");
    let cardImage = document.createElement("img");
    let cardTitle = document.createElement("h5");
    let accordionExample = document.createElement("div");
    let accordionItem = document.createElement("div");
    let accordionHeader = document.createElement("h2");
    let accordionButton = document.createElement("button");
    let collapseOne = document.createElement("div");
    let accordionBody = document.createElement("div");
    let accordionItem2 = document.createElement("div");
    let accordionHeader2 = document.createElement("h2");
    let accordionButton2 = document.createElement("button");
    let collapseTwo = document.createElement("div");
    let accordionBody2 = document.createElement("div");
    let divButton = document.createElement("div");
    let addToCart = document.createElement("button");

    //* STEP 2: Editing the element's properties
    divcol.className = "col";
    card.id = "card";
    card.className = "card text-bg-secondary mb-3";
    card.style = "max-width: 20rem";
    cardImage.className = "card-img-top";
    cardImage.alt = "...image";
    cardBody.className = "card-body";
    cardTitle.className = "card-title";
    accordionExample.id = "accordionExample";
    accordionExample.className = "accordion";
    accordionItem.className = "accordion-item";
    accordionHeader.className = "accordion-header";
    accordionButton.type = "button";
    accordionButton.className = "accordion-button";
    accordionButton.setAttribute("data-bs-toggle", "collapse");
    accordionButton.setAttribute("data-bs-target", `#collapseOne-${itemId}`);
    accordionButton.setAttribute("aria-expanded", "true");
    accordionButton.setAttribute("aria-controls", "collapseOne");
    accordionButton.innerText = "Description";
    accordionButton.style.textAlign = "center";
    collapseOne.id = `collapseOne-${itemId}`;
    collapseOne.className = "accordion-collapse collapse";
    collapseOne.setAttribute("data-bs-parent", `#${parentId(itemId)}`);
    accordionBody.className = "accordion-body";
    accordionItem2.className = "accordion-item";
    accordionHeader2.className = "accordion-header";
    accordionButton2.type = "button";
    accordionButton2.className = "accordion-button collapsed";
    accordionButton2.setAttribute("data-bs-toggle", "collapse");
    accordionButton2.setAttribute("data-bs-target", `#collapseTwo-${itemId}`);
    accordionButton2.setAttribute("aria-expanded", "false");
    accordionButton2.setAttribute("aria-controls", "collapseTwo");
    accordionButton2.innerText = "Price";
    accordionButton2.style.textAlign = "center";
    collapseTwo.id = `collapseTwo-${itemId}`;
    collapseTwo.className = "accordion-collapse collapse";
    collapseTwo.setAttribute("data-bs-parent", `#${parentId(itemId)}`);
    accordionBody2.className = "accordion-body";
    divButton.className = "d-grid gap-2";
    addToCart.id = "addToCart";
    addToCart.className = "btn btn-dark";
    addToCart.innerText = "Add to Cart";

    itemId++;

    //* STEP 3: Adding elements to the webpage
    display.appendChild(card);
    card.appendChild(cardImage);
    card.appendChild(cardBody);
    card.appendChild(cardTitle);
    card.appendChild(accordionExample);
    accordionExample.appendChild(accordionItem);
    accordionExample.appendChild(accordionItem2);
    accordionItem.appendChild(accordionHeader);
    accordionHeader.appendChild(accordionButton);
    accordionItem.appendChild(collapseOne);
    collapseOne.appendChild(accordionBody);
    accordionItem2.appendChild(accordionHeader2);
    accordionHeader2.appendChild(accordionButton2);
    accordionItem2.appendChild(collapseTwo);
    collapseTwo.appendChild(accordionBody2);
    card.appendChild(addToCart);

    let price = item.price;
    const formattedPrice = "$" + price.toFixed(2);

    //* obtain data from API for each item to display
    cardImage.src = item.image;
    cardTitle.innerText = item.title;
    accordionBody.innerText = item.description;
    accordionBody2.innerText = formattedPrice;

    addToCart.onclick = function () {
      submitToCart(item);
    };
  });
}

function submitToCart(item) {
  let price = item.price;
  const formattedPrice = price.toFixed(2);
  const index = cart.findIndex((cartItem) => cartItem.id === item.id);
  if (index !== -1) {
    cart[index].quantity++;
    console.log("Item Quantity Updated!:", cart);
  } else {
    cart.push({
      id: item.id,
      title: item.title,
      cost: formattedPrice,
      quantity: 1,
    });
    console.log("Cart Updated!:", cart);
  }
}

function displayCart() {
  var cartTableBody = document.querySelector("#cartModal .modal-body tbody");

  cartTableBody.innerHTML = "";

  var subtotal = 0;
  var taxRate = 0.07;
  var shippingRate = 0.1;

  cart.forEach(function (item) {
    var itemTotal = item.quantity * item.cost;
    var row = cartTableBody.insertRow();
    var quantityCell = row.insertCell(0);
    var itemCell = row.insertCell(1);
    var priceCell = row.insertCell(2);

    quantityCell.textContent = item.quantity;
    itemCell.textContent = item.title;
    priceCell.textContent = "$" + itemTotal.toFixed(2);

    subtotal += itemTotal;
  });

  var tax = subtotal * taxRate;
  var shipping = subtotal * shippingRate;
  var total = subtotal + tax + shipping;

  document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
  document.getElementById("tax").textContent = "$" + tax.toFixed(2);
  document.getElementById("shipping").textContent = "$" + shipping.toFixed(2);
  document.getElementById("total").textContent = "$" + total.toFixed(2);

  var orderTotalButton = document.getElementById("orderTotal");
  orderTotalButton.textContent = "$" + total.toFixed(2);
}

document.getElementById("purchase").addEventListener("click", function () {
  alert("Thank you for your Purchase!");
  cart = [];
  var cartTableBody = document.querySelector("#cartModal .modal-body tbody");
  cartTableBody.innerHTML = "";
  displayCart();
});

document.getElementById("clearCart").addEventListener("click", function () {
  cart = [];
  var cartTableBody = document.querySelector("#cartModal .modal-body tbody");
  cartTableBody.innerHTML = "";
  displayCart();
});

//* event listeners for each global variable
cartNavbar.addEventListener("click", (e) => {
  e.preventDefault();
  displayCart();
});

electronicsNavbar.addEventListener("click", (e) => {
  e.preventDefault();
  fakeStore(`/category/electronics?sort=asc`);
});

jewelryNavbar.addEventListener("click", (e) => {
  e.preventDefault();
  fakeStore(`/category/jewelery?sort=asc`);
});

mensNavbar.addEventListener("click", (e) => {
  e.preventDefault();
  fakeStore(`/category/men's clothing?sort=asc`);
});

womensNavbar.addEventListener("click", (e) => {
  e.preventDefault();
  fakeStore(`/category/women's clothing?sort=asc`);
});

//* onload method
window.onload = (event) => {
  fakeStore("?sort=asc"); //* all products in an array
};