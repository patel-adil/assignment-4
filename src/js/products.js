/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

const products = [
  { id: "p1", 
    title: "Smartphone", 
    description: "Latest 5G-enabled smartphone with high-res camera.", 
    price: 99900, 
    Condition:"Brand New",
    discontinued: false, 
    categories: ["c1"] },
  { id: "p2",
     title: "Laptop", 
     description: "High-performance laptop for gaming and productivity.", 
     price: 150000, 
     Condition:"Brand New", discontinued: false, 
     categories: ["c1"] 
    },
  { id: "p3", 
    title: "Smart TV",
     description: "4K Ultra HD Smart TV with streaming support.",
      price: 120000,  
      Condition:"Old",
      discontinued: false,
       categories: ["c1", "c2"] },
  { id: "p4", title: "Microwave", description: "Compact microwave with pre-programmed settings.", price: 8500, Condition:"Old But look new",discontinued: false, categories: ["c2"] },
  { id: "p5", title: "Blender", description: "Powerful blender for smoothies and more.", price: 4500, Condition:"Brand New",discontinued: true, categories: ["c2"] },
  { id: "p6", title: "Wireless Earbuds", description: "Noise-canceling wireless earbuds with long battery life.", price: 20000, Condition:"Brand New",discontinued: false, categories: ["c1", "c3"] },
  { id: "p7", title: "Smartwatch", description: "Feature-packed smartwatch with health monitoring.", price: 30000,Condition:"OLD", discontinued: false, categories: ["c1"] },
  { id: "p8", title: "Portable Charger", description: "High-capacity portable charger for on-the-go power.", price: 2500,Condition:"New", discontinued: true, categories: ["c3"] }
];
