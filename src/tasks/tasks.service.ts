import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TaskDto } from './Dto/task.dto';
import { Task } from './task.model';
import { InjectModel } from '@nestjs/sequelize';
import { isNumber } from '@nestjs/common/utils/shared.utils';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task) private taskRepository: typeof Task) {}

  async createNewTask(task) {
    if (!task.head)
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Request must have a head',
        },
        HttpStatus.CONFLICT,
      );
    if (task.status != 'atWork' && task.status != 'complete')
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Status must be 'atWork' or 'complete'`,
        },
        HttpStatus.CONFLICT,
      );
    return await this.taskRepository.create(task);
  }

  async getAllTasks() {
    return await this.taskRepository.findAll();
  }

  async getTask(id: { id: number }) {
    if (!isNumber(+id.id))
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Id must be a number',
        },
        HttpStatus.CONFLICT,
      );
    return await this.taskRepository.findOne({ where: { id: id.id } });
  }
  async deleteTask(id: { id: number }) {
    if (!isNumber(+id.id))
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Id must be a number',
        },
        HttpStatus.CONFLICT,
      );
    return await this.taskRepository.destroy({ where: { id: id.id } });
  }

  async updateTask(id: { id: number }, task: TaskDto) {
    if (!isNumber(+id.id))
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Id must be a number',
        },
        HttpStatus.CONFLICT,
      );
    return await this.taskRepository.update(task, { where: { id: id.id } });
  }
}
