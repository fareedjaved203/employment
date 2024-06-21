import Image from "next/image";

const Stats = ({ sponsors, earnings }) => {
  const firestoreTimestampToDate = (timestamp) => {
    const seconds = timestamp.seconds;
    const nanoseconds = timestamp.nanoseconds;
    return new Date(seconds * 1000 + nanoseconds / 1000000);
  };

  const getMonthName = (timestamp) => {
    const date = firestoreTimestampToDate(timestamp);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthNumber = date.getMonth();
    return monthNames[monthNumber];
  };

  const getYear = (timestamp) => {
    const date = firestoreTimestampToDate(timestamp);
    return date.getFullYear();
  };

  let months = [];
  earnings.forEach((item) => {
    const monthIndex = months.findIndex(
      (existingMonth) =>
        existingMonth.month === getMonthName(item.date) &&
        existingMonth.year === getYear(item.date)
    );
    if (monthIndex !== -1) {
      months[monthIndex].amount += item.amount;
    } else {
      months.push({
        month: getMonthName(item.date),
        year: getYear(item.date),
        amount: item.amount,
      });
    }
  });

  const maxEarning = months.reduce(
    (max, obj) => (obj.amount > max.amount ? obj : max),
    months[0]
  );

  const minEarning = months.reduce((max, item) => {
    return item.amount < max.amount ? item : max;
  }, months[0]);

  return (
    <div
      className="mt-4 p-4 font-mulish text-center sm:text-start"
      style={{ backgroundColor: "white" }}
    >
      <div
        className="pb-1 pl-1"
        style={{ fontSize: "28px", fontWeight: "900" }}
      >
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
            <div
              className="text-sm whitespace-nowrap"
              style={{ color: "#333333" }}
            >
              Max Earnings (month)
            </div>

            <div
              className="text-lg break-words"
              style={{ fontWeight: 400, color: "#00261C" }}
            >
              {maxEarning.month} {maxEarning.year}
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
              {(
                earnings.reduce((acc, earning) => acc + earning.amount, 0) /
                earnings.length
              ).toFixed(2)}{" "}
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
              {minEarning.month} {minEarning.year}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
