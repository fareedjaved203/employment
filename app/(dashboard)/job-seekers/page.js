"use client";
import { Payment, columns } from "./columns";
import DataTable from "./data-table";

// Fetch data from your API here.
const data = [
  {
    PID: 1,
    Name: "John Doe",
    Ph_no_Watsapp: "1234567890",
    Nationality: "USA",
    Place_of_Residence: "New York",
    NOTTP: "Some Value",
  },
  {
    PID: 2,
    Name: "Jane Smith",
    Ph_no_Watsapp: "9876543210",
    Nationality: "Canada",
    Place_of_Residence: "Toronto",
    NOTTP: "Another Value",
  },
  // Add more objects as needed
];

for (let i = 0; i < 10; i++) {
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

function DemoPage() {
  return (
    <div
      className="container mx-auto py-7 rounded-xl pl-6"
      style={{ backgroundColor: "white" }}
    >
      <div
        className="pb-8 font-mulish"
        style={{ fontSize: "28px", fontWeight: "900" }}
      >
        Job Seekers
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default DemoPage;
