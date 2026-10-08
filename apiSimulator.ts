// Part 1: Set Up Your Project
// Create a New Project:
// Set up a new project folder, initialize it with npm init -y, and install any necessary dependencies, such as TypeScript.
// Create an apiSimulator.ts file:
// This file will contain functions that simulate API requests using Promises.
// Each function should return a Promise that resolves with mock data after a delay, or rejects with an error message.

import { NetworkError, DataError } from "./customErrors";


// Part 2: Implement API Simulation Functions
// Simulate Asynchronous API Calls:
// Create the following functions in apiSimulator.ts, ensuring each returns a Promise:
export interface Product {
    id: number;
    name: string;
    price: number;
}
// fetchProductCatalog(): Simulates fetching a list of products, each with id, name, and price.
export const fetchProductCatalog = (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        // Use Math.random() to sometimes reject the Promise with an error message, e.g., "Failed to fetch product catalog".
        if (Math.random() < 0.8) {
        resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
        ]);
        } else {
        reject(new NetworkError("Failed to fetch product catalog"));
        }
    }, 1000);
    });
};
// Resolve the Promise with an array of mock products after a 1-second delay.
// Continue with fetchProductReviews() and fetchSalesReport() functions similarly, adding realistic mock data and a chance for rejection.
// fetchProductReviews(productId: number): Simulates fetching reviews for a product.
export const fetchProductReviews = (productId: number): Promise<{ rating: number; comment: string }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
            // Resolve the Promise with an array of reviews after a 1.5-second delay.
            resolve([
                { rating: 5, comment: `Great product!` },
                { rating: 4, comment: `Very satisfied with my purchase.` },
            ]);
        } else {
            // Reject the Promise randomly with an error message, e.g., "Failed to fetch reviews for product ID ${productId}".
            reject(new DataError(`Failed to fetch reviews for product ID ${productId}`));
        }
    }, 1500);
    });
};
// fetchSalesReport(): Simulates fetching a sales report with totalSales, unitsSold, and averagePrice.
export const fetchSalesReport = (): Promise<{ totalSales: number; unitsSold: number; averagePrice: number }> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
            // Resolve the Promise with a mock sales report after a 1-second delay.
            resolve({
                totalSales: 10000,
                unitsSold: 100,
                averagePrice: 100
            });
        } else {
            // Reject randomly with an error message, e.g., "Failed to fetch sales report".
            reject(new DataError("Failed to fetch sales report"));
        }
    }, 1000);
    });
};






// Part 5: Optional Challenge
// Create a Retry Mechanism:
// Write a utility function retryPromise that accepts an async function, the number of retry attempts, and the delay between attempts.
// Hint: Use setTimeout to delay the next attempt.
// Hint: You will need to utilize recursion to implement this function. Not sure what recursion is, or don’t quite remember? This is an opportunity to practice your research abilities or review!
// Use this function to retry API calls that fail initially.
// Implement retryPromise with API Calls to retry up to three times for each API call before giving up.