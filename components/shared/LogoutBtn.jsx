"use client";
import React from "react";
import { doSignOut } from "@/firebase/auth";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import { deleteUser } from "@/app/actions/cookies";

const LogoutBtn = () => {
  const router = useRouter();
  const logout = async () => {
    await doSignOut();
    await deleteUser();
    router.push("/auth/login");
  };
  return (
    <div
      onClick={logout}
      className="flex items-center justify-start cursor-pointer font-bold px-4 py-2 text-pinkColor my-6 rounded-md py-3 mx-4 ml-7 hover:bg-pinkBackground hover:text-pinkColor focus:bg-pinkBackground focus:text-pinkColor"
    >
      <IoArrowBack className="mr-3 " />
      Logout
    </div>
  );
};

export default LogoutBtn;
