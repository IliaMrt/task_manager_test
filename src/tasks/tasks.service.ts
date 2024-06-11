import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {TaskDto} from "./task.dto";
import {Task} from "./task.model";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task) private taskRepository: typeof Task)
    {}

    async createNewTask(task) {
        if (!task.head) throw new HttpException({
            status: HttpStatus.BAD_REQUEST,
            error: 'Request must have a head',
        }, HttpStatus.CONFLICT)
        if (task.status!='atWork'&&task.status!='complete') throw new HttpException({
            status: HttpStatus.BAD_REQUEST,
            error: `Status must be 'atWork' or 'complete'`,
        }, HttpStatus.CONFLICT)
       return await this.taskRepository.create(task)
    }
}
