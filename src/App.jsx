import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Riders from "./pages/Riders.jsx";
import Finance from "./pages/Finance.jsx";
import Emergency from "./pages/Emergency.jsx";
import Users from "./pages/Users.jsx";
import Xend from "./pages/Xend.jsx";
import DashboardLayout from "./Layouts/DashboardLayout.jsx";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path = "/" element = {<DashboardLayout />}>
          <Route index element = {<Home />} />
          <Route path = "/xend" element = {<Xend />} />
          <Route path = "/riders" element = {<Riders />} />
          <Route path = "/users" element = {<Users />} />
          <Route path = "/finance" element = {<Finance />} />
          <Route path = "/emergency" element = {<Emergency />} />

        </Route>
      </>
    )
  )

  return <RouterProvider router = {router} />;
  
}

export default App
