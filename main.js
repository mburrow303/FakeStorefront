const cartNavbar = document.getElementById('cart');
const electronicsNavbar = document.getElementById('electronics');
const jewelryNavbar = document.getElementById('jewelry');
const mensNavbar = document.getElementById('mens');
const womensNavbar = document.getElementById('womens');
const displayDiv = document.getElementById('display');

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
 
 //cardContainer.innerHTML = '';

 //cardImage.src = `${product.image}`;
 //cardTitle.innerText = `${product.title}`;
 //cardDescription.innerText = `${product.description}`;
 //cardPrice.innerText = `${product.price}`;

}

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
  let descriptionBody = document.createElement('div');
  let accordionItem2 = document.createElement('div');
  let accordionHeader2 = document.createElement('h2');
  let accordionButton2 = document.createElement('button');
  let collapseTwo = document.createElement('div');
  let priceBody = document.createElement('div');
  let addToCart = document.createElement('button');

  let cards = [];
  let cardContainer = document.createElement('div');

  //? STEP 2: Editing the element's properties
  divrow.id = "divrow";
  divrow.className = "row row-cols-1 row-cols-md-1 g-4";
  divcol.id = "divcol";
  divcol.className = "col";
  card.id = "card";
  card.className = "card text-bg-secondary mb-3";
  card.style = "max-width: 18rem;"; 
  cardImage.id = "cardImage";
  cardImage.src = "...";
  cardImage.className = "card-img-top";
  cardImage.alt = "...image";
  cardImage.style.textAlign = "center";
  cardBody.id = "cardBody";
  cardBody.className = "card-body";
  cardTitle.id = "cardTitle";
  cardTitle.className = "card-title";
  cardTitle.innerText = "Card Title";
  accordionExample.id = "accordionExample";
  accordionExample.className = "accordion";
  accordionItem.id = "accordionItem";
  accordionItem.className = "accordion-item";
  accordionHeader.id = "accordionHeader";
  accordionHeader.className = "accordion-header";
  accordionButton.id = "accordionButton";
  accordionButton.type = "button";
  //accordionButton.className = "accordion-button";
  accordionButton.style.dataBsToggle = "collapse";
  accordionButton.style.dataBsTarget = "#collapseOne";
  accordionButton.style.ariaExpanded = "true";
  accordionButton.style.ariaControls = "collapseOne"
  accordionButton.innerText = "Item Description";
  accordionButton.style.textAlign = "center";
  collapseOne.id = "collapseOne";
  descriptionBody.id = "descriptionBody";
  descriptionBody.innerText = "<strong>Description. This is the first item's accordion body.</strong> This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."
  accordionItem2.id = "accordionItem2";
  accordionHeader2.id = "accordionHeader2";
  accordionButton2.id = "accordionButton2";
  accordionButton2.type = "button";
  //accordionButton2.className = "accordion-button";
  accordionButton2.style.dataBsToggle = "collapse";
  accordionButton2.style.dataBsTarget = "#collapseTwo";
  accordionButton2.style.ariaExpanded = "true";
  accordionButton2.style.ariaControls = "collapseTwo";
  accordionButton2.innerText = "Item Price $";
  priceBody.id = "priceBody";
  priceBody.innerText = "<strong>Price $X.00. This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."
  collapseTwo.id = "collapseTwo";
  addToCart.id = "addToCart"
  addToCart.innerText = "Add to Cart";

  
  //? STEP 3: Adding elements to the webpage
  document.body.appendChild(divrow);
  document.body.appendChild(divcol);
  document.body.appendChild(card);
  document.body.appendChild(cardImage);
  document.body.appendChild(cardBody);
  document.body.appendChild(cardTitle);
  document.body.appendChild(accordionExample);
  document.body.appendChild(accordionItem);
  document.body.appendChild(accordionHeader);
  document.body.appendChild(accordionButton);
  document.body.appendChild(collapseOne);
  document.body.appendChild(descriptionBody);
  document.body.appendChild(accordionItem2);
  document.body.appendChild(accordionHeader2);
  document.body.appendChild(accordionButton2);
  document.body.appendChild(collapseTwo); 
  document.body.appendChild(priceBody);
  document.body.appendChild(addToCart);


 //* forEach loop - display each item on a card
 /*
 forEach(item) = {

 }
 */ 

//* event listeners for each global variable
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