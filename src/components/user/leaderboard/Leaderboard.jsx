import { useEffect, useState } from "react";
import * as RestApi from "../../../utils/rest_api_util"

const LeaderboardComponent = () => {
  const [leaderboards, setLeaderboard] = useState([]);

  useEffect(() => {
    getLeaderboards();
  }, []);

  const getLeaderboards = async () => {
    try {
      const result = await RestApi.getLeaderboards()
      let response = await result.json();
      response = response.slice(0, 10);
      setLeaderboard(response);
    } catch (error) {}
  };

  const getTimeSpent = (index) => {
    const totalSeconds = leaderboards[index].timeSpent
    if (totalSeconds >= 600) return "00:10:00"
    return new Date(totalSeconds * 1000).toISOString().slice(11, 19)
  }

  return (
    <div className="mt-4 pt-5">

      <div className="leaderboard-wrapper mt-5">
        <h3 className="fw-bold">TOP 10 HIGHEST SCORE</h3>
          <div className="table-responsive">
            <table className="table bordered mt-4">
              <thead className="table-light">
                <tr>
                  <th scope="col">RANK</th>
                  <th scope="col">NAME</th>
                  <th scope="col">SCORE</th>
                  <th scope="col">TIME SPENT</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {leaderboards.map((leaderboard, index) => (
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{leaderboard.fullName}</td>
                    <td>{leaderboard.score}</td>
                    <td>{getTimeSpent(index)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    </div>
  )
}
export default LeaderboardComponent
