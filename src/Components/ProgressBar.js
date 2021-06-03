import React, { useState, useEffect } from 'react';

export const ProgressBar = ({ initialSeconds = 10 }) => {

    const [progress, setProgress] = useState(0);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
                setProgress(progress + 10);
            }
            if (seconds === 0) {
                clearInterval(timer);
            }

        }, 1000);
        return () => clearInterval(timer);
    });

    return (
        <div class="progress">
            <div
                class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                role="progressbar"
                style={{ width: `${progress}%` }}></div>
        </div>
    );



};
