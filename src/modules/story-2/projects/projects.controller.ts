import { Controller, Get, Delete, Param, HttpCode } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectResponseDto } from '../tasks/dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiResponse({ status: 200, type: [ProjectResponseDto] })
  async listProjects(): Promise<ProjectResponseDto[]> {
    return this.projectsService.findAll();
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiResponse({ status: 204 })
  async deleteProject(@Param('id') id: string): Promise<void> {
    return this.projectsService.delete(id);
  }
}
