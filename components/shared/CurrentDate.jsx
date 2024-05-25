"use client";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const CurrentDate = () => {
  const [currentTime, setCurrentTime] = useState(
    format(new Date(), "h:mm aa d MMM yyyy")
  );

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date();
      const formattedTime = now
        .toLocaleTimeString([], {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
        .slice(0, 5);
      const meridian = now.getHours() >= 12 ? "PM" : "AM";
      const formattedDate = now.toLocaleDateString("en-UK", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });

      setCurrentTime(`${formattedTime} ${meridian} ${formattedDate}`);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <>
      <div className="flex flex-col text-black">
        <div className="font-bold text-lg">Fareed</div>
        <div
          className="font-poppins"
          style={{ color: "#707EAE", fontSize: "11px" }}
        >
          {currentTime}
        </div>
      </div>
    </>
  );
};

export default CurrentDate;
