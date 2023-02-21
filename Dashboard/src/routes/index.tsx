import React from "react";
import { RouteObject } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Links from "@/pages/Links";
import QrCodes from "@/pages/QrCodes";
import LinkInBio from "@/pages/LinkInBio";
import Campaigns from "@/pages/Campaigns";
import CustomLinks from "@/pages/CustomLinks";
import Setting from "@/pages/Setting";
import CreateQrCode from "@/pages/CreateQrCode";
import CreateLink from "@/pages/CreateLink";
import SettingProfile from "@/layout/SettingProfile";
import Integrations from "@/layout/Integrations";
import AccountDetails from "@/layout/AccountDetails";
import Groups from "@/layout/Groups";
import Api from "@/layout/API";

const App = React.lazy(() => import("../App"));

const router: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/link",
    element: <Links />,
  },
  {
    path: "/linkinbio",
    element: <LinkInBio />,
  },
  {
    path: "/qrcode",
    element: <QrCodes />,
  },
  {
    path: "/campaigns",
    element: <Campaigns />,
  },
  {
    path: "/customlinks",
    element: <CustomLinks />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
  {
    path: "/qrcode/createqrcode",
    element: <CreateQrCode />,
  },
  {
    path: "/link/createlink",
    element: <CreateLink />,
  },
  {
    path: "/setting/settingprofile",
    element: <SettingProfile />,
  },
  {
    path: "/setting/integration",
    element: <Integrations />,
  },
  {
    path: "/setting/accountdetails",
    element: <AccountDetails />,
  },
  {
    path: "/setting/groups",
    element: <Groups />,
  },
  {
    path: "/setting/api",
    element: <Api />,
  },
];

export default router;
