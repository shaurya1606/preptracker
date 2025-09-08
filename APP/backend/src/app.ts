/**
 * app.ts
 *
 * Main entry point for the backend server.
 * Sets up the Express application, configures middleware, and mounts API routes.
 * Responsible for initializing the database connection and starting the server.
 * This file is the starting point for all HTTP requests to the backend.
 */

import express, { Request, Response } from "express";
import { initializeDatabase } from "./config/Database";
import trackRouter from "./routes/TrackRoutes";

const app = express();
app.use(express.json());

const port: number = 8080;

app.use("/api/v1", trackRouter);

// this route is for health check of the app
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ message: "OK" });
});

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
