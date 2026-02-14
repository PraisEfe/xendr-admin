import { NavLink } from "react-router-dom";
import logo from "../assets/favicon.svg";
import ovInactive from "../assets/ov_inactive.svg";
import xendsInactive from "../assets/xend_inactive.svg";
import riderInactive from "../assets/rider_inactive.svg";
import userInactive from "../assets/user_inactive.svg";
import financeInactive from "../assets/finance_inactive.svg";
import emergencyInactive from "../assets/emergency_inactive.svg";
import ovActive from "../assets/ov_active.svg";
import xendsActive from "../assets/xend_active.svg";
import riderActive from "../assets/rider_active.svg";
import userActive from "../assets/user_active.svg";
import financeActive from "../assets/finance_active.svg";
import emergencyActive from "../assets/emergency_active.svg";
import collapseInactive from "../assets/collapse_inactive.svg";
import NavButton from "../UI/NavButton.jsx";
import { useState } from "react";

export default function SideNav() {

  const [isCollapsed, setIsCollapsed] = useState(false);

  return(
    <div className = {`flex flex-col items-center gap-5 pt-7 pd-5 px-10 bg-white ${isCollapsed ? "w-15" : "w-13"}`}>
      <img src={logo} alt="" className="w-6.25 h-6" />
    
      {data.map((item) => (
        <NavLink to = {item.to} key = {item.id}>
          {({isActive}) => (
          <NavButton 
            imageActive={item.imageActive}
            imageInactive={item.imageInactive}
            isActive = {isActive}
            navText = {item.navtext}
          />
          )} 
        </NavLink>
      ))}

      <button>
        <img src= {collapseInactive} alt="" onClick = {() => setIsCollapsed(!isCollapsed)} />
      </button>
    </div>
  )
}


const data = [
   {
    id: 1,
    imageActive: ovActive,
    imageInactive: ovInactive,
    to: "/",
    navtext: "Overview",
  },
  {
    id: 2,
    imageActive: xendsActive,
    imageInactive: xendsInactive,
    navtext: "Xends",
    to: "/xend",
  },
  {
    id: 3,
    imageActive: riderActive,
    imageInactive: riderInactive,
    navtext: "Riders",
    to: "/riders",
  },
  {
    id: 4,
    imageActive: userActive,
    imageInactive: userInactive,
    navtext: "Users",
    to: "/users",
  },
  {
    id: 5,
    imageActive: financeActive,
    imageInactive: financeInactive,
    navtext: "Finance",
    to: "/finance",
  },
  {
    id: 6,
    imageActive: emergencyActive,
    imageInactive: emergencyInactive,
    navtext: "Emergency",
    to: "/emergency",
  }
]
