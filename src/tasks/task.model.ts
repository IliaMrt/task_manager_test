import { Column, DataType, Model, Table } from 'sequelize-typescript';
// import { ValidateAttribute } from '@sequelize/core/decorators-legacy';
import { Length } from 'sequelize-typescript/dist/validation/length';
import { StatusDto } from './Dto/status.dto';

@Table({ tableName: 'tasks' })
export class Task extends Model<Task, any> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Length({ msg: 'The header must be longer than three symbols', min: 3 })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  head: string;
  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  description: string;
  @Column({ type: DataType.ENUM('atWork', 'complete') })
  status: StatusDto;
}
