import { Outlet } from "react-router-dom";
import SideNav from "../Components/SideNav.jsx";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

export default function DashboardLayout() {
  return(
    <div className = "bg-tertiary-grey pr-6">
      <div className="flex ">
      <SideNav />
    
        <div className="flex flex-col justify-between h-screen pl-4 py-2.5  w-screen">
          <Header />
          <div className="">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>

   

    </div>
  )
}