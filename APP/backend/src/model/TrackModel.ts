/**
 * TrackModel.ts
 *
 * Defines the Track entity schema using TypeORM decorators.
 * Maps the Track class to the database table and specifies its fields and types.
 * Used by TypeORM for ORM operations and table creation.
 */

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity() // Marks this class as a database entity
export class Track {
  @PrimaryGeneratedColumn("uuid") // Auto-generates a UUID for each Track
  id!: number;

  @Column({type: 'varchar'}) // Track name
  name!: string;

  @Column({type: 'varchar'}) // Track description
  description!: string;

  @Column({type: 'varchar'}) // Track slug (URL-friendly identifier)
  slug!: string;

  @Column() // Indicates if the track is new
  isNew?: boolean

  @Column() // Indicates if the track is active
  isActive?: boolean

  @CreateDateColumn() // Timestamp for when the track was created
  createdAt!: Date;
}
