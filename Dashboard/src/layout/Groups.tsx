import { toggleState } from "@/app/toggleSlice";
import SideNav from "@/pages/SideNav";
import TopNav from "@/pages/TopNav";
import { Button } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SettingMenu from "./SettingMenu";

const Groups = () => {
  const toggle = useSelector(toggleState);

  return (
    <>
      <div>
        <SideNav />
        <TopNav />
        <div className="">
          <main
            className={`${
              toggle
                ? " ml-[70px] transition-all duration-300"
                : " ml-[250px] transition-all duration-300"
            }`}
          >
            <div className="flex items-center">
              <div className="mt-16 w-full">
                <div className="flex w-full">
                  <SettingMenu />
                  <div className=" ml-[19rem] mt-10 w-full mr-10">
                    <div className="flex items-center justify-between">
                      <h2 className=" text-3xl font-bold mb-5">Groups</h2>
                      <Button
                        disabled
                        className=" cursor-not-allowed rounded mt-4"
                      >
                        Save Change
                      </Button>
                    </div>
                    <p className=" text-normal mb-4">Using 1 of 1 groups</p>
                    <table className="w-full text-start mt-5">
                      <thead className="border-b border-green-200">
                        <tr>
                          <th className=" text-start">Name</th>
                          <th className=" text-start">Created</th>
                          <th className=" text-start">Last Modified</th>
                        </tr>
                      </thead>
                      <tbody className="border-b border-green-200">
                        <tr>
                          <td className="py-2">o_sb33ed6oi</td>
                          <td>Feb 13, 2023, 4:00 PM GMT+6</td>
                          <td>Feb 13, 2023, 4:00 PM GMT+6</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Groups;
