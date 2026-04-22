import React from "react";

import { RouterProvider } from "react-router-dom";

import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import { createRoot } from "react-dom/client";
import { qiankunWindow, renderWithQiankun } from "vite-plugin-qiankun/dist/helper";

import routers from "./routers";
import "./styles/global.scss";

let root: ReturnType<typeof createRoot> | null = null;

const render = (container?: Element | DocumentFragment): void => {
  const mountContainer = container ? (container.querySelector("#root") as HTMLElement | null) : document.getElementById("root");
  if (!mountContainer) {
    return;
  }

  root = createRoot(mountContainer);
  root.render(
    <React.StrictMode>
      <ConfigProvider locale={zhCN}>
        <RouterProvider router={routers} />
      </ConfigProvider>
    </React.StrictMode>,
  );
};

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}

renderWithQiankun({
  async bootstrap() {
    await Promise.resolve();
  },
  mount(props) {
    render((props as { container?: Element | DocumentFragment }).container);
  },
  unmount() {
    root?.unmount();
    root = null;
  },
  async update() {
    await Promise.resolve();
  },
});
