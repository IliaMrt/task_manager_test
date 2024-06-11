import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {Task} from "./task.model";
import {TaskDto} from "./task.dto";

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {
  }
  @Post()
  async createNewTask(@Body() task: TaskDto) {
    return await this.tasksService.createNewTask(task);
  }
  @Get()
  getAllTasks() {
    return 'getAllTasks';
  }
  @Get(':id')
  getTask(@Param() id: { id: number }) {
    return `getTask, ${id.id}`;
  }
  @Put(':id')
  updateTask(@Param() id: { id: number }) {
    return `updateTask, ${id.id}`;
  }
  @Delete(':id')
  deleteTask(@Param() id: { id: number }) {
    return `delTask, ${id.id}`;
  }
}
