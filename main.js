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
 //console.log(storeData);
 displayCards(storeData);

}

function displayCards(storeData) {
 console.log(storeData);
 // Call addToCart function
 //!cardContainer.innerHTML = '';
 

 //* forEach loop - display each item on a card
  storeData.forEach(item => {

  //? STEP 1: Create the new element(s)
  let divrow = document.createElement('div');
  let divcol = document.createElement('div');
  let card = document.createElement('div');
  let cardImage = document.createElement('img');
  let cardBody = document.createElement('div'); 
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


  //? STEP 2: Editing the element's properties
  //divrow.id = "divrow";
  //divcol.id = "divcol";
  divrow.className = "row row-cols-4 row-cols-md-1 g-4";
  divcol.className = "col";
  card.id = "card";
  card.className = "card text-bg-secondary mb-3";
  card.style = "max-width: 18rem"; 
  cardImage.id = "card-img-top";
  cardImage.className = "card-img-top";
  cardImage.src = "...";
  cardImage.alt = "...image";
  //cardImage.style.textAlign = "center";
  cardBody.id = "card-body";
  cardBody.className = "card-body";
  cardTitle.id = "card-title";
  cardTitle.className = "card-title";
  cardTitle.innerText = "Card Title";
  accordionExample.id = "accordionExample";
  accordionExample.className = "accordion";
  accordionItem.id = "accordion-item";
  accordionItem.className = "accordion-item";
  accordionHeader.id = "accordion-header";
  accordionHeader.className = "accordion-header";
  accordionButton.id = "accordion-button";
  //accordionButton.type = "button";
  accordionButton.className = "accordion-button";
  accordionButton.setAttribute("data-bs-toggle",  "collapse"); //!
  accordionButton.setAttribute("data-bs-target",  "#collapseOne");
  accordionButton.setAttribute("aria-expanded",  "true");
  accordionButton.setAttribute("aria-controls",  "collapseOne");
  accordionButton.innerText = "Description";
  accordionButton.style.textAlign = "center";
  //accordionButton.dataBsToggle = "collapse";
  //accordionButton.dataBsTarget = "#collapseOne";
  //accordionButton.ariaExpanded = "true";
  //accordionButton.ariaControls = "collapseOne";
  collapseOne.id = "collapseOne";
  collapseOne.className = "accorion-collapse collapse";
  collapseOne.setAttribute("data-bs-parent", "#accorionExample");
  accordionBody.id = "accordion-body";
  accordionBody.className = "accordion-body";
  //accordionBody.innerText = "<strong>Description. This is the first item's accordion body.</strong> This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."
  accordionItem2.id = "accordion-item-2";
  accordionItem2.className = "accordion-item";
  accordionHeader2.id = "accordion-header-2";
  accordionHeader2.className = "accordion-header";
  accordionButton2.id = "accordion-button-2";
  //accordionButton2.type = "button";
  accordionButton2.className = "accordion-button";
  accordionButton2.setAttribute("data-bs-toggle",  "collapse"); //!
  accordionButton2.setAttribute("data-bs-target",  "#collapseOne");
  accordionButton2.setAttribute("aria-expanded",  "true");
  accordionButton2.setAttribute("aria-controls",  "collapseOne");
  accordionButton2.innerText = "Price";
  accordionButton2.style.textAlign = "center";
  //accordionButton2.dataBsToggle = "collapse";
  //accordionButton2.dataBsTarget = "#collapseTwo";
  //accordionButton2.ariaExpanded = "true";
  //accordionButton2.ariaControls = "collapseTwo";
  collapseTwo.id = "collapseTwo";
  collapseTwo.className = "accordion-collapse collapse";
  collapseTwo.setAttribute("data-bs-parent", "#accorionExample");
  accordionBody2.id = "accordion-body-2";
  accordionBody2.className = "accordion-body";
  //accordionBody2.innerText = "<strong>Price $X.00. This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."
  divButton.id = "div-button";
  divButton.className = "d-grid gap-2";
  addToCart.id = "addToCart";
  addToCart.className = "btn btn-dark";
  addToCart.innerText = "Add to Cart";

  //? STEP 3: Adding elements to the webpage
  display.appendChild(divrow);
  divrow.appendChild(divcol);
  divcol.appendChild(card);
  card.appendChild(cardImage);
  cardImage.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  cardTitle.appendChild(accordionExample);
  accordionExample.appendChild(accordionItem);
  accordionItem.appendChild(accordionHeader);
  accordionHeader.appendChild(accordionButton);
  accordionButton.appendChild(collapseOne);
  collapseOne.appendChild(accordionBody);
  accordionBody.appendChild(accordionItem2);
  accordionItem2.appendChild(accordionHeader2);
  accordionHeader2.appendChild(accordionButton2);
  accordionButton2.appendChild(collapseTwo); 
  collapseTwo.appendChild(accordionBody2);
  accordionBody2.appendChild(divButton);
  divButton.appendChild(addToCart);
  //addToCart.appendChild(display);

  //! append card to display div and make more than one card
  display.appendChild(cardBody); //* gets the title to show up??
 

  //* obtain data from API for each item to display
  cardImage.src = item.image;
  cardTitle.innerText = item.title;
  accordionBody.innerText = item.description;
  accordionBody2.innerText = item.price;
  //accordionButton2.innerText = item.price;
  //collapseOne.innerText = item.description;
  //collapseTwo.innerText = item.price;
 });

}

function submitToCart(item) {
//! Needs to be called inside cardDisplay

}


  //* event listeners for each global variable

//! incorporate Add to Cart functionality  
cartNavbar.addEventListener('click', e => {
  e.preventDefault();
  fakeStore(`/category/cart`);
})

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