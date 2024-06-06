import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homecheck from './pages/Homecheck/App';
import Package from './pages/Package/Package';
import Login from './pages/Login/Login';

function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you're looking for does not exist.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homecheck" element={<Homecheck />} />
          <Route path="/package/:place" element={<Package />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
