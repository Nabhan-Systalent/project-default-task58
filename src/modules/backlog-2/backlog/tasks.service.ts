import { Injectable } from '@nestjs/common';
import { TaskDto, CreateTaskDto } from '../dto';

@Injectable()
export class TasksService {
  private tasks: TaskDto[] = [{ id: '1', title: 'Example Task' }];

  async listTasks(): Promise<TaskDto[]> {
    return this.tasks;
  }

  async createTask(dto: CreateTaskDto): Promise<TaskDto> {
    const newTask = { id: Math.random().toString(), ...dto };
    this.tasks.push(newTask);
    return newTask;
  }
}
