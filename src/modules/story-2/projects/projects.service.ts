import { Injectable } from '@nestjs/common';
import { ProjectResponseDto } from './dto';

@Injectable()
export class ProjectsService {
  private projects: ProjectResponseDto[] = [
    { id: '1', name: 'Main Project' }
  ];

  async findAll(): Promise<ProjectResponseDto[]> {
    return this.projects;
  }

  async delete(id: string): Promise<void> {
    this.projects = this.projects.filter(p => p.id !== id);
  }
}
