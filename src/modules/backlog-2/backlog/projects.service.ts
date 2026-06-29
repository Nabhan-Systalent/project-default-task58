import { Injectable } from '@nestjs/common';
import { ProjectDto } from './dto';

@Injectable()
export class ProjectsService {
  private projects: ProjectDto[] = [{ id: 'p1', name: 'Main Project' }];

  async listProjects(): Promise<ProjectDto[]> {
    return this.projects;
  }

  async deleteProject(id: string): Promise<void> {
    this.projects = this.projects.filter(p => p.id !== id);
  }
}
