import { NavLink } from "react-router-dom";
import logo from "../assets/swiftxend.svg";

export default function SideNav() {
  return(
    <div className = "flex flex-col gap-5 bg-white">
      <img src={logo} alt="" />
      <NavLink to={"/"} >Overview</NavLink>
      <NavLink to={"/xend"}>Xends</NavLink>
      <NavLink to={"/riders"}>Riders</NavLink>
      <NavLink to={"/users"}>Users</NavLink>
      <NavLink to={"/finance"}>Finance</NavLink>
      <NavLink to={"/emergency"}>Emergency</NavLink>
  
    </div>
  )
}