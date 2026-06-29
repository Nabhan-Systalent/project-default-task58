import React, { useEffect, useState } from 'react';
import { MemberList } from './WorkspaceSettings/MemberList/MemberList';
import { listProjects } from '../../lib/api';

/**
 * Container for story-3 — synthesised by the AEGIS integration pass [SYS-264].
 * Fetches the screen data from the typed API client and binds it to the
 * generated component.
 */
export default function Page(): React.ReactElement {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    let active = true;
    listProjects()
      .then((res: any) => { if (active) setData(res); })
      .catch((e: any) => { if (active) setError(e?.message ?? String(e)); })
      .finally(() => { if (active) setIsLoading(false); });
    return () => { active = false; };
  }, []);

  const props: any = {
    members: data,
    isLoading: isLoading,
    error: error,
    onRoleChange: () => {},
    onRemoveMember: () => {},
  };
  return <MemberList {...props} />;
}
