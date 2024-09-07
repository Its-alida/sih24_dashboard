import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Login from './Login';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Handle login
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    // Handle logout
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
                />
                <Route
                    path="/dashboard"
                    element={isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />}
                />
            
                <Route
                    path="/profile"
                    element={isLoggedIn ? <Profile /> : <Navigate to="/profile" />}
                />
                <Route
                    path="/login"
                    element={<Login onLogin={handleLogin} />}
                />
                <Route
                    path="/logout"
                    element={<Navigate to="/login" />}
                />
            </Routes>
        </Router>
    );
};

export default App;
