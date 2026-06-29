import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { TaskDto, CreateTaskDto } from './dto';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Get workspace tasks' })
  async listTasks(): Promise<TaskDto[]> {
    return this.tasksService.listTasks();
  }

  @Post()
  @ApiOperation({ summary: 'Create new task' })
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<TaskDto> {
    return this.tasksService.createTask(createTaskDto);
  }
}
