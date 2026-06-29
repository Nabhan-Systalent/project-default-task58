import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, TaskResponseDto } from './dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiResponse({ status: 200, type: [TaskResponseDto] })
  async listTasks(): Promise<TaskResponseDto[]> {
    return this.tasksService.findAll();
  }

  @Post()
  @ApiResponse({ status: 201, type: TaskResponseDto })
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<TaskResponseDto> {
    return this.tasksService.create(createTaskDto);
  }
}
