const cartNavbar = document.getElementById('cart');
const electronicsNavbar = document.getElementById('electronics');
const jewelryNavbar = document.getElementById('jewelry');
const mensNavbar = document.getElementById('mens');
const womensNavbar = document.getElementById('womens');
const display = document.getElementById('display');
const cart = [];

const apiURL = "https://fakestoreapi.com/products";

//* fakeStore() async function written as block body arrow function
const fakeStore = async(endpoint) => {
  let result = await fetch(apiURL + endpoint);
 let storeData = await result.json();
 displayCards(storeData);
}

//! Currently displaying Cards correctly as 4 cards wide in each row *when* browser is a full screen. When I use the inspect feature on the browser then the cards only show 2 or 3 cards wide as the display is only on part of the screen. 
function displayCards(storeData) {
 console.log(storeData);

 // TODO Call submitToCart function
 //? submitToCart();

 //* forEach loop - display each item on a card
  storeData.forEach(item => {

  //* STEP 1: Create the new element(s)
  let divcol = document.createElement('div');
  let card = document.createElement('div');
  let cardBody = document.createElement('div'); 
  let cardImage = document.createElement('img');
  let cardTitle = document.createElement('h5');
  let accordionExample = document.createElement('div');
  let accordionItem = document.createElement('div');
  let accordionHeader = document.createElement('h2');
  let accordionButton = document.createElement('button');
  let collapseOne = document.createElement('div');
  let accordionBody = document.createElement('div');
  let accordionItem2 = document.createElement('div');
  let accordionHeader2 = document.createElement('h2');
  let accordionButton2 = document.createElement('button');
  let collapseTwo = document.createElement('div');
  let accordionBody2 = document.createElement('div');
  let divButton = document.createElement('div');
  let addToCart = document.createElement('button');  

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
  //accordionItem.id = "accordion-item";
  accordionItem.className = "accordion-item";
  //accordionHeader.id = "accordion-header";
  accordionHeader.className = "accordion-header";
  //accordionButton.id = "accordion-button";
  accordionButton.type = "button";
  accordionButton.className = "accordion-button";
  accordionButton.setAttribute("data-bs-toggle",  "collapse"); 
  accordionButton.setAttribute("data-bs-target",  "#collapseOne");
  accordionButton.setAttribute("aria-expanded",  "true");
  accordionButton.setAttribute("aria-controls",  "collapseOne");
  accordionButton.innerText = "Description";
  accordionButton.style.textAlign = "center";
  //collapseOne.id = "collapseOne";
  collapseOne.className = "accordion-collapse collapse";
  collapseOne.setAttribute("data-bs-parent", "#accordionExample");
  //accordionBody.id = "accordion-body";
  accordionBody.className = "accordion-body";
  //accordionItem2.id = "accordion-item-2";
  accordionItem2.className = "accordion-item";
  //accordionHeader2.id = "accordion-header-2";
  accordionHeader2.className = "accordion-header";
  //accordionButton2.id = "accordion-button-2";
  accordionButton2.type = "button";
  accordionButton2.className = "accordion-button";
  accordionButton2.setAttribute("data-bs-toggle",  "collapse"); 
  accordionButton2.setAttribute("data-bs-target",  "#collapseOne");
  accordionButton2.setAttribute("aria-expanded",  "true");
  accordionButton2.setAttribute("aria-controls",  "collapseOne");
  accordionButton2.innerText = "Price";
  accordionButton2.style.textAlign = "center";
  //collapseTwo.id = "collapseTwo";
  collapseTwo.className = "accordion-collapse collapse";
  collapseTwo.setAttribute("data-bs-parent", "#accordionExample");
  //accordionBody2.id = "accordion-body-2";
  accordionBody2.className = "accordion-body";
  divButton.className = "d-grid gap-2";
  addToCart.id = "addToCart";
  addToCart.className = "btn btn-dark";
  addToCart.innerText = "Add to Cart";
  //? I have kept some editing commented out in case I need an ID to target when getting the accordion to function correctly

  //* STEP 3: Adding elements to the webpage
  display.appendChild(card);
  card.appendChild(cardImage)
  card.appendChild(cardBody)
  card.appendChild(cardTitle)
  card.appendChild(accordionExample)
  accordionExample.appendChild(accordionItem)
  accordionExample.appendChild(accordionItem2)
  accordionItem.appendChild(accordionHeader)
  accordionHeader.appendChild(accordionButton)
  accordionItem.appendChild(collapseOne)
  collapseOne.appendChild(accordionBody)
  accordionItem2.appendChild(accordionHeader2)
  accordionHeader2.appendChild(accordionButton2)
  accordionItem2.appendChild(collapseTwo)
  collapseTwo.appendChild(accordionBody2)
  card.appendChild(addToCart)


  // TODO = Write some logic to deal with accordion button 1 & 2 opening and closing (collapsing)
   //? Just want one card description to open when we click not all card descriptions

   //? Need accordionBody2 working correctly and showing the price when opened and only working on one card at a time 


  //* obtain data from API for each item to display
  cardImage.src = item.image;
  cardTitle.innerText = item.title;
  accordionBody.innerText = item.description;
  accordionBody2.innerText = item.price;
  accordionButton2.innerText = item.price; //! Dont need this but with accordion button2 currently not showing its accordion body for some reason this shows the item price for now
 });
}


// TODO complete function
//? Needs to be called inside cardDisplay
function submitToCart(item) {

}


//* event listeners for each global variable
  
// TODO incorporate view of Cart functionality  
cartNavbar.addEventListener('click', e => {
  e.preventDefault();
  fakeStore(`/category/cart`);
})

// TODO incorporate displaying only the specific category when clicked on navbar

electronicsNavbar.addEventListener('click', e => {
  e.preventDefault();
  fakeStore(`/category/electronics?sort=asc`);
})

jewelryNavbar.addEventListener('click', e => {
  e.preventDefault();
  fakeStore(`/category/jewelery?sort=asc`);
})

mensNavbar.addEventListener('click', e => {
  e.preventDefault();
  fakeStore(`/category/men's clothing?sort=asc`);
})

womensNavbar.addEventListener('click', e => {
  e.preventDefault();
  fakeStore(`/category/women's clothing?sort=asc`);
})

//* onload method
window.onload = (event) => {
  //fakeStore("/category/cart?sort=asc"); //? an empty array
  //fakeStore("/category/electronics?sort=asc");
  //fakeStore("/category/jewelery?sort=asc");
  //fakeStore("/category/men's clothing?sort=asc");
  //fakeStore("/category/women's clothing?sort=asc");
  fakeStore("?sort=asc"); //? all products in an array
 }