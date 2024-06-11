import { Module } from '@nestjs/common';
import { Task } from './task.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

@Module({
  controllers: [TasksController],
  imports: [SequelizeModule.forFeature([Task])],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
