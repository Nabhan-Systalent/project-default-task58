import { Injectable } from '@nestjs/common';
import { CreateTaskDto, TaskResponseDto } from './dto';

@Injectable()
export class TasksService {
  private tasks: TaskResponseDto[] = [];

  async findAll(): Promise<TaskResponseDto[]> {
    return this.tasks;
  }

  async create(createTaskDto: CreateTaskDto): Promise<TaskResponseDto> {
    const newTask = {
      id: Math.random().toString(36).substring(7),
      title: createTaskDto.title,
      createdAt: new Date(),
    };
    this.tasks.push(newTask);
    return newTask;
  }
}
