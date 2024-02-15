import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function MaintenancePage() {
  const [timeLeft, setTimeLeft] = useState(360000); // Time left in seconds (1 hour)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Under Maintenance
        </h1>
        <p className="text-lg mb-8">
          We are currently undergoing maintenance. Please check back soon.
        </p>
        <div className="flex items-center justify-center mb-8">
          <CountdownCircleTimer
            isPlaying
            duration={timeLeft}
            colors={[["#EF4444"]]}
            size={120}
            strokeWidth={10}
            onComplete={() => console.log("Timer completed")}
          >
            {({ remainingTime }) => formatTime(remainingTime)}
          </CountdownCircleTimer>
        </div>
        <p className="text-lg">Estimated Time Remaining</p>
      </div>
    </div>
  );
}

export default MaintenancePage;
