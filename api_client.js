import { constants } from "../../constants/constant.js"; // Imports constants like API URL
import Product from "../model/model.js"; // Imports the Product class

async function doNetworkCall() {
  const response = await fetch(constants.API_URL); // Makes an HTTP request to the server
  let data = await response.json(); // Converts the response into JSON format (array of product objects)
  
  // Convert each object into a Product instance using the Product class
  data = data.map(
    (obj) =>
      new Product(obj.id, obj.title, obj.description, obj.image, obj.price)
  );
  
  return data; // Returns the array of Product objects
}
 
export default doNetworkCall; // Exports the function for use in other files
