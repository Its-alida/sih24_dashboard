import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = ({ onLogin }) => {
    const [showLogin, setShowLogin] = useState(false);
    const [pageOpacity, setPageOpacity] = useState(0); // State to control page opacity
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Fade in the page content
    useEffect(() => {
        const timer = setTimeout(() => {
            setPageOpacity(1); // Start fade-in animation
        }, 0); // Immediate start

        // Clean up the timer when component unmounts
        return () => clearTimeout(timer);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'ram@gmail.com' && password === '123') {
            onLogin();  // Notify App.js that the user is logged in.
            navigate('/profile');  // Redirect to the dashboard
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div style={{ ...styles.container, opacity: pageOpacity }}>
            {/* Landing Page Content */}
            {!showLogin && (
                <div style={styles.heroSection}>
                    <h1>Welcome to the Dashboard </h1>
                    <p>Sign in to access your profile and report.</p>
                    <button style={styles.heroButton} onClick={() => setShowLogin(true)}>
                        Login
                    </button>
                </div>
            )}

            {/* Login Form */}
            {showLogin && (
                <div style={styles.formContainer}>
                    <form style={styles.form} onSubmit={handleLogin}>
                        <h2>Login</h2>
                        <div style={styles.inputGroup}>
                            <label>Email</label>
                            <input style={{ 
                                        fontSize: '16px',
                                        padding: '5px',
                                        border: '1px solid #ccc',
                                        borderRadius: '5px',
                                        width: '95%'
                                    }}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label>Password</label>
                            <input style={{ 
                                        fontSize: '16px',
                                        padding: '5px',
                                        border: '1px solid #ccc',
                                        borderRadius: '5px',
                                        width: '95%'
                                    }}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" style={styles.button}>Login</button>
                    </form>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(45deg, #FF6F61, #6B5B95, #88B04B, #F7D75D)', // Example gradient
        backgroundSize: '400% 400%',
        animation: 'gradientBG 15s ease infinite',
        transition: 'opacity 1s ease-in', // Smooth fade-in effect for page content
    },
    '@keyframes gradientBG': {
        '0%': {
            backgroundPosition: '0% 0%',
        },
        '50%': {
            backgroundPosition: '100% 100%',
        },
        '100%': {
            backgroundPosition: '0% 0%',
        },
    },
    heroSection: {
        textAlign: 'center',
        backgroundColor: '#FFF',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        width: '500px',
        marginBottom: '20px', // Add margin to separate from form
    },
    heroButton: {
        padding: '10px 20px',
        backgroundColor: '#88789F',
        color: '#FFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px',
    },
    formContainer: {
        backgroundColor: '#FFF',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        width: '300px',
        marginTop: '20px', // Margin to separate from hero section
        textAlign: 'center', // Center-align text inside form
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Align items to the start of the form container
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '15px',
        width: '100%',
    },
    label: {
        marginBottom: '5px', // Space between label and input field
        textAlign: 'left',
        width: '100%', // Ensure label takes full width
    },
    input: {
        padding: '60px', // Increase padding for larger text boxes
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '100%', // Ensure input field takes full width
        fontSize: '40px', // Increase font size for better readability
        boxSizing: 'border-box', // Include padding and border in element's total width and height
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#88789F',
        color: '#FFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%', // Make button full-width
    },
};

export default LandingPage;
