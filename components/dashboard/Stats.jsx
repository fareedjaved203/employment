import Image from "next/image";

const Stats = ({ sponsors, earnings }) => {
  earnings.forEach((item) => {
    if (item.date.toDate) {
      // Convert Firebase Timestamp to Unix timestamp
      item.date = item.date.toDate().getTime();
      item.month = new Date(item.date).toLocaleString("default", {
        month: "long",
      });
    }
  });

  const maxEarning = earnings.reduce((prev, current) => {
    return prev.amount > current.amount ? prev : current;
  }).month;

  const minEarning = earnings.reduce((prev, current) => {
    return prev.amount < current.amount ? prev : current;
  }).month;

  console.log("max: ", maxEarning);
  console.log("min: ", minEarning);

  return (
    <div
      className="mt-4 p-4 font-mulish text-center sm:text-start"
      style={{ backgroundColor: "white" }}
    >
      <div className="pb-1" style={{ fontSize: "28px", fontWeight: "900" }}>
        Statistics
      </div>
      <div className="flex flex-col sm:flex-row space-x-2 w-[100%] md:w-[60vw]">
        <div
          className="md:w-[50%] bg-gray-100 rounded-lg flex flex-col sm:flex-row items-center m-1 rounded justify-start p-2"
          style={{ backgroundColor: "#D3175233" }}
        >
          <Image
            src="/Frame 44.svg"
            width={40}
            height={40}
            alt="logo icon"
            className="mx-2 my-4 sm:my-0"
          />
          <div className="flex flex-col w-[65%] px-2">
            <div className="text-sm" style={{ color: "#333333" }}>
              Max Earnings (month)
            </div>

            <div
              className="text-lg break-words"
              style={{ fontWeight: 400, color: "#00261C" }}
            >
              {maxEarning}
            </div>
          </div>
        </div>
        <div
          className="md:w-[50%] bg-green-200 rounded-lg flex flex-col sm:flex-row m-1 rounded justify-start items-center p-2 sm:pr-4"
          style={{ backgroundColor: "#00DEA333" }}
        >
          <Image
            src="/Frame 44 (1).svg"
            width={70}
            height={70}
            alt="logo icon"
            className="mt-1"
            priority={false}
          />
          <div className="flex flex-col">
            <div className="text-sm" style={{ color: "#333333" }}>
              Average Earnings
            </div>
            <div
              className="text-lg leading-6 tracking-wider"
              style={{ fontWeight: 400, color: "#00261C" }}
            >
              {earnings.reduce((acc, earning) => acc + earning.amount, 0) /
                earnings.length}{" "}
              SAR
            </div>
          </div>
        </div>
        <div
          className="md:w-[50%] bg-orange-100 rounded-lg flex flex-col sm:flex-row m-1 rounded justify-start items-center p-2"
          style={{ backgroundColor: "#FFEBD4" }}
        >
          <Image
            src="/Frame 44 (2).svg"
            width={70}
            height={70}
            alt="logo icon"
            className="mt-1"
            priority={false}
          />
          <div className="flex flex-col">
            <div className="text-sm" style={{ color: "#333333" }}>
              Lowest Earning (month)
            </div>
            <div
              className="text-lg leading-6 tracking-wider"
              style={{ fontWeight: 400, color: "#00261C" }}
            >
              {minEarning}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
