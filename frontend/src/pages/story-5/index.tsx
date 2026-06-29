import React, { useEffect, useState } from 'react';
import { ProjectBoard } from './ProjectBoard/ProjectBoard';
import { listTasks } from '../../lib/api';

/**
 * Container for story-5 — synthesised by the AEGIS integration pass [SYS-264].
 * Fetches the screen data from the typed API client and binds it to the
 * generated component.
 */
export default function Page(): React.ReactElement {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    let active = true;
    listTasks()
      .then((res: any) => { if (active) setData(res); })
      .catch((e: any) => { if (active) setError(e?.message ?? String(e)); })
      .finally(() => { if (active) setIsLoading(false); });
    return () => { active = false; };
  }, []);

  const props: any = {
    tasks: data,
    onUpdateTask: () => {},
  };
  return <ProjectBoard {...props} />;
}
