import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DataType,
  Unique,
} from 'sequelize-typescript';

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at?: Date;
  updated_at?: Date;
}

@Table
export default class User extends Model {
  @Column({ primaryKey: true, allowNull: false })
  id: string;

  @Column(DataType.TEXT)
  name: string;

  @Unique
  @Column(DataType.TEXT)
  email: string;

  @Column(DataType.UUIDV4)
  password: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
