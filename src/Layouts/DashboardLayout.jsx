import { Outlet } from "react-router-dom";
import SideNav from "../Components/SideNav.jsx";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

export default function DashboardLayout() {
  return(
    <div className = "bg-tertiary-grey pr-6">
      <div className="flex ">
      <SideNav />
    
        <div className="flex flex-col justify-between h-screen pl-4 py-2.5 overflow-x-hidden">
          <Header />
          <div className="w-screen">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>

   

    </div>
  )
}