// Task 1: Create an array containing information about different products, including their names, prices, and descriptions.
const products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];
// Task 2: Write a function to display the product information on the webpage dynamically.
const displayProductInformation = () => {
    for (product of products) {
        for (key of Object.keys(product)) {
            const productInformation = document.createElement("p");
            productInformation.innerHTML = `${key[0].toUpperCase()}${key.slice(1)}: ${product[key]}`;
            document.getElementById("container").appendChild(productInformation);
        };
    };
};
// Task 3: Implement an event listener to trigger the display of products when the page loads.
document.addEventListener("DOMContentLoaded", () => {
    displayProductInformation();
});