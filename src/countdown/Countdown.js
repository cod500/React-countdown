import React, { useState, useEffect } from 'react';
import '../styles/countdown.css';

export default function Countdown({ handleCloseCountdown }) {
    const [days, setDays] = useState("00");
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");

    const [countdownEnded, setCountdownEnded] = useState(false);

    const startCountdown = () => {
        let interval = setInterval(() => {
            const endDate = new Date("Feb 25, 2022");
            const currentDate = new Date();
            const gap = (endDate - currentDate); //milliseconds left 

            const second = 1000; // convert milliseconds to seconds 
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;


            const daysCount = Math.floor(gap / day)
            const hoursCount = Math.floor((gap % day) / hour);
            const minutesCount = Math.floor((gap % hour) / minute);
            const secondsCount = Math.floor((gap % minute) / second);

            if (gap < 1) {
                setCountdownEnded(true);
                clearInterval(interval);
                // do something
            } else {
                setDays(`${format(daysCount)}`);
                setHours(`${format(hoursCount)}`);
                setMinutes(`${format(minutesCount)}`);
                setSeconds(`${format(secondsCount)}`);
            }
        }, 1000);
    };

    function format(t) {
        return t < 10 ? `0${t}` : t;
    }

    useEffect(() => {
        startCountdown();
    }, []);

    return (
        <div className="countdown-section">
            <div className="countdown-container">
                {countdownEnded ? <h2>Sale Has Ended</h2> : <h2>Winter Sale</h2>}
                <div className="countdown">
                    <time className="--flex-center --text-center --color-white --card">
                        <span>
                            <p>{days}</p>
                            <small>Days</small>
                        </span>
                        <span>
                            <p>{hours}</p>
                            <small>Hours</small>
                        </span>
                        <span>
                            <p>{minutes}</p>
                            <small>Minutes</small>
                        </span>
                        <span>
                            <p>{seconds}</p>
                            <small>Seconds</small>
                        </span>
                    </time>
                </div>
            </div>
            <p onClick={handleCloseCountdown} className="close" >X</p>
        </div>
    )
}
