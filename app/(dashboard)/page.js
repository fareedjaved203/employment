import Graph from "@/components/dashboard/Graph";
import Stats from "@/components/dashboard/Stats";
import Summary from "@/components/dashboard/Summary";
import { getJobSeekers } from "@/firebase/jobSeeker";
import { getSponsors } from "@/firebase/sponsor";
import { getUsers } from "@/firebase/user";
import React from "react";

const Dashboard = async () => {
  const jobs = await getJobSeekers();
  const sponsors = await getSponsors();
  const users = await getUsers();

  return (
    <>
      <Summary jobs={jobs} sponsors={sponsors} users={users} />
      <Graph />
      <Stats sponsors={sponsors} />
    </>
  );
};

export default Dashboard;
