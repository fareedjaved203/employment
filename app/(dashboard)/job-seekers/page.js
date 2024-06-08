import { getJobSeekers } from "@/firebase/jobSeeker";
import { Payment, columns } from "./columns";
import DataTable from "@/components/shared/DataTable";

const jobSeekers = async (pageNo = 1) => {
  const jobs = await getJobSeekers();
  const limit = 10;
  const startIndex = (pageNo - 1) * limit;
  const endIndex = startIndex + limit;
  const slicedData = jobs.slice(startIndex, endIndex);
  const totalPages = Math.ceil(jobs.length / limit);

  return {
    data: slicedData,
    pagination: {
      pageNo,
      limit,
      totalPages,
      totalRecords: jobs.length,
    },
  };
};

async function JobSeekersPage({ searchParams }) {
  const { page } = searchParams;
  const { data, pagination } = await jobSeekers(page);
  return (
    <div
      className="container mx-auto py-7 rounded-xl pl-6 mb-4"
      style={{ backgroundColor: "white" }}
    >
      <div
        className="pb-8 font-mulish"
        style={{ fontSize: "28px", fontWeight: "900" }}
      >
        Job Seekers
      </div>
      <DataTable
        columns={columns}
        data={data}
        pagination={pagination}
        title={"Total Job Seekers"}
      />
    </div>
  );
}

export default JobSeekersPage;
