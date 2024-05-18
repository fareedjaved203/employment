import CurrentDate from "@/components/shared/CurrentDate";
import Image from "next/image";
import { BiSolidDashboard } from "react-icons/bi";
import { MdPersonSearch } from "react-icons/md";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoMdHelpCircle } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <div class="flex h-screen bg-gray-100 font-noto-sans-arabic">
        {/* <!-- sidebar --> */}
        <div class="hidden md:flex flex-col w-64 bg-white">
          <div class="flex items-center justify-start px-4 mx-4 h-20 mt-10">
            <Image
              src={`/users-group-two-rounded_svgrepo.com.svg`}
              width={30}
              height={30}
              alt="logo"
              className="ml-1"
            />
            <span class="font-bold uppercase ml-2 text-black">Employment</span>
          </div>
          <div class="flex flex-col flex-1 overflow-y-auto">
            <nav class="flex-1 px-2 py-4 bg-white">
              <Link
                href="/"
                class="flex items-center justify-start px-4 py-2 text-lightGray rounded-md py-3 my-4 mx-4 hover:bg-pinkBackground hover:text-pinkColor focus:bg-pinkBackground focus:text-pinkColor"
              >
                <BiSolidDashboard className="text-2xl mr-3" />
                Dashboard
              </Link>
              <Link
                href="/job-seekers"
                class="flex items-center justify-start px-4 py-2 text-lightGray rounded-md py-3 my-4 mx-4 hover:bg-pinkBackground hover:text-pinkColor focus:bg-pinkBackground focus:text-pinkColor"
              >
                <MdPersonSearch className="text-2xl mr-3" />
                Job Seekers
              </Link>
              <Link
                href="/sponsors"
                class="flex items-center justify-start px-4 py-2 text-lightGray rounded-md py-3 my-4 mx-4 hover:bg-pinkBackground hover:text-pinkColor focus:bg-pinkBackground focus:text-pinkColor"
              >
                <FaHandshakeSimple className="text-2xl mr-3" />
                Sponsors
              </Link>
              <hr className="mx-4" />
              <Link
                href="/"
                class="flex items-center justify-start px-4 py-2 text-lightGray rounded-md py-3 my-4 mx-4 hover:bg-pinkBackground hover:text-pinkColor focus:bg-pinkBackground focus:text-pinkColor"
              >
                <IoMdHelpCircle className="text-2xl mr-3" />
                Help
              </Link>
            </nav>
            <Link
              href="/auth/login"
              class="flex items-center justify-start px-4 py-2 text-pinkColor rounded-md py-3 my-4 mx-4 ml-7 hover:bg-pinkBackground hover:text-pinkColor focus:bg-pinkBackground focus:text-pinkColor"
            >
              <IoArrowBack className="mr-3 " />
              Logout
            </Link>
          </div>
        </div>

        {/* <!-- Main content --> */}
        <div class="flex flex-col flex-1 overflow-y-auto">
          <div class="flex items-center justify-between h-16 bg-white">
            <div class="flex items-center px-4">
              <button class="md:hidden text-gray-500 focus:outline-none focus:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              <span className="hidden md:block">
                <CurrentDate />
              </span>
            </div>
            <div class="flex items-center pr-4 text-black">
              <span
                className="mr-4 font-poppins"
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
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
          <div class="p-4">{children}</div>
        </div>
      </div>
      ;
    </>
  );
};

export default Layout;
