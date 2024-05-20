import Graph from "@/components/dashboard/Graph";
import Stats from "@/components/dashboard/Stats";
import Summary from "@/components/dashboard/Summary";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <Summary />
      <Graph />
      <Stats />
    </>
  );
};

export default Dashboard;
