import { lazy } from "react";

import { createHashRouter } from "react-router-dom";
import type { DataRouter } from "react-router-dom";

const Lits = lazy(() => import("@/pages/List"));
const TestPage = lazy(() => import("@/pages/Test"));

const router: DataRouter = createHashRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>订单子应用加载成功http://localhost:8001</h1>
      </div>
    ),
    index: true,
  },
  {
    path: "/order/list",
    element: <Lits />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

export default router;
