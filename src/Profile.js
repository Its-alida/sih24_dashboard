import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [selectedSession, setSelectedSession] = useState(null);

    // Sample data for previous sessions
    const sessions = [
        {
            id: 1,
            date: 'August 25, 2024',
            instructor: 'Dr. Sarah Kunj',
            scenes: ['Emotion Recognition', 'Social Interaction'],
            reportLink: 'https://example.com/report1',
        },
        {
            id: 2,
            date: 'August 15, 2024',
            instructor: 'Dr. Krishna Reddy',
            scenes: ['Role-playing Scenarios', 'Facial Expression Recognition'],
            reportLink: 'https://example.com/report2',
        },
        {
            id: 3,
            date: 'August 5, 2024',
            instructor: 'Dr. Mayur Shinde',
            scenes: ['Virtual Conversation Practice', 'Behavioral Cues'],
            reportLink: 'https://example.com/report3',
        },
    ];

    const handleSessionClick = (sessionId) => {
        setSelectedSession(sessionId === selectedSession ? null : sessionId);
    };

    return (
        <div style={styles.profileContainer}>
            {/* Navbar */}
            <nav style={styles.navbar}>
                <h1>Interactive Skills Enhancer</h1>
                <ul style={styles.navLinks}>
                    <li><Link to="/" style={styles.navLink}>Dashboard</Link></li>
                </ul>
            </nav>

            <div style={styles.profileCard}>
                <img
                    src="https://c8.alamy.com/comp/E842KJ/south-indian-child-welcome-E842KJ.jpg"  // Replace with actual profile picture URL
                    alt="Profile"
                    style={styles.profilePicture}
                />
                <div style={styles.infoSection}>
                    <h2>Ram Aggarwal</h2>
                    <p><strong>Age:</strong> 14 years old</p>
                    <p><strong>ID:</strong> 12345</p>
                    <p><strong>Email:</strong> ram@gmail.com</p>
                    <p><strong>Therapist:</strong> Dr. Sarah Kunj</p>
                    <p><strong>Diagnosis:</strong> Autism Spectrum Disorder (ASD)</p>
                    <p><strong>Next Appointment:</strong> September 15, 2024</p>
                </div>

                {/* Previous Sessions */}
                <h3 style={styles.sectionTitle}>Previous Therapy Sessions</h3>
                <div>
                    {sessions.map((session) => (
                        <div key={session.id}>
                            <button
                                style={styles.sessionButton}
                                onClick={() => handleSessionClick(session.id)}
                            >
                                {`Session on ${session.date}`}
                            </button>
                            {selectedSession === session.id && (
                                <div style={styles.sessionDetails}>
                                    <p><strong>Instructor:</strong> {session.instructor}</p>
                                    <p><strong>Date:</strong> {session.date}</p>
                                    <p><strong>Practice Scenes:</strong></p>
                                    <ul>
                                        {session.scenes.map((scene, index) => (
                                            <li key={index}>{scene}</li>
                                        ))}
                                    </ul>
                                    <a
                                        href={session.reportLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={styles.reportLink}
                                    >
                                        View Detailed Report
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Styling for profile layout and session details
const styles = {

    profileContainer: {
        background: 'linear-gradient(45deg, #FF6F61, #6B5B95, #88B04B, #F7D75D)', // Example gradient
        backgroundSize: '400% 400%',
        animation: 'gradientBG 15s ease infinite',
        transition: 'opacity 1s ease-in', // Smooth fade-in effect for page content
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2C3E50',
        padding: '10px 20px',
        color: '#FFF',
    },
    navLinks: {
        display: 'flex',
        listStyleType: 'none',
        gap: '20px',
    },
    navLink: {
        color: '#FFF',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '18px',
    },
    profileCard: {
        backgroundColor: '#FFF',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        width: '800px',
        textAlign: 'center',
        marginTop: '20px', // Ensure card is below navbar
        marginLeft: '50px',
    },
    profilePicture: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        marginBottom: '20px',
    },
    infoSection: {
        textAlign: 'left',
    },
    sectionTitle: {
        marginTop: '20px',
        marginBottom: '10px',
        fontSize: '20px',
    },
    sessionButton: {
        backgroundColor: '#007BFF',
        color: '#FFF',
        border: 'none',
        padding: '10px 20px',
        marginBottom: '10px',
        cursor: 'pointer',
        borderRadius: '5px',
        width: '100%',
    },
    sessionDetails: {
        backgroundColor: '#f1f1f1',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '5px',
        textAlign: 'left',
    },
    reportLink: {
        color: '#007BFF',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
};

export default Profile;
