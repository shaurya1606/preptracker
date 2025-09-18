/**
 * TrackRoutes.ts
 *
 * Defines Express routes for the Track API endpoints.
 * Maps HTTP methods and paths to controller functions for Track resource.
 * Used by app.ts to mount Track API under /api/v1.
 */
import express from "express";
import {
  createTrack,
  deleteTrack,
  findTrackById,
  findTrackBySlug,
  findTracks,
  updateTrack,
} from "../controller/TrackController";
import { verifyToken } from "../middleware/AuthMiddleware";

const trackRouter = express.Router();

trackRouter.post("/tracks", createTrack);
// add verifyToken when it is ready with try and catch
trackRouter.get("/tracks", findTracks);
trackRouter.get("/tracks/:id", findTrackById);
trackRouter.get("/tracks/slug/:id", findTrackBySlug);
trackRouter.put("/tracks/:id", updateTrack);
trackRouter.delete("/tracks/:id", deleteTrack);

export default trackRouter;
