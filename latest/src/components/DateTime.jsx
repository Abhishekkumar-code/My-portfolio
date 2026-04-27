import React, { useEffect, useState } from 'react';

const DateTime = () => {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "aug", "Sep", "Oct", "Nov", "Dec"];

      const day = days[now.getDay()];
      const month = months[now.getMonth()];
      const date = now.getDate();

      let hours = now.getHours();
      let minutes = now.getMinutes();

      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12; // 0 ko 12 bana dega
      minutes = minutes < 10 ? "0" + minutes : minutes;

      const formatted = `${day} ${month} ${date} ${hours}:${minutes} ${ampm}`;

      setDateTime(formatted);
    };

    updateTime(); // initial call
    const interval = setInterval(updateTime, 1000); // har second update

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {dateTime}
    </div>
  );
};

export default DateTime;