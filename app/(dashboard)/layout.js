import CurrentDate from "@/components/shared/CurrentDate";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import HamBurgerMenu from "@/components/shared/HamBurgerMenu";
import Sidebar from "@/components/dashboard/SidebarItems";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex h-[100vh] font-mulish ">
        {/* <!-- sidebar --> */}
        <div className="hidden md:flex flex-col w-64 bg-white text-sm md:fixed z-10 h-full">
          <div className="flex items-center justify-start px-4 mx-4 h-20 mt-10">
            <Image
              src={`/users-group-two-rounded_svgrepo.com.svg`}
              width={30}
              height={30}
              alt="logo"
              className="ml-1"
            />
            <span
              className="font-bold ml-2 text-black"
              style={{ fontSize: "21px" }}
            >
              Employment
            </span>
          </div>
          <div
            className="flex flex-col flex-1 overflow-y-auto justify-between h-full"
            style={{ fontSize: "15px" }}
          >
            <Sidebar />
            <Link
              href="/auth/login"
              className="flex items-center justify-start font-bold px-4 py-2 text-pinkColor my-6 rounded-md py-3 mx-4 ml-7 hover:bg-pinkBackground hover:text-pinkColor focus:bg-pinkBackground focus:text-pinkColor"
            >
              <IoArrowBack className="mr-3 " />
              Logout
            </Link>
          </div>
        </div>

        {/* <!-- Main content --> */}
        <div className="flex flex-col flex-1 max-w-full ">
          <div className="flex items-center justify-between h-16 bg-white">
            <div className="flex items-center px-4">
              <HamBurgerMenu />
              <span className="hidden md:block md:ml-64">
                <CurrentDate />
              </span>
            </div>
            <div className="flex items-center pr-4 text-black">
              <span
                className="mr-4"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  paddingRight: "5px",
                }}
              >
                Fareed Javed
              </span>
              <Image
                src={"/Rectangle 338.svg"}
                width={65}
                height={65}
                alt="logo icon"
                className="w-12 h-12 rounded-lg p-1"
                priority={false}
              />
            </div>
          </div>
          <div className="p-4 pb-0 content-body md:ml-64">{children}</div>
        </div>
      </div>
      ;
    </>
  );
};

export default Layout;
