export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  completedAt?: Date;
}

export interface JourneyEntry {
  id: string;
  date: Date;
  content: string;
  mood: 'great' | 'good' | 'neutral' | 'bad';
}

export interface Journey {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  tasks: Task[];
  entries: JourneyEntry[];
  progress: number;
}