//import { Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Card from "./pages/dashboard/Card";

const Ciao = () => {
  return <h1>Ciao</h1>;
};
const HelloWorld = () => {
  return <h1>Hello HelloWorld</h1>;
};

const routes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dash",
    element: <HelloWorld />,
  },
  {
    path: "/card",
    element: <Card
    descr={"descrizione della card"}
    title={"titolo della card"}
    like={"10"}
    comments={"20"}
    attachments={"30"}
    />
  },
  {
    path: "*",
    element: (() => <h1>404 Not Found</h1>)(),
  },
];
export default routes;
