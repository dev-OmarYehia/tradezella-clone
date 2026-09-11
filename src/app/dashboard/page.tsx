import React from 'react';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center">
        <p className="text-gray-400 mb-4">No trades yet</p>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Trades will be imported from your broker or added manually in a future milestone.
        </p>
      </div>
    </div>
  );
}