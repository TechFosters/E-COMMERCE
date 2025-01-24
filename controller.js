import doNetworkCall from "../service/api_client.js"; // Import the function to fetch data

// Runs when the page loads
window.addEventListener("load", initEvents);

let productDiv; // A variable to store the container where products will be displayed

async function initEvents() {
  productDiv = document.querySelector(".products"); // Select the container with the class "products"
  let data = await doNetworkCall(); // Fetch product data from the API
  printData(data); // Pass the data to the function that displays it
}

// Loops through the data array and calls `printCard` for each product
function printData(data) {
  data.map((product) => printCard(product));
}

// Creates an HTML card for each product and appends it to the page
function printCard(product) {
  let card = `<div class="card" style="width: 20rem; margin : 10px">
    <img src=${product.image} height="250px" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.title.substring(0, 10)}</h5>
      <p class="card-text">${product.description.substring(0, 10)}</p>
        <p class="card-text">${product.price}</p>
      <a href="#" class="btn btn-primary">Add To Cart</a>
    </div>
  </div>`;
  
  productDiv.innerHTML += card; // Adds the card to the container
}
