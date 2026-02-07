export default function Users() {
  return(
    <div className = "flex flex-col bg-white p-4 rounded-2xl">
      <div className = "flex justify-between">
        <div className = "flex flex-col">
          <div className = "flex gap-2">
            <p>Registered Users</p>
            <p>0</p>
          </div>

          <p>Showing all riders registered users - Date</p>
        </div>

        <div className = "flex gap-2">
          <div className = "flex gap-2">
            <div className="flex flex-col gap-2">
              <p>Selected timeline</p>
              <p>Today</p>
            </div>
            <img src="" alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <img src="" alt="" />
        <p>No users here</p>
        <p>No user has signed up for Swiftxend....yet</p>
      </div>
    </div>
  )
}