// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';
import Create from './Create';
import Existing from './Existing';
import Issued from './Issued';
import Pending from './Pending';
import Review from './Review';
import History from './history';
import HistoryDetails from './HistoryDetails'; // Import the HistoryDetails component
import Appbar from './Appbar';
import Skeleton from '@mui/material/Skeleton';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentPage, setCurrentPage] = useState('existing');
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleLogin = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoggedIn(true);
            setIsLoading(false);
        }, 1000);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [currentPage]);

    const handleProgress = (val) => {
        setProgress(val);
    };

    const navigateTo = (page) => {
        setCurrentPage(page);
    };

    return (
        <Router>
            <div>
                {isLoggedIn && <Appbar navigateTo={navigateTo} progress={handleProgress} />}
                <div className="App-content">
                    {isLoading ? (
                        <>
                            <Skeleton animation="wave" width={200} height={40} />
                            <Skeleton animation="wave" variant="rectangular" width={300} height={200} />
                            <Skeleton animation="wave" variant="rectangular" width={300} height={200} />
                            <Skeleton animation="wave" variant="rectangular" width={300} height={200} />
                        </>
                    ) : (
                        isLoggedIn ? (
                            <Routes>
                                <Route path="/" element={<Home progress={handleProgress} />} />
                                <Route path="/create" element={<Create progress={handleProgress} />} />
                                <Route path="/existing" element={<Existing progress={handleProgress} />} />
                                <Route path="/issued" element={<Issued progress={handleProgress} />} />
                                <Route path="/history" element={<History progress={handleProgress} />} />
                                <Route path="/pending" element={<Pending progress={handleProgress} />} />
                                <Route path="/review" element={<Review />} />
                                <Route path="/history-details/:id" element={<HistoryDetails />} />
                            </Routes>
                        ) : (
                            <LoginPage onLogin={handleLogin} progress={handleProgress} />
                        )
                    )}
                </div>
            </div>
        </Router>
    )
}

export default App;
