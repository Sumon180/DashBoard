import SideNav from "./pages/SideNav";
import { Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { toggleState } from "./app/toggleSlice";
import TopNav from "./pages/TopNav";

function App() {
  const toggle = useSelector(toggleState);

  return (
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
          <div className="flex items-center mx-5">
            <div className="mt-24">
              <Button>Home</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
