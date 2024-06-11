import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Post()
  createNewTask() {
    return 'createNewTask';
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
