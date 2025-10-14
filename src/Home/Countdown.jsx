import React, { useEffect, useState } from 'react';

const Countdown = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const eventTime = new Date(eventDate).getTime();
    const currentTime = new Date().getTime();
    const difference = eventTime - currentTime;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="text-center bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
      <h3 className="text-3xl font-semibold mb-4">Time Until Event:</h3>
      <div className="flex justify-center text-lg">
        <div className="mr-6">
          <span className="text-4xl font-bold">{timeLeft.days}</span>
          <div>Days</div>
        </div>
        <div className="mr-6">
          <span className="text-4xl font-bold">{timeLeft.hours}</span>
          <div>Hours</div>
        </div>
        <div className="mr-6">
          <span className="text-4xl font-bold">{timeLeft.minutes}</span>
          <div>Minutes</div>
        </div>
        <div>
          <span className="text-4xl font-bold">{timeLeft.seconds}</span>
          <div>Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
