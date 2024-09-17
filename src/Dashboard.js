import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js
import { Link } from 'react-router-dom';

const Dashboard = ({ onLogout }) => {
    const therapyChartRef = useRef(null);
    const interactionChartRef = useRef(null);
    const emotionOverTimeChartRef = useRef(null);
    const successFailureChartRef = useRef(null);
    const gestureRecognitionChartRef = useRef(null);

    useEffect(() => {
        // Therapy Sessions Chart (Bar)
        const ctx = document.getElementById('therapyChart').getContext('2d');
        therapyChartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Monthly Therapy Sessions',
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderWidth: 1,
                        data: [12, 19, 3, 5, 2, 3, 8]  // Example data for therapy sessions
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // Interactions Chart (Bar)
        const interactionCtx = document.getElementById('interactionChart').getContext('2d');
        interactionChartRef.current = new Chart(interactionCtx, {
            type: 'bar',
            data: {
                labels: ['Session 1', 'Session 2', 'Session 3', 'Session 4'],
                datasets: [
                    {
                        label: 'Interactions per Session',
                        backgroundColor: 'rgba(153,102,255,0.4)',
                        borderColor: 'rgba(153,102,255,1)',
                        borderWidth: 1,
                        data: [5, 10, 3, 7]  // Example interaction data
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                    }
                }
            }
        });

        // Emotion Detection Over Time (Line)
        const emotionOverTimeCtx = document.getElementById('emotionOverTimeChart').getContext('2d');
        emotionOverTimeChartRef.current = new Chart(emotionOverTimeCtx, {
            type: 'line',
            data: {
                labels: ['Session 1', 'Session 2', 'Session 3', 'Session 4'],
                datasets: [
                    {
                        label: 'Happy',
                        borderColor: '#4BC0C0',
                        data: [10, 15, 8, 20],  // Example data
                        fill: false,
                    },
                    {
                        label: 'Sad',
                        borderColor: '#FF6384',
                        data: [5, 3, 7, 2],
                        fill: false,
                    },
                    {
                        label: 'Angry',
                        borderColor: '#FFCE56',
                        data: [2, 1, 5, 3],
                        fill: false,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // // Interaction Duration by Scene (Bar)
        // const interactionDurationCtx = document.getElementById('interactionDurationChart').getContext('2d');
        // interactionDurationChartRef.current = new Chart(interactionDurationCtx, {
        //     type: 'bar',
        //     data: {
        //         labels: ['Classroom', 'Restaurant', 'Garden'],
        //         datasets: [
        //             {
        //                 label: 'Interaction Duration (minutes)',
        //                 backgroundColor: 'rgba(75,192,192,0.4)',
        //                 borderColor: 'rgba(75,192,192,1)',
        //                 borderWidth: 1,
        //                 data: [15, 10, 25]  // Example interaction duration data
        //             }
        //         ]
        //     },
        //     options: {
        //         responsive: true,
        //         maintainAspectRatio: false,
        //         scales: {
        //             y: {
        //                 beginAtZero: true,
        //             }
        //         }
        //     }
        // });

        // Successful Interactions vs Failed Attempts (Doughnut)
        const successFailureCtx = document.getElementById('successFailureChart').getContext('2d');
        successFailureChartRef.current = new Chart(successFailureCtx, {
            type: 'doughnut',
            data: {
                labels: ['Successful', 'Failed'],
                datasets: [
                    {
                        data: [70, 30],  // Example success/failure data
                        backgroundColor: ['#4BC0C0', '#FF6384'],
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // Gesture Recognition Accuracy (Polar Area)
        const gestureRecognitionCtx = document.getElementById('gestureRecognitionChart').getContext('2d');
        gestureRecognitionChartRef.current = new Chart(gestureRecognitionCtx, {
            type: 'polarArea',
            data: {
                labels: ['Flapping (Happiness)', 'Irritation', 'Neutral'],
                datasets: [
                    {
                        data: [85, 65, 90],  // Example accuracy percentages
                        backgroundColor: ['#FFCE56', '#FF6384', '#4BC0C0'],
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // Cleanup function to destroy the charts when the component unmounts
        return () => {
            therapyChartRef.current?.destroy();
            interactionChartRef.current?.destroy();
            emotionOverTimeChartRef.current?.destroy();
            successFailureChartRef.current?.destroy();
            gestureRecognitionChartRef.current?.destroy();
        };
    }, []);  // Empty dependency array ensures the effect runs only once

    // Function to handle logout with confirmation
    const handleLogoutClick = () => {
        if (window.confirm('Do you really want to logout?')) {
            onLogout();
        }
    };

    return (
        <div style={styles.dashboardContainer}>
            {/* Navbar */}
            <nav style={styles.navbar}>
                <h1>Interactive Skills Enhancer</h1>
                <ul style={styles.navLinks}>
                    <li><Link to="/profile" style={styles.navLink}>Profile</Link></li>
                    <li><button onClick={handleLogoutClick} style={styles.logoutButton}>Logout</button></li>
                </ul>
            </nav>

            <div style={styles.mainContent}>
                {/* Sidebar Profile Section */}
                <aside style={styles.sidebar}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8JEYPY2qj7-KZFyMd6vUwvlzHjo3aooALSw&s"
                        alt="Profile"
                        style={styles.profilePicture}
                    />
                    <div>
                        <h2 style={styles.title}>Ram Aggarwal</h2>
                        <p><strong>Age:</strong> 14</p>
                        <p><strong>ID:</strong> 12345</p>
                    </div>
                </aside>

                {/* Dashboard Content */}
                <div style={styles.chartsContainer}>
                <div style={styles.chartCard}>
                        <h3>Therapy Sessions</h3>
                        <canvas id="therapyChart" style={styles.chartCanvas} />
                    </div>
                    <div style={styles.chartCard}>
                        <h3>Interactions per Session</h3>
                        <canvas id="interactionChart" style={styles.chartCanvas} />
                    </div>
                    <div style={styles.chartCard}>
                        <h3>Emotion Detection Over Time</h3>
                        <canvas id="emotionOverTimeChart" style={styles.chartCanvas} />
                    </div>
                    <div style={styles.chartCard}>
                        <h3>Success vs Failure in Interactions</h3>
                        <canvas id="successFailureChart" style={styles.chartCanvas} />
                    </div>
                    <div style={styles.chartCard}>
                        <h3>Gesture Recognition Accuracy</h3>
                        <canvas id="gestureRecognitionChart" style={styles.chartCanvas} />
                    </div>

                </div>
            </div>
        </div>
    );
};

const styles = {
    dashboardContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
    navbar: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navLinks: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        marginRight: '10px',
    },
    logoutButton: {
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '10px',
        cursor: 'pointer',
    },
    mainContent: {
        display: 'flex',
        flex: 1,
    },
    sidebar: {
        width: '20%',
        padding: '20px',
        backgroundColor: '#f4f4f4',
    },
    profilePicture: {
        width: '100%',
        borderRadius: '50%',
    },
    title: {
        fontSize: '24px',
        marginTop: '10px',
    },
    chartsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        // padding: '20px',
        width: '80%',
        backgroundColor: '#fff',
    },
    chartCard: {
        width: '45%',
        height: '300px',  // Set a fixed height for the chart container
        marginTop:'35px',
        padding:'10px',
    },
    chartCanvas: {
        height: '100%',  // Ensure the canvas takes the full height of the container
        width: '100%',   // Ensure the canvas takes the full width of the container
    }
};

export default Dashboard;
