// app.js

// Load categories into navigation menu
window.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
  
    // Create buttons for each category
    categories.forEach(category => {
      const button = document.createElement("button");
      button.textContent = category.name;
      button.addEventListener("click", () => displayCategoryProducts(category));
      menu.appendChild(button);
    });
  
    // Show the first category's products by default
    displayCategoryProducts(categories[0]);
  });
  
  // Display products for a given category
  function displayCategoryProducts(category) {
    const selectedCategoryTitle = document.getElementById("selected-category");
    const productTableBody = document.getElementById("category-products");
  
    // Update category title
    selectedCategoryTitle.textContent = category.name;
  
    // Clear previous product rows
    productTableBody.innerHTML = "";
  
    // Filter and display products that match the selected category and are not discontinued
    const categoryProducts = products.filter(product => product.categories.includes(category.id) && !product.discontinued);
  
    categoryProducts.forEach(product => {
      const row = document.createElement("tr");
      
      row.addEventListener("click", () => console.log(product));
  
      // Name cell
      const nameCell = document.createElement("td");
      nameCell.textContent = product.title;
      row.appendChild(nameCell);
  
      // Description cell
      const descCell = document.createElement("td");
      descCell.textContent = product.description;
      row.appendChild(descCell);
  
      // Price cell
      const priceCell = document.createElement("td");
      priceCell.textContent = formatCurrency(product.price);
      row.appendChild(priceCell);
  //Reused
  const Reused = document.createElement("td");
      Reused.textContent = product.Condition;
      row.appendChild(Reused);
      productTableBody.appendChild(row);
    });
  }
  
  // Utility to format the price in cents to Canadian dollars
  function formatCurrency(cents) {
    return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(cents / 100);
  }
  