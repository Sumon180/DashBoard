import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routes";
import { Loading } from "@page";
import { Store } from "./app/Store";
import { Provider } from "react-redux";
import "@css/style.css";
const routes = createBrowserRouter(router);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <>
          <Loading />
        </>
      }
    >
      <Provider store={Store}>
        <RouterProvider router={routes} />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
