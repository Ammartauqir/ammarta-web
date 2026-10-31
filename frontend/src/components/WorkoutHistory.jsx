import React from 'react';

// Public Strava profile — update if your athlete URL changes
const STRAVA_PROFILE_URL = 'https://www.strava.com/athletes/ammar_tauqir';

const WorkoutHistory = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
        Workout History
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
        I log runs and rides on Strava. Open my profile for the latest activities.
      </p>
      <a
        href={STRAVA_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-transparent border border-gray-900 dark:border-white text-gray-900 dark:text-white px-6 py-2 rounded hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300"
      >
        View on Strava
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
};

export default WorkoutHistory;
