import { ApiProperty } from '@nestjs/swagger';

export class ProjectDto {
  @ApiProperty({ description: 'The unique identifier of the project' })
  id: string;

  @ApiProperty({ description: 'The name of the project' })
  name: string;

  @ApiProperty({ description: 'Whether the project is active' })
  isActive: boolean;
}
