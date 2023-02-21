import { toggleState } from "@/app/toggleSlice";
import SettingMenu from "@/layout/SettingMenu";
import SettingProfile from "@/layout/SettingProfile";
import { Button } from "@material-tailwind/react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const Setting = () => {
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
              <div className="mt-16">
                <SettingMenu />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Setting;
