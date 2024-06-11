import { Column, DataType, Model, Table } from 'sequelize-typescript';
@Table({ tableName: 'tasks' })
export class Task extends Model<Task, any> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  head: string;
  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  description: string;
  @Column({ type: DataType.STRING })
  status: string;
}
