import { Payment, columns } from "./columns";
import DataTable from "@/components/shared/DataTable";

// Fetch data from your API here.
const data = [
  {
    PID: 3,
    Name: "Alice Johnson",
    Ph_no_Watsapp: "4567890123",
    Nationality: "UK",
    Place_of_Residence: "London",
    NOTTP: "Different Value",
  },
  {
    PID: 4,
    Name: "Michael Chang",
    Ph_no_Watsapp: "2345678901",
    Nationality: "Australia",
    Place_of_Residence: "Sydney",
    NOTTP: "Unique Value",
  },
  {
    PID: 5,
    Name: "Maria Garcia",
    Ph_no_Watsapp: "8765432109",
    Nationality: "Spain",
    Place_of_Residence: "Madrid",
    NOTTP: "Random Value",
  },
  {
    PID: 6,
    Name: "Mohammed Ali",
    Ph_no_Watsapp: "7890123456",
    Nationality: "Egypt",
    Place_of_Residence: "Cairo",
    NOTTP: "New Value",
  },
  {
    PID: 7,
    Name: "Sophie Leblanc",
    Ph_no_Watsapp: "3210987654",
    Nationality: "France",
    Place_of_Residence: "Paris",
    NOTTP: "Fresh Value",
  },
  {
    PID: 8,
    Name: "Andrea Rossi",
    Ph_no_Watsapp: "9012345678",
    Nationality: "Italy",
    Place_of_Residence: "Rome",
    NOTTP: "Updated Value",
  },
  {
    PID: 9,
    Name: "Liu Wei",
    Ph_no_Watsapp: "5432109876",
    Nationality: "China",
    Place_of_Residence: "Beijing",
    NOTTP: "Changed Value",
  },
  {
    PID: 10,
    Name: "Javier Fernandez",
    Ph_no_Watsapp: "6789012345",
    Nationality: "Mexico",
    Place_of_Residence: "Mexico City",
    NOTTP: "Altered Value",
  },
  {
    PID: 11,
    Name: "Anna Nowak",
    Ph_no_Watsapp: "8901234567",
    Nationality: "Poland",
    Place_of_Residence: "Warsaw",
    NOTTP: "Modified Value",
  },
  {
    PID: 12,
    Name: "Hiroshi Tanaka",
    Ph_no_Watsapp: "2109876543",
    Nationality: "Japan",
    Place_of_Residence: "Tokyo",
    NOTTP: "Revised Value",
  },
  // Add more objects as needed
];

for (let i = 0; i < 60; i++) {
  const newObject = {
    PID: data.length + 1,
    Name: "New Person " + (i + 1),
    Ph_no_Watsapp: "New Phone Number " + (i + 1),
    Nationality: "New Nationality " + (i + 1),
    Place_of_Residence: "New Place of Residence " + (i + 1),
    NOTTP: "New Value " + (i + 1),
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
