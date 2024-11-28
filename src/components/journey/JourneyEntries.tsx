import React from 'react';
import { JourneyEntry } from '../../types/journey';
import { format } from 'date-fns';

interface JourneyEntriesProps {
  entries: JourneyEntry[];
}

export function JourneyEntries({ entries }: JourneyEntriesProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Journey Log</h3>
      <div className="space-y-4">
        {entries.map((entry) => (
          <div key={entry.id} className="bg-gray-50 p-4 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">
                {format(entry.date, 'PPP')}
              </span>
              <span className="text-sm font-medium capitalize">
                Mood: {entry.mood}
              </span>
            </div>
            <p className="text-gray-700">{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}