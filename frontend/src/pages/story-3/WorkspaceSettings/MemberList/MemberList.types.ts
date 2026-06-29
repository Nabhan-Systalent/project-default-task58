export interface WorkspaceMember {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'admin' | 'member' | 'viewer';
}

export interface MemberListProps {
  members?: WorkspaceMember[];
  isLoading?: boolean;
  error?: string | null;
  onRoleChange?: (memberId: string, newRole: WorkspaceMember['role']) => void;
  onRemoveMember?: (memberId: string) => void;
}
