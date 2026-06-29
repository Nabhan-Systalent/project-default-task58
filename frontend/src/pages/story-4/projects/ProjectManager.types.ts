export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'archived' | 'on-hold';
  updatedAt: string;
}

export interface ProjectListProps {
  projects: Project[];
  isLoading?: boolean;
  error?: string | null;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}
