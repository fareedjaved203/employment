import Image from "next/image";

const Stats = () => {
  return (
    <div className="mt-4 p-4 font-mulish" style={{ backgroundColor: "white" }}>
      <div className="pb-1" style={{ fontSize: "28px", fontWeight: "900" }}>
        Statistics
      </div>
      <div className="flex flex-col sm:flex-row space-x-2">
        <div
          className="bg-gray-100 rounded-lg flex flex-row items-center m-1 rounded justify-start p-2"
          style={{ backgroundColor: "#D3175233" }}
        >
          <Image
            src="/Frame 44.svg"
            width={40}
            height={40}
            alt="logo icon"
            priority={false}
          />
          <div className="flex flex-col w-[65%] px-2">
            <div className="text-sm" style={{ color: "#333333" }}>
              Max Earnings (month)
            </div>
            <div
              className="text-lg break-words"
              style={{ fontWeight: 400, color: "#00261C" }}
            >
              March
            </div>
          </div>
        </div>
        <div
          className="bg-green-200 rounded-lg flex flex-col sm:flex-row m-1 rounded justify-start items-center p-2"
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
              2000 SAR
            </div>
          </div>
        </div>
        <div
          className="bg-orange-100 rounded-lg flex flex-col sm:flex-row m-1 rounded justify-start items-center p-2"
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
              October
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
