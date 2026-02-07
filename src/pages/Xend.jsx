import live from "../assets/screen_record.svg";
import direction from "../assets/direction.svg";


export default function Xend() {
  return (
    <div className = "flex flex-col gap-3 w-full">
      <div className="bg-white p-4 rounded-2xl  flex flex-col gap-30 ">
        <div className = "flex justify-between">
          <div className="flex flex-col">
            <p className = "font-bold text-[1.875rem] ">Xend Activity</p>
            <p className = "font-medium text-primary-grey">Showing all Xend activities as they occur real-time</p>
          </div>

          <div className="flex gap-2 bg-tertiary-orange p-4 rounded-2xl h-fit" >
            <img src={live} alt="live" className = "h-5 w-5" />
            <p className = "font-black text-[0.9rem] text-primary-orange">Live Data</p>
          </div>

        </div>

        <div className = "flex flex-col items-center justify-center gap-2">
          <img src= {direction} alt="direction" />
          <div>
            <p className="text-base text-primary-grey font-black">No xend activity at the moment</p>
            <p className = "font-medium text-secondary-grey text-[0.9rem] ">Live activities will be displayed here</p>
          </div>
        </div>

      </div>

      <div className="bg-white p-4 rounded-2xl">
        <div className = "flex justify-between">
          <div>
            <p>All Xend Requests</p>
            <p>Showing all xend requests received today - date</p>
          </div>

          <div>
            <div>
              <p>Selected timeline</p>
              <p>Today</p>
            </div>
            <img src="" alt="" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img src="" alt="" />
          <p>No xend requests to show.</p>
          <p>All xend requests will be displayed here</p>
        </div>

      </div>
      
    </div>
  );
}
