export const categories = [
  { id: 1, name: "Liquor", image: "c:\Users\ADMN\Pictures\images\product1.jpg" },
  { id: 2, name: "Groceries", image: "c:\Users\ADMN\Pictures\images\shopping0.jpg" },
  { id: 3, name: "Fashion", image: "c:\Users\ADMN\Pictures\images\fashion3.jpg" },
  { id: 4, name: "Transport", image: "c:\Users\ADMN\Pictures\images\rentbike.jpg" },
  { id: 5, name: "Shopping", image: "c:\Users\ADMN\Pictures\images\product2.jpg " },
];

export const shops = {
  Liquor: [
    { id: 1, name: "Bar & Beyond", image: "/images/liquor_shop1.jpg" },
    { id: 2, name: "Wine Cellar", image: "/images/liquor_shop2.jpg" },
    { id: 3, name: "Spirit Hub", image: "/images/liquor_shop3.jpg" },
  ],
  Groceries: [
    { id: 1, name: "Fresh Farm", image: "/images/grocery_shop1.jpg" },
    { id: 2, name: "Daily Greens", image: "/images/grocery_shop2.jpg" },
    { id: 3, name: "Harvest Store", image: "/images/grocery_shop3.jpg" },
  ],
  // Add more shops for other categories...
};

export const products = {
  "Bar & Beyond": [
    { id: 1, name: "Whiskey", price: 500, image: "/images/whiskey.jpg" },
    { id: 2, name: "Vodka", price: 300, image: "/images/vodka.jpg" },
    // Add more products...
  ],
  "Fresh Farm": [
    { id: 1, name: "Tomatoes", price: 50, image: "/images/tomatoes.jpg" },
    { id: 2, name: "Onions", price: 60, image: "/images/onions.jpg" },
    // Add more products...
  ],
  // Add more products for other shops...
};
