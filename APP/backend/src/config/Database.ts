/**
 * Database.ts
 *
 * Configures and initializes the TypeORM DataSource for PostgreSQL.
 * Exports functions to connect and synchronize entities with the database.
 * Ensures all models are registered for automatic table creation and DB operations.
 */

import "reflect-metadata";
import { DataSource } from "typeorm";
import { Track } from "../model/TrackModel";
import { User } from "../model/UserModel";

export const PostgresDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "preptrack",
  synchronize: true,
  logging: false,
  entities: [Track, User],
  migrations: [],
  subscribers: [],
});

export const initializeDatabase = async () => {
  if (PostgresDataSource.isInitialized) return PostgresDataSource;
  return PostgresDataSource.initialize();
};



