export default function Emergency() {
  return(
    <div className = "flex flex-col bg-white p-4 rounded-2xl">
      <div className = "flex justify-between">
        <div className = "flex flex-col">
          <p>Emergency Management</p>
          <p>Showing all incoming emergency alerts received today - Date</p>
        </div>

        <div className = "flex gap-2">
          <div className="flex flex-col gap-2">
            <p>Selected timeline</p>
            <p>Today</p>
          </div>
            <img src="" alt="" />
        </div>

      </div>

      <div className="flex flex-col items-center justify-center">
        <img src="" alt="" />
        <p>No emergency alerts</p>
        <p>When any user or rider triggers emergency mode, the information will appear here</p>
      </div>
    </div>
  )
}