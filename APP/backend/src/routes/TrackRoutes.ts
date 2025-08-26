/**
 * TrackRoutes.ts
 *
 * Defines Express routes for the Track API endpoints.
 * Maps HTTP methods and paths to controller functions for Track resource.
 * Used by app.ts to mount Track API under /api/v1.
 */

import express from 'express';
import { createTrack } from '../controller/TrackController';

const trackerRouter = express.Router(); // Creates a new router for Track

// Debug GET route for testing connectivity
trackerRouter.get("/tracks", (req, res) => {
	res.status(200).json({ message: "GET /tracks route is working" });
});

// POST route to create a new Track
trackerRouter.post("/tracks", createTrack);

export default trackerRouter; // Exports the router for use in app.ts