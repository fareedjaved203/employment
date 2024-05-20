"use client";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from "recharts";

const CustomBar = (props) => {
  const borderRadius = 8;
  return (
    <Rectangle
      {...props}
      radius={[borderRadius, borderRadius, borderRadius, borderRadius]}
    />
  );
};

const Graph = () => {
  const [data, setData] = useState([
    { name: "JAN", uv: 4000 },
    { name: "FEB", uv: 3000 },
    { name: "MAR", uv: 2000 },
    { name: "APR", uv: 2780 },
    { name: "MAY", uv: 1890 },
    { name: "JUN", uv: 2390 },
    { name: "JUL", uv: 3490 },
    { name: "AUG", uv: 2000 },
    { name: "SEP", uv: 2780 },
    { name: "OCT", uv: 1890 },
    { name: "NOV", uv: 1500 },
    { name: "DEC", uv: 2390 },
  ]);

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="flex flex-col sm:flex-row justify-between p-4 font-mulish">
        <div className="flex flex-col sm:flex-row justify-between w-full">
          <div
            className="pb-1 mr-4 font-mulish"
            style={{ fontSize: "28px", fontWeight: "900" }}
          >
            Earnings
          </div>
        </div>
      </div>

      <div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
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
