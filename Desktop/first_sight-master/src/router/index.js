import Layout from "@/page/Layout";
import Month from "@/page/Month";
import Year from "@/page/Year";
import New from "@/page/New";
//自动生成，vscode联想机制
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Month />
      },
      {
        path: 'year',
        element: <Year />
      }
    ]
  },
  {
    path: '/new',
    element: <New />
  }
])

export default router