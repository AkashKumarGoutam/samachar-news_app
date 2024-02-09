import React, { useState, useEffect } from 'react';

const InternetCheck = () => {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
            window.alert("You are online!");
        };
        const handleOffline = () => {
            setIsOnline(false);
            window.alert("You are offline! Please check your internet connection.");
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return null; // Render nothing since alert is shown via window.alert()
};

export default InternetCheck;
