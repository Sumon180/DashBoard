import { toggleState } from "@/app/toggleSlice";
import SideNav from "@/pages/SideNav";
import TopNav from "@/pages/TopNav";
import { useSelector } from "react-redux";
import SettingMenu from "./SettingMenu";

const AccountDetails = () => {
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
                    <div className="border-b border-blue-gray-100">
                      <h2 className=" text-3xl font-bold mb-5">
                        Accounts Details
                      </h2>
                    </div>

                    <div className="flex mt-4">
                      <h1 className="flex items-center justify-center w-56 h-24 mr-6 bg-blue-gray-100 rounded-md text-2xl font-bold mb-4">
                        FREE ACCOUNT
                      </h1>
                      <p className=" text-normal mb-4">
                        <span className=" font-semibold mb-5">
                          You have all of these Free features:
                        </span>
                        <br /> <span>50 Links</span>
                        <br /> 1 User
                      </p>
                    </div>
                    <table className="w-full text-start mt-5">
                      <thead className="border-b border-green-200">
                        <tr>
                          <th className="text-start">Account name</th>
                        </tr>
                      </thead>
                      <tbody className="border-b border-green-200">
                        <tr>
                          <td className="py-2">o_sb33ed6oi</td>
                          <td>Member since Feb 13</td>
                          <td>Edit Name</td>
                        </tr>
                      </tbody>
                    </table>

                    <h3 className="mt-10 mb-2 font-bold">
                      Account notifications
                    </h3>
                    <p>
                      Select which verified email address you would like to use
                      to receive notifications for your accounts.
                    </p>
                    <table className="w-full text-start mt-5">
                      <thead className="border-b border-green-200">
                        <tr></tr>
                      </thead>
                      <tbody className="border-b border-green-200">
                        <tr>
                          <td className="py-2">sumonengr.96@gmail.com</td>
                          <td>Change Notification Ema</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="w-full text-start mt-8">
                      <thead className="border-b border-green-200">
                        <tr>
                          <th className=" text-start">Monthly usage</th>
                        </tr>
                      </thead>
                      <tbody className="border-b border-green-200">
                        <tr className="border-b border-green-200">
                          <td className="py-2">Short links</td>
                          <td className="flex items-center gap-2">
                            <div className="w-96 h-2 bg-blue-gray-200"></div>
                            0/50
                          </td>
                          <td>Need more?</td>
                        </tr>
                        <tr className="border-b border-green-200">
                          <td className="py-2">Custom back-halves</td>
                          <td className="flex items-center gap-2">
                            <div className="w-96 h-2 bg-blue-gray-200 "></div>
                            0/50
                          </td>
                          <td>Need more?</td>
                        </tr>
                        <tr className="border-b border-green-200">
                          <td className="py-2">Bit.ly link redirects</td>
                          <td className="flex items-center gap-2">
                            <div className="w-96 h-2 bg-blue-gray-200 "></div>
                            0/50
                          </td>
                          <td>Need more?</td>
                        </tr>
                        <tr className="border-b border-green-200">
                          <td className="py-2">Custom link redirects</td>
                          <td className="flex items-center gap-2">
                            <div className="w-96 h-2 bg-blue-gray-200 "></div>
                            0/50
                          </td>
                          <td>Need more?</td>
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

export default AccountDetails;
