/**
 * TrackService.ts
 *
 * Contains business logic for Track operations.
 * Calls repository methods for data access and can be extended for validation, transformation, etc.
 * Acts as an intermediary between controller and repository layers.
 */

import { TrackRepository } from "../repository/TrackRepository";    
import { Track } from "../model/TrackModel";

export class TrackService {
    private trackRepository: TrackRepository;

    constructor() {
        // Initializes the TrackRepository for DB operations
        this.trackRepository = new TrackRepository();
    }

    async create(track: Track): Promise<Track> {
        // Calls repository to create and save a new Track
        return this.trackRepository.createAndSave(track);
    }
}