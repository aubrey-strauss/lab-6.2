
// Use fetchProductCatalog() to fetch product details and display them.
// For each product, fetch the reviews using fetchProductReviews(productId).
// After fetching products and reviews, retrieve the sales report using fetchSalesReport().
// Implement Error Handling Using Promises:
// Use .catch() to handle any errors from fetchProductCatalog(), fetchProductReviews(), and fetchSalesReport().
// Display error messages to the console if any of the calls fail.
// Use .finally() to log a message indicating that all API calls have been attempted.

// Part 3: Build the Main Application Logic
// Create an index.ts file to contain the main logic of your application.
// Write a Function to Handle API Calls and Display Data:
import {
    fetchProductCatalog,
    fetchProductReviews,
    fetchSalesReport
} from './apiSimulator';

fetchProductCatalog()
    .then(products => {
        return Promise.all(products.map(product => {
            return fetchProductReviews(product.id)
                .then(reviews => {
                    console.log("Product Catalog:", products);

                }
                )
        }
        )

        )
    }
    )
// Part 3: Build the Main Application Logic
// Create an index.ts file to contain the main logic of your application.
// Write a Function to Handle API Calls and Display Data:
// Use fetchProductCatalog() to fetch product details and display them.
// For each product, fetch the reviews using fetchProductReviews(productId).
// After fetching products and reviews, retrieve the sales report using fetchSalesReport().
// Implement Error Handling Using Promises:
// Use .catch() to handle any errors from fetchProductCatalog(), fetchProductReviews(), and fetchSalesReport().
// Display error messages to the console if any of the calls fail.
// Use .finally() to log a message indicating that all API calls have been attempted