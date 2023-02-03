import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Car } from "../car/car.model";
import { Role } from "../role/role.model";
import { UserRoles } from "../role/user-role.model";


@Table({ tableName: "users" })
export class User extends Model<User> {

  @ApiProperty({
    example: 1,
    required: true
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true
  })
  id: string;

  @ApiProperty({
    example: "Anna",
    required: false
  })
  @Column({ type: DataType.STRING, allowNull: true })
  firstName: string;

  @ApiProperty({
    example: "Cool",
    required: true
  })

  @Column({ type: DataType.STRING, allowNull: true })
  surName: string;

  @ApiProperty({
    example: 18,
    required: true
  })
  @Column({ type: DataType.INTEGER, allowNull: true })
  age: number;

  @ApiProperty({
    example: "Lviv",
    required: false
  })
  @Column({ type: DataType.STRING, allowNull: true })
  city: string;

  @ApiProperty({
    example: true,
    required: false
  })
  @Column({ type: DataType.BOOLEAN, allowNull: true })
  isConfirm: boolean;

  @ApiProperty({
    example: "ana@mail.com",
    required: true
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({
    example: "ana@mail.com",
    required: true
  })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @HasMany(() => Car)
  cars: Car[];

  @BelongsToMany(() => Role, ()=> UserRoles)
roles: Role[];

}