import React from "react";

import { RouterProvider } from "react-router-dom";

import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import { createRoot } from "react-dom/client";

import routers from "./routers";
import "./styles/global.scss";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={routers} />
    </ConfigProvider>
  </React.StrictMode>,
);
