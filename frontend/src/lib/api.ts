// auto-generated — do not edit

const BASE = '/api';

/** Create new task */
export async function createTask(): Promise<void> {
  const res = await fetch(`${BASE}/tasks`, { method: 'POST' });
  if (!res.ok) throw new Error(`createTask failed: ${res.status}`);
}

/** Delete project */
export async function deleteProject(): Promise<void> {
  const res = await fetch(`${BASE}/projects`, { method: 'DELETE' });
  if (!res.ok) throw new Error(`deleteProject failed: ${res.status}`);
}

/** List projects */
export async function listProjects(): Promise<unknown> {
  const res = await fetch(`${BASE}/projects`, { method: 'GET' });
  if (!res.ok) throw new Error(`listProjects failed: ${res.status}`);
  const text = await res.text();
  return (text ? JSON.parse(text) : undefined) as unknown;
}

/** Get workspace tasks */
export async function listTasks(): Promise<unknown> {
  const res = await fetch(`${BASE}/tasks`, { method: 'GET' });
  if (!res.ok) throw new Error(`listTasks failed: ${res.status}`);
  const text = await res.text();
  return (text ? JSON.parse(text) : undefined) as unknown;
}
