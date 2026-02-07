export default function Finance() {
  return(
    <div className="flex flex-col gap-3">
      <div className = "flex flex-col bg-white p-4 rounded-2xl">
        <div className = "flex justify-between">
          <div className = "flex flex-col">
            <p>Finance - Analysis</p>
            <p>All monetary flow and profit analysis for Swiftxend</p>
          </div>

          <div className = "flex gap-2">
            <div className = "flex gap-2">
              <div className="flex flex-col gap-2">
                <p>Selected timeline </p>
                <p>Today</p>
              </div> 
              <img src="" alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img src="" alt="" />
          <p>No financial data to show here</p>
          <p>No financial data has been recorded yet</p>
        </div>
      </div>
  

      <div className = "flex flex-col bg-white p-4 rounded-2xl">
        <div className = "flex justify-between">
          <div className = "flex flex-col">
            <p>Finance Actual</p>
            <p>All monetary flow in and out of Swiftxend</p>
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
              <p>Edit Commission %</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img src="" alt="" />
          <p>No monetary flow has been recorded</p>
          <p>No financial data has been recorded yet</p>
        </div>
      </div>
    </div>
  )
}