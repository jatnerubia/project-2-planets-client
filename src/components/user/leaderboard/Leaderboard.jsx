const LeaderboardComponent = () => {
  return (
    <div className="mt-4">
      <h1 className="fw-bold fs-2">LEADERBOARD</h1>

      <div className="leaderboard-wrapper mt-5">
        <h3 className="fw-bold">TOP 10 HIGHEST SCORE</h3>
        <table className="table table-responsive bordered mt-4">
          <thead className="table-light">
            <tr>
              <th scope="col">RANK</th>
              <th scope="col">NAME</th>
              <th scope="col">SCORE</th>
              <th scope="col">TIME SPENT</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>John Doe</td>
              <td>100%</td>
              <td>00:10:00 mins</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>John Doe</td>
              <td>100%</td>
              <td>00:10:00 mins</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>John Doe</td>
              <td>100%</td>
              <td>00:10:00 mins</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>John Doe</td>
              <td>100%</td>
              <td>00:10:00 mins</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>John Doe</td>
              <td>100%</td>
              <td>00:10:00 mins</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>John Doe</td>
              <td>100%</td>
              <td>00:10:00 mins</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>John Doe</td>
              <td>100%</td>
              <td>00:10:00 mins</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>John Doe</td>
              <td>100%</td>
              <td>00:10:00 mins</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>John Doe</td>
              <td>100%</td>
              <td>00:10:00 mins</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>John Doe</td>
              <td>100%</td>
              <td>00:10:00 mins</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default LeaderboardComponent
