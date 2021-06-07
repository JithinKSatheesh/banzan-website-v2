import React, { useState, useEffect } from 'react';

export const ProgressBar = ({ initialSeconds = 10000 }) => {

    const trigger = 500
    const [progress, setProgress] = useState(0);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 500);
                setProgress(progress + 5);
            }
            if (seconds === 0) {
                clearInterval(timer);
            }

        }, trigger);
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
