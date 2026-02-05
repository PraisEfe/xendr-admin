import logo from "../assets/swiftxend.svg";


export default function Footer() {
  return(
    <div className = "flex justify-between py-8.5 px-5 bg-white rounded-2xl">
      <div>
        <p className = "font-black text-[0.75rem]">&copy;2026, All Rights Reserved.</p>
        <p className = "font-medium text-[0.75rem] text-primary-grey">Designed and Developed by Swiftxend, for Swiftxend!</p>
      </div>

      <div>
       <img src={logo} alt="" className = "pt-2.5" />
      </div>
    </div>
  )
}