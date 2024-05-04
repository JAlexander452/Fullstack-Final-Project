import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import LoginForm from './LoginForm';
import FreshmanPage from './FreshmanPage'; // Ensure these components are correctly imported
import SophomorePage from './SophomorePage';
import JuniorPage from './JuniorPage';
import SeniorPage from './SeniorPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Navigation component moved inside App but correctly scoped
  function Navigation() {
    const navigate = useNavigate(); // useNavigate hook used inside Navigation function

    const handleLogout = () => {
      setIsLoggedIn(false);  // Update isLoggedIn state to false
      navigate('/');  // Navigate to the root page on logout
    };

    return (
      <nav>
        <ul>
          <li><Link to="/freshman">Freshman</Link></li>
          <li><Link to="/sophomore">Sophomore</Link></li>
          <li><Link to="/junior">Junior</Link></li>
          <li><Link to="/senior">Senior</Link></li>
          <li><button onClick={() => navigate('/')}>Home</button></li>  
          <li><button onClick={handleLogout}>Logout</button></li>  
        </ul>
      </nav>
    );
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Welcome to The Morehouse Site! Please {isLoggedIn ? 'select a page based on classification.' : 'enter Username and Password'}
        </header>
        {!isLoggedIn ? (
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        ) : (
          <Navigation /> // Using Navigation component here
        )}
        <Routes>
          <Route path="/freshman" element={<FreshmanPage />} />
          <Route path="/sophomore" element={<SophomorePage />} />
          <Route path="/junior" element={<JuniorPage />} />
          <Route path="/senior" element={<SeniorPage />} />
          {!isLoggedIn && <Route path="*" element={<Navigate replace to="/" />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Ensure this line is outside any function or class.
