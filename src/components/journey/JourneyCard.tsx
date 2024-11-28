import React from 'react';
import { Journey } from '../../types/journey';
import { Progress } from '../ui/Progress';
import { formatDistance } from 'date-fns';

interface JourneyCardProps {
  journey: Journey;
  onClick: () => void;
}

export function JourneyCard({ journey, onClick }: JourneyCardProps) {
  const daysActive = formatDistance(journey.startDate, new Date());
  
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-semibold mb-2">{journey.title}</h3>
      <p className="text-gray-600 mb-4">{journey.description}</p>
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Progress</span>
          <span>{Math.round(journey.progress)}%</span>
        </div>
        <Progress value={journey.progress} />
        <p className="text-sm text-gray-500">Active for {daysActive}</p>
      </div>
    </div>
  );
}