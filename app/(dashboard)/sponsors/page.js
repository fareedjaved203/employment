import { getSponsors } from "@/firebase/sponsor";
import { columns } from "./columns";
import DataTable from "@/components/shared/DataTable";

const sponsors = async (pageNo = 1) => {
  const sponsor = await getSponsors();
  const limit = 10;
  const startIndex = (pageNo - 1) * limit;
  const endIndex = startIndex + limit;
  const slicedData = sponsor.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sponsor.length / limit);

  return {
    data: slicedData,
    pagination: {
      pageNo,
      limit,
      totalPages,
      totalRecords: sponsor.length,
    },
  };
};

async function SponsorsPage({ searchParams }) {
  const { page } = searchParams;
  const { data, pagination } = await sponsors(page);
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
