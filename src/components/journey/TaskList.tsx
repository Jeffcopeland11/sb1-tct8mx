import React from 'react';
import { Task } from '../../types/journey';
import { useJourneyStore } from '../../store/useJourneyStore';

interface TaskListProps {
  journeyId: string;
  tasks: Task[];
}

export function TaskList({ journeyId, tasks }: TaskListProps) {
  const completeTask = useJourneyStore(state => state.completeTask);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Tasks</h3>
      <div className="space-y-2">
        {tasks.map((task) => (
          <div 
            key={task.id}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-md"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => completeTask(journeyId, task.id)}
              className="h-4 w-4 text-blue-600 rounded"
            />
            <span className={task.completed ? 'line-through text-gray-500' : ''}>
              {task.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}