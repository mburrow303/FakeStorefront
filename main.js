const cartNavbar = document.getElementById('cart');
const electronicsNavbar = document.getElementById('electronics');
const jewelryNavbar = document.getElementById('jewelry');
const mensNavbar = document.getElementById('mens');
const womensNavbar = document.getElementById('womens');
const displayDiv = document.getElementById('display');

const apiURL = "https://fakestoreapi.com/products";

//* async function
/*
async function fakeStore(endpoint) {
 let result = await fetch(apiURL + `category/` + endpoint);
 let storeData = await result.json();
 console.log(storeData);
}
*/

//* fakeStore() async function re-written as block body arrow function
const fakeStore = async(endpoint) => {
  let result = await fetch(apiURL + endpoint);
 let storeData = await result.json();
 console.log(storeData);
 displayCards(storeData);
}

function displayCards(storeData) {
 console.log(storeData);
}

//? Was invoking function here but moved to window onload
//fakeStore("cart"); //? empty array
//fakeStore("electronics?sort=asc");
//fakeStore("jewelery?sort=asc");
//fakeStore("men's clothing?sort=asc");
//fakeStore("women's clothing?sort=asc");
//fakeStore("products?sort=asc"); 

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
  //fakeStore("/cart"); //? empty array
  fakeStore("/category/electronics?sort=asc");
  fakeStore("/category/jewelery?sort=asc");
  fakeStore("/category/men's clothing?sort=asc");
  fakeStore("/category/women's clothing?sort=asc");
  fakeStore("?sort=asc"); //? all products in an array
 }