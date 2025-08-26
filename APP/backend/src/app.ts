/**
 * app.ts
 *
 * Main entry point for the backend server.
 * Sets up the Express application, configures middleware, and mounts API routes.
 * Responsible for initializing the database connection and starting the server.
 * This file is the starting point for all HTTP requests to the backend.
 */

import express, { Request, Response } from "express";
import trackRouter from "./routes/TrackRoutes";
import { initializeDatabase } from "./config/Database";

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json()); // Parses incoming JSON requests
app.use("/api/v1", trackRouter); // Mounts Track API routes under /api/v1

// Example function for demonstration purposes
const someMethod = (request: Request, response: Response) => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      category: "Electronics",
      description: "High-performance laptop with latest specifications",
      inStock: true,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Smartphone",
      price: 699.99,
      category: "Electronics",
      description: "Latest smartphone with advanced camera features",
      inStock: true,
      rating: 4.3,
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: 199.99,
      category: "Electronics",
      description: "Noise-cancelling wireless headphones",
      inStock: false,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Coffee Maker",
      price: 89.99,
      category: "Home & Kitchen",
      description: "Programmable coffee maker with timer",
      inStock: true,
      rating: 4.2,
    },
    {
      id: 5,
      name: "Running Shoes",
      price: 129.99,
      category: "Sports",
      description: "Comfortable running shoes for daily workouts",
      inStock: true,
      rating: 4.6,
    },
  ];

  // Responds with product data as JSON
  response.status(200).json({
    success: true,
    data: products,
    total: products.length,
  });
};

// Error logging middleware
app.use((err: any, req: Request, res: Response, next: Function) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal Server Error", details: err.message });
});

// Products endpoint
app.get("/products", someMethod);

initializeDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port number ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to initialize database:", err);
    process.exit(1);
  });
