import Graph from "@/components/dashboard/Graph";
import Stats from "@/components/dashboard/Stats";
import Summary from "@/components/dashboard/Summary";
import { getEarnings } from "@/firebase/earnings";
import { getJobSeekers } from "@/firebase/jobSeeker";
import { getSponsors } from "@/firebase/sponsor";
import { getUsers } from "@/firebase/user";
import React from "react";

const Dashboard = async () => {
  const jobs = await getJobSeekers();
  const sponsors = await getSponsors();
  const users = await getUsers();
  const earnings = await getEarnings();

  return (
    <>
      <Summary
        jobs={jobs}
        sponsors={sponsors}
        users={users}
        earnings={earnings}
      />
      <Graph earnings={earnings} />
      <Stats sponsors={sponsors} earnings={earnings} />
    </>
  );
};

export default Dashboard;
