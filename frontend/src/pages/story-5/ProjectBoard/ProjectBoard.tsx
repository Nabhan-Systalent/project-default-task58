'use client';

import React, { useState } from 'react';
import { KanbanBoardProps, Task } from './ProjectBoard.types';
import { columns } from './constants';

export const ProjectBoard: React.FC<KanbanBoardProps> = ({ tasks, onUpdateTask }) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  if (!tasks) {
    return <div className="p-8 text-center text-gray-500">Loading board...</div>;
  }

  return (
    <div className="flex gap-4 p-6 h-full overflow-x-auto">
      {columns.map((column) => (
        <div key={column.id} className="w-80 flex flex-col bg-gray-50 rounded-lg p-4 h-full border border-gray-200">
          <h3 className="font-semibold text-gray-700 mb-4 uppercase text-sm tracking-wide">{column.label}</h3>
          <div className="flex-1 space-y-3">
            {tasks
              .filter((task) => task.status === column.id)
              .map((task) => (
                <div
                  key={task.id}
                  onClick={() => setSelectedTask(task)}
                  className="bg-white p-4 rounded shadow-sm border border-gray-100 cursor-pointer hover:border-blue-400 transition-colors"
                >
                  <h4 className="font-medium text-gray-900">{task.title}</h4>
                </div>
              ))}
          </div>
        </div>
      ))}
      
      {selectedTask && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>
            <input
              type="text"
              value={selectedTask.title}
              onChange={(e) => setSelectedTask({...selectedTask, title: e.target.value})}
              className="w-full mb-4 p-2 border rounded"
            />
            <textarea
              value={selectedTask.description}
              onChange={(e) => setSelectedTask({...selectedTask, description: e.target.value})}
              className="w-full mb-4 p-2 border rounded h-32"
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setSelectedTask(null)} className="px-4 py-2 text-gray-600">Cancel</button>
              <button 
                onClick={() => { onUpdateTask(selectedTask); setSelectedTask(null); }}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
