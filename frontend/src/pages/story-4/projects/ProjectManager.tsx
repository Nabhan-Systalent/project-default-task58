import { Project } from './ProjectManager.types';

export const ProjectManager = ({
  projects,
  isLoading = false,
  error = null,
  onDelete,
  onEdit,
}: {
  projects: Project[];
  isLoading?: boolean;
  error?: string | null;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12 text-[var(--color-text-secondary)]">
        Loading projects...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-[var(--color-bg-error)] text-[var(--color-text-error)] rounded-lg">
        {error}
      </div>
    );
  }

  if (!projects.length) {
    return (
      <div className="text-center p-12 border-2 border-dashed border-[var(--color-border)] rounded-xl">
        <p className="text-[var(--color-text-secondary)]">No projects found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 border border-[var(--color-border)] rounded-xl hover:shadow-md transition-shadow bg-[var(--color-bg-card)]"
          >
            <h3 className="font-semibold text-lg text-[var(--color-text-primary)] mb-2">
              {project.name}
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="px-2 py-1 text-xs rounded-full bg-[var(--color-bg-surface)] text-[var(--color-text-tertiary)] capitalize">
                {project.status}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => onEdit?.(project.id)}
                  className="text-sm text-[var(--color-primary)] hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete?.(project.id)}
                  className="text-sm text-[var(--color-text-error)] hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
