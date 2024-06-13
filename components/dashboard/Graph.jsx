"use client";
import { useState, useEffect } from "react";
import { groupBy, sumBy, map } from "lodash";
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

  const [filter, setFilter] = useState("monthly");

  useEffect(() => {
    let processedData;

    switch (filter) {
      case "weekly":
        // Process data for weekly view
        processedData = processWeeklyData(earnings);
        break;
      case "monthly":
        // Process data for monthly view
        processedData = processMonthlyData(earnings);
        break;
      case "yearly":
        // Process data for yearly view
        processedData = processYearlyData(earnings);
        break;
    }

    setData(processedData);
  }, [earnings, filter]);

  const processWeeklyData = (earnings) => {
    // Group earnings by week of the year
    const grouped = groupBy(earnings, (item) => {
      if (item.date && typeof item.date.toDate === "function") {
        const date = new Date(item.date.toDate());
        const weekOfYear = Math.floor(
          date.getTime() / (1000 * 60 * 60 * 24 * 7)
        );
        return weekOfYear;
      }
      return null;
    });

    // Calculate total earnings for each week
    return map(grouped, (items, week) => ({
      name: `Week ${week}`,
      uv: sumBy(items, "amount"),
    }));
  };

  const processMonthlyData = (earnings) => {
    // Group earnings by month
    const grouped = groupBy(earnings, (item) => {
      if (item.date && typeof item.date.toDate === "function") {
        const date = new Date(item.date.toDate());
        return date.toLocaleString("default", { month: "long" });
      }
      return null;
    });

    // Calculate total earnings for each month
    return map(grouped, (items, month) => ({
      name: month,
      uv: sumBy(items, "amount"),
    }));
  };

  const processYearlyData = (earnings) => {
    // Group earnings by year
    const grouped = groupBy(earnings, (item) => {
      if (item.date && typeof item.date.toDate === "function") {
        const date = new Date(item.date.toDate());
        return date.getFullYear();
      }
      return null;
    });

    // Calculate total earnings for each year
    return map(grouped, (items, year) => ({
      name: year,
      uv: sumBy(items, "amount"),
    }));
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
              domain={[0, 4000]}
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

            <Tooltip />
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
