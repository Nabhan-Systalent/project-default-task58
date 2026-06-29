import React from 'react';
import { ProjectManager } from './projects/ProjectManager';

/**
 * Page for story-4 — synthesised by the AEGIS pipeline so the generated
 * component is mounted by the SPA router. Props are safe placeholders; the
 * integration pass upgrades this into a data-wired container.
 */
export default function Page(): React.ReactElement {
  const props: any = {
    projects: [],
    isLoading: false,
    error: undefined,
    onDelete: () => {},
    onEdit: () => {},
  };
  return (
    <div>
      <h1>Story 4</h1>
      <ProjectManager {...props} />
    </div>
  );
}
