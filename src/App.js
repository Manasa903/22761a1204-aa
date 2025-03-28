// src/app.js
import React from 'react';
import Home from './Home';  // Changed from { Home } to Home (default import)

function App() {
  return (
    <div className="App">
      <Home /> {/* This will now work correctly */}
    </div>
  );
}

export default App;