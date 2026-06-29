export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
}

export interface KanbanBoardProps {
  tasks: Task[];
  onUpdateTask: (task: Task) => void;
}
