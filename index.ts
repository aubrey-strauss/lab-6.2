
// For each product, fetch the reviews using fetchProductReviews(productId).

// Part 3: Build the Main Application Logic
// Create an index.ts file to contain the main logic of your application.
// Write a Function to Handle API Calls and Display Data:
import {
    fetchProductCatalog,
    fetchProductReviews,
    fetchSalesReport
} from './apiSimulator';

import {
    NetworkError,
    DataError
} from './customErrors';

// Use fetchProductCatalog() to fetch product details and display them.
fetchProductCatalog()
    .then(products => {
        console.log("Product Catalog:", products);
        // Implement Error Handling Using Promises:
        return Promise.all(
            products.map(product =>
                // For each product, fetch the reviews using fetchProductReviews(productId).
                fetchProductReviews(product.id)
                    .then(reviews => ({ product, reviews }))
            )
        );
    })
    .then(productsWithReviews => {
        productsWithReviews.forEach(({ product, reviews }) => {
            console.log(`Reviews for ${product.name}:`, reviews);
        }); 
        return fetchSalesReport();

    })
    // After fetching products and reviews, retrieve the sales report using fetchSalesReport().
    .then(salesReport => {
        console.log("Sales Report:", salesReport);
    })
    // Use .catch() to handle any errors from fetchProductCatalog(), fetchProductReviews(), and fetchSalesReport().
    .catch(error => {
        if (error instanceof NetworkError) {
            console.error("Network Error occurred:", error.message);
        } else if (error instanceof DataError) {
            console.error("Data Error occurred:", error.message);
        } else {
            console.error("Unexpected Error occurred:", error.message);
        }
    })
    // Use .finally() to log a message indicating that all API calls have been attempted
    .finally(() => {
    // Display error messages to the console if any of the calls fail.
        console.log("All API calls have been attempted.");
    });


                //        console.log("Product Catalog:", products);
                //    console.log("Product Reviews:", reviews);
// Part 3: Build the Main Application Logic
// Create an index.ts file to contain the main logic of your application.
// Write a Function to Handle API Calls and Display Data:
// Implement Error Handling Using Promises:
// Display error messages to the console if any of the calls fail.