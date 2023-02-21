import { toggleState } from "@/app/toggleSlice";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const QrCodes = () => {
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
                <Link to="/qrcode/createqrcode">
                  <Button>Create QR Code</Button>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default QrCodes;
