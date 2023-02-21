import { toggleState } from "@/app/toggleSlice";
import { Button } from "@material-tailwind/react";

import { useSelector } from "react-redux";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const CustomLinks = () => {
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
              <div className="mt-24">
                <Button>Custom Links</Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default CustomLinks;
