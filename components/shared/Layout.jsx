import CurrentDate from "./CurrentDate";
import Image from "next/image";
import { BiSolidDashboard } from "react-icons/bi";
import { MdPersonSearch } from "react-icons/md";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoMdHelpCircle } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

const Layout = ({ children }) => {
  return (
    <>
      <div class="flex h-screen bg-gray-100 text-black">
        {/* <!-- sidebar --> */}
        <div class="hidden md:flex flex-col w-64 bg-white">
          <div class="flex items-center justify-start px-4 mx-4 h-20">
            <Image
              src={`/users-group-two-rounded_svgrepo.com.svg`}
              width={30}
              height={30}
              alt="logo"
            />
            <span class="font-bold uppercase">Employment</span>
          </div>
          <div class="flex flex-col flex-1 overflow-y-auto">
            <nav class="flex-1 px-2 py-4 bg-white">
              <a
                href="#"
                class="flex items-center justify-start px-4 py-2 text-pinkColor rounded-md py-3 my-4 mx-4 hover:bg-pinkBackground focus:bg-pinkBackground"
              >
                <BiSolidDashboard className="text-2xl" />
                Dashboard
              </a>
              <a
                href="#"
                class="flex items-center justify-start px-4 py-2 text-pinkColor rounded-md py-3 my-4 mx-4 hover:bg-pinkBackground focus:bg-pinkBackground"
              >
                <MdPersonSearch className="text-2xl" />
                Job Seekers
              </a>
              <a
                href="#"
                class="flex items-center justify-start px-4 py-2 text-pinkColor rounded-md py-3 my-4 mx-4 hover:bg-pinkBackground focus:bg-pinkBackground"
              >
                <FaHandshakeSimple className="text-2xl" />
                Sponsors
              </a>
              <hr className="mx-4" />
              <a
                href="#"
                class="flex items-center justify-start px-4 py-2 text-pinkColor rounded-md py-3 my-4 mx-4 hover:bg-pinkBackground focus:bg-pinkBackground"
              >
                <IoMdHelpCircle className="text-2xl" />
                Help
              </a>
            </nav>
            <a
              href="#"
              class="flex items-center justify-start px-4 py-2 text-pinkColor rounded-md py-3 my-4 mx-4 hover:bg-pinkBackground focus:bg-pinkBackground"
            >
              <IoArrowBack className="text-2xl" />
              Logout
            </a>
          </div>
        </div>

        {/* <!-- Main content --> */}
        <div class="flex flex-col flex-1 overflow-y-auto">
          <div class="flex items-center justify-between h-16 bg-white border-b border-gray-200">
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

              <CurrentDate />
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
