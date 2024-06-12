import Image from "next/image";

const Summary = async ({ jobs, sponsors, users }) => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full font-mulish my-4">
        <div
          className="flex-1 w-full p-3 rounded-lg flex flex-col items-start bg-white"
          style={{ backgroundColor: "white" }}
        >
          <div
            className=" text-summaryTextColor mb-1 pb-1"
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#A1A0BD",
            }}
          >
            Total Earnings
          </div>
          <div
            className="text-2xl font-bold pb-2 mb-2 font-mulish"
            style={{ fontSize: "32px", fontWeight: 900 }}
          >
            {sponsors.reduce((acc, sponsor) => acc + sponsor.commission, 0)}

            <span className="text-pinkColor"> SAR</span>
          </div>
          <div>
            <Image
              src="/Frame 55.svg"
              width={40}
              height={40}
              alt="logo icon"
              className="mr-2"
              priority={false}
            />
          </div>
        </div>
        <div
          className="flex-1 w-full p-3 rounded-lg flex flex-col items-start bg-white"
          style={{ backgroundColor: "white" }}
        >
          <div
            className=" text-summaryTextColor mb-1 pb-1"
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#A1A0BD",
            }}
          >
            Total Job Seekers
          </div>
          <div
            className="text-2xl font-bold pb-2 font-mulish mb-2"
            style={{ fontSize: "32px", fontWeight: 900 }}
          >
            {jobs.length}
          </div>
          <div>
            <Image
              src="/Frame 56.svg"
              width={40}
              height={40}
              alt="logo icon"
              className="mr-2"
              priority={false}
            />
          </div>
        </div>
        <div
          className="flex-1 w-full p-3 rounded-lg flex flex-col items-start bg-white"
          style={{ backgroundColor: "white" }}
        >
          <div
            className=" text-summaryTextColor mb-1 pb-1"
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#A1A0BD",
            }}
          >
            Total Sponsors
          </div>
          <div
            className="text-2xl font-bold pb-2 font-mulish mb-2"
            style={{ fontSize: "32px", fontWeight: 900 }}
          >
            {sponsors.length}
          </div>
          <div>
            {" "}
            <Image
              src="/Frame 57.svg"
              width={40}
              height={40}
              alt="logo icon"
              className="mr-2"
              priority={false}
            />
          </div>
        </div>
        <div
          className="flex-1 w-full p-3 rounded-lg flex flex-col items-start bg-white "
          style={{ backgroundColor: "white" }}
        >
          <div
            className=" text-summaryTextColor mb-1 pb-1"
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#A1A0BD",
            }}
          >
            Total Users
          </div>
          <div
            className="text-2xl font-bold pb-2 font-mulish mb-2"
            style={{ fontSize: "32px", fontWeight: 900 }}
          >
            {users.length}
          </div>
          <div>
            {" "}
            <Image
              src="/Frame 58.svg"
              width={40}
              height={40}
              alt="logo icon"
              className="mr-2"
              priority={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
