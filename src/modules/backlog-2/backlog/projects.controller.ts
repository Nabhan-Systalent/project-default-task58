import { Controller, Get, Delete, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ProjectsService } from './projects.service';
import { ProjectDto } from './dto';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiOperation({ summary: 'List projects' })
  async listProjects(): Promise<ProjectDto[]> {
    return this.projectsService.listProjects();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete project' })
  async deleteProject(@Param('id') id: string): Promise<void> {
    return this.projectsService.deleteProject(id);
  }
}
