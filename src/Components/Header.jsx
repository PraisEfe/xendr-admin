import search from "../assets/search.svg"

export default function Header() {

  const name = ["P","r","a","i","s","e"];
  const toLowerCase = name.map(str => str.toLowerCase());

  return(
    <div className="flex justify-between bg-white p-5 rounded-2xl">
        <div className="flex">
          <img src={search} alt="" className="h-4 w-4" />

          <input type="text" 
                 placeholder="Search for Xend IDs, names..."
                 className="bg-tertiary-grey h-15 w-98.25 rounded-2xl " />
        </div>

        <div className = "flex gap-2">
          <div className = "flex flex-col">
            <p className = "text-right font-black text-base">Hi {name.join("")}!</p>
            <p className="font-medium text[0.9rem] text-primary-grey">{toLowerCase}@swiftxend.com</p>
          </div>

          <p className = "font-black text-[1.375rem] text-primary-orange py-2 px-4 rounded-[0.9rem] h-fit bg-tertiary-orange">{name[0]}</p>
        </div>
    </div>
  )
}