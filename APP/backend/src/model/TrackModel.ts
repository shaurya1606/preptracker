/**
 * TrackModel.ts
 *
 * Defines the Track entity schema using TypeORM decorators.
 * Maps the Track class to the database table and specifies its fields and types.
 * Used by TypeORM for ORM operations and table creation.
 */

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from "typeorm";

@Entity({ name: "tracks" })
export class Track {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Index({ unique: true })
  @Column({ type: "varchar", length: 255 })
  slug!: string;

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "text" })
  description!: string;

  @Column({ type: "boolean", default: true })
  isActive!: boolean;

  @Column({ type: "boolean", nullable: true })
  isNew?: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
