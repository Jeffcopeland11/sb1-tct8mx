import React from 'react';
import { useJourneyStore } from './store/useJourneyStore';
import { JourneyCard } from './components/journey/JourneyCard';
import { TaskList } from './components/journey/TaskList';
import { JourneyEntries } from './components/journey/JourneyEntries';

function App() {
  const { journeys, activeJourney, setActiveJourney } = useJourneyStore();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Journey Tracker</h1>
        
        {activeJourney ? (
          <div className="space-y-8">
            <button
              onClick={() => setActiveJourney('')}
              className="text-blue-600 hover:underline"
            >
              ← Back to all journeys
            </button>
            
            <JourneyCard 
              journey={activeJourney}
              onClick={() => {}}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TaskList 
                journeyId={activeJourney.id}
                tasks={activeJourney.tasks}
              />
              <JourneyEntries entries={activeJourney.entries} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {journeys.map((journey) => (
              <JourneyCard
                key={journey.id}
                journey={journey}
                onClick={() => setActiveJourney(journey.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;