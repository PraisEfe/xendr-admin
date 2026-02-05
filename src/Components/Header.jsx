import search from "../assets/search.svg"

export default function Header() {

  const name = ["P","r","a","i","s","e"];
  const toLowerCase = name.map(str => str.toLowerCase());

  return(
    <div className="flex justify-between pl-4">
        <div className="flex bg-white">
          <img src={search} alt="" className="h-4 w-4" />

          <input type="text" 
                 placeholder="Search for Xend IDs, names..."
                 className="bg-tertiary-grey h-15 w-98.25" />
        </div>

        <div>
          <div>
            <p>Hi {name.join("")}</p>
            <p>{toLowerCase}@swiftxend.com</p>
          </div>

          <p>{name[0]}</p>
        </div>
    </div>
  )
}