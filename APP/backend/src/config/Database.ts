/**
 * Database.ts
 *
 * Configures and initializes the TypeORM DataSource for PostgreSQL.
 * Exports functions to connect and synchronize entities with the database.
 * Ensures all models are registered for automatic table creation and DB operations.
 */

import { DataSource } from "typeorm"
import { Track } from "../model/TrackModel";

export const PostgresDataSource = new DataSource({
    type: "postgres", // Database type
    host: "localhost", // Database host
    port: 5432, // Database port
    username: "postgres", // DB username
    password: "1234", // DB password
    database: "preptrack", // DB name
    synchronize: true, // Auto sync entities
    logging: false, // Disable logging
    entities: [Track], // Register Track entity
    migrations: [],
    subscribers: [],
});

export const initializeDatabase = async () => {
    // Initializes the database connection if not already initialized
    if (PostgresDataSource.isInitialized) return PostgresDataSource;
    await PostgresDataSource.initialize();
    return PostgresDataSource;
};


