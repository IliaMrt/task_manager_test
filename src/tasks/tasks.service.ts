import { Injectable } from '@nestjs/common';
import { TaskDto } from './Dto/task.dto';
import { Task } from './task.model';
import { InjectModel } from '@nestjs/sequelize';
import { IdDto } from './Dto/id.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task) private taskRepository: typeof Task) {}

  async createNewTask(task) {
    return await this.taskRepository.create(task);
  }

  async getAllTasks() {
    return await this.taskRepository.findAll();
  }

  async getTask(id: IdDto) {
    return await this.taskRepository.findOne({ where: { id: id.id } });
  }
  async deleteTask(id: IdDto) {
    return await this.taskRepository.destroy({ where: { id: id.id } });
  }

  async updateTask(id: IdDto, task: TaskDto) {
    return await this.taskRepository.update(task, { where: { id: id.id } });
  }
}
