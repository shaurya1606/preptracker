/**
 * TrackRepository.ts
 *
 * Handles direct database operations (CRUD) for the Track entity.
 * Uses TypeORM repository for Track and provides methods for data access.
 * Encapsulates all DB logic for Track resource.
 */

import { Repository } from "typeorm";
import { Track } from "../model/TrackModel";
import { PostgresDataSource } from "../config/Database";

export class TrackRepository {
    private repository: Repository<Track>

    constructor() {
        // Gets the TypeORM repository for Track entity
        this.repository = PostgresDataSource.getRepository(Track);
    }

    async createAndSave(track: Track): Promise<Track> {
        // Creates a new Track entity and saves it to the database
        const createdTrack = this.repository.create(track);
        return this.repository.save(createdTrack);
    }
}