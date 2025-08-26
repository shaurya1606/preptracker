/**
 * TrackController.ts
 *
 * Handles HTTP requests and responses for the Track resource.
 * Validates and extracts request data, calls service methods, and returns responses.
 * Implements the main controller logic for Track API endpoints.
 */

import { TrackService } from "../service/TrackService";
import { Request, Response } from "express";

const trackService = new TrackService();

export const createTrack = async (request: Request, response: Response) => {
  try {
    // Calls the service to create a new Track using request body data
    const track = await trackService.create(request.body);
    // Responds with the created Track object
    response.status(200).json({ track: track });
  } catch (error) {
    // Handles errors and sends error response
    response.status(500).json({ error: error });
  }
};