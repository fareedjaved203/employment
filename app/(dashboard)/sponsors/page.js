import { Payment, columns } from "./columns";
import DataTable from "@/components/shared/DataTable";

// Fetch data from your API here.
const data = [];

for (let i = 0; i < 60; i++) {
  const newObject = {
    PID: data.length + 1,
    Name: "New Person " + (i + 1),
    Ph_no_Watsapp: "New Phone Number " + (i + 1),
    People_Hired: "New Nationality " + (i + 1),
    Commision_Paid: "Commision Paid " + (i + 1),
  };
  data.push(newObject);
}

const sponsors = async (pageNo = 1) => {
  const limit = 10;
  const startIndex = (pageNo - 1) * limit;
  const endIndex = startIndex + limit;
  const slicedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / limit);

  return {
    data: slicedData,
    pagination: {
      pageNo,
      limit,
      totalPages,
      totalRecords: data.length,
    },
  };
};

async function SponsorsPage({ searchParams }) {
  console.log(searchParams);
  const { page } = searchParams;
  const { data, pagination } = await sponsors(page);
  console.log("pagination:", pagination);
  return (
    <div
      className="container mx-auto py-7 rounded-xl pl-6 mb-4"
      style={{ backgroundColor: "white" }}
    >
      <div
        className="pb-8 font-mulish"
        style={{ fontSize: "28px", fontWeight: "900" }}
      >
        Sponsors
      </div>
      <DataTable
        columns={columns}
        data={data}
        pagination={pagination}
        title={"Total Sponsors"}
      />
    </div>
  );
}

export default SponsorsPage;
