import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from './Dto/task.dto';
import {IdDto} from "./Dto/id.dto";

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Post()
  async createNewTask(@Body() task: TaskDto) {
    return await this.tasksService.createNewTask(task);
  }
  @Get()
  async getAllTasks() {
    return await this.tasksService.getAllTasks();
  }
  @Get(':id')
  async getTask(@Param() id: IdDto) {
    return await this.tasksService.getTask(id);
  }
  @Put(':id')
  async updateTask(@Param() id: IdDto, @Body() task: TaskDto) {
    return await this.tasksService.updateTask(id, task);
  }
  @Delete(':id')
  async deleteTask(@Param() id: IdDto) {
    return await this.tasksService.deleteTask(id);
  }
}
