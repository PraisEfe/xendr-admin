

export default function Riders() {
  return(
    <div className = "flex flex-col bg-white p-4 rounded-2xl">
      <div className = "flex justify-between">
        <div className = "flex flex-col">
          <div className = "flex gap-2">
            <p>Registered Riders</p>
            <p>0</p>
          </div>

          <p>Showing all riders registered today - Date</p>
        </div>

        <div className = "flex gap-2">
          <div className = "flex gap-2">
            <div className="flex flex-col gap-2">
              <p>Selected timeline</p>
              <p>Today</p>
            </div>
            <img src="" alt="" />
          </div>

          <div className="flex gap-2">
            <img src="" alt="" />
            <p>Add a Rider</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <img src="" alt="" />
        <p>No rider added</p>
        <p>No rider has signed up or has been added yet</p>
      </div>
    </div>
  )
}