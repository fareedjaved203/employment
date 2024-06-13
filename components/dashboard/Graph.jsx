"use client";
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from "recharts";
import MyDropdownMenu from "../shared/DropDown";

const CustomBar = (props) => {
  const borderRadius = 8;
  return (
    <Rectangle
      {...props}
      radius={[borderRadius, borderRadius, borderRadius, borderRadius]}
    />
  );
};

const Graph = ({ earnings }) => {
  const [data, setData] = useState([]);
  const [maxValue, setMaxValue] = useState(0);

  const [filter, setFilter] = useState("monthly");

  useEffect(() => {
    let processedData;

    switch (filter) {
      case "weekly":
        processedData = processWeeklyData(earnings);
        break;
      case "monthly":
        processedData = processMonthlyData(earnings);
        break;
      case "yearly":
        processedData = processYearlyData(earnings);
        break;
    }

    setData(processedData);
  }, [earnings, filter]);

  const firestoreTimestampToDate = (timestamp) => {
    const seconds = timestamp.seconds;
    const nanoseconds = timestamp.nanoseconds;
    return new Date(seconds * 1000 + nanoseconds / 1000000);
  };

  const getMonthName = (timestamp) => {
    const date = firestoreTimestampToDate(timestamp);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthNumber = date.getMonth();
    return monthNames[monthNumber];
  };

  const getDayOfWeek = (timestamp) => {
    const date = firestoreTimestampToDate(timestamp);
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = date.getDay(); // Returns a number (0-6) representing the day of the week
    return dayNames[dayOfWeek];
  };

  const getYear = (timestamp) => {
    const date = firestoreTimestampToDate(timestamp);
    return date.getFullYear();
  };

  const processWeeklyData = (earnings) => {
    let days = [];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    dayNames.forEach((dayName) => {
      days.push({ name: dayName, uv: 0 });
    });

    earnings.forEach((earning) => {
      const dayOfWeek = getDayOfWeek(earning.date);
      const dayIndex = days.findIndex((day) => day.name === dayOfWeek);
      if (dayIndex !== -1) {
        days[dayIndex].uv += earning.amount;
      }
    });

    const uvValues = days.map((day) => day.uv);
    const maxUV = Math.max(...uvValues);
    setMaxValue(maxUV);

    return days;
  };

  const processMonthlyData = (earnings) => {
    let months = [];

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    monthNames.forEach((monthName) => {
      months.push({ name: monthName, uv: 0 });
    });

    earnings.forEach((earning) => {
      const dayOfWeek = getMonthName(earning.date);
      const dayIndex = months.findIndex((day) => day.name === dayOfWeek);
      if (dayIndex !== -1) {
        months[dayIndex].uv += earning.amount;
      }
    });

    const uvValues = months.map((day) => day.uv);
    const maxUV = Math.max(...uvValues);
    setMaxValue(maxUV);

    return months;
  };

  const processYearlyData = (earnings) => {
    let years = [];
    earnings.forEach((earning) => {
      const dayOfWeek = getYear(earning.date);
      const existingDayIndex = years.findIndex((day) => day.name === dayOfWeek);
      if (existingDayIndex !== -1) {
        years[existingDayIndex].uv += earning.amount;
      } else {
        years.push({ name: dayOfWeek, uv: earning.amount });
      }
    });

    const uvValues = years.map((day) => day.uv);
    const maxUV = Math.max(...uvValues);
    setMaxValue(maxUV);

    return years;
  };

  return (
    <div style={{ backgroundColor: "white" }} className="p-0 sm:p-4">
      <div className="flex flex-col sm:flex-row justify-between p-4 font-mulish">
        <div className="flex flex-col sm:flex-row justify-between w-full">
          <div className="flex justify-center items-center">
            <div
              className="pb-1 mr-4 font-mulish"
              style={{ fontSize: "28px", fontWeight: "900" }}
            >
              Earnings
            </div>
            <div>
              <MyDropdownMenu setFilter={setFilter} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "black" }}
              padding={{ left: 0, right: 0 }}
            />
            <YAxis
              type="number"
              domain={[0, maxValue + 500]}
              axisLine={false}
              tickFormatter={(tick) => {
                if (tick === 0) return "0";
                if (tick < 1000) return tick && tick?.toString();
                return `${Math.floor(tick / 1000)}k`;
              }}
              tickLine={false}
              tick={{ fill: "black" }}
              padding={{ top: 10, bottom: 10 }}
            />

            <Tooltip formatter={(value) => [`Amount: ${value}`]} />
            <Bar
              dataKey="uv"
              fill="#D31752"
              barSize={12}
              shape={<CustomBar />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graph;
