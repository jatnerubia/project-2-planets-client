import { useEffect, useState } from "react";
import * as RestApi from "../../../utils/rest_api_util"

const QuizLeaderboard = () => {
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
    <div className="quiz-leaderboard_section pb-5">
      <div className="container">
        <h2>QUIZ LEADERBOARD</h2>
        <div className="row mt-5">
          <div className="col-lg-6 col-md-12">
            <div className="row h-100">
              <div className="col d-flex flex-row justify-content-center align-items-end">
                <div className="card top-3">
                  <h3 className="mt-4 text-center fw-bold">3</h3>
                  <div className="user-info">
                    {
                      leaderboards.length < 3
                      ? (
                        <h5>N/A</h5>
                      )
                      : (
                        <h5>{leaderboards[2].fullName}</h5>
                      )
                    }
                  </div>
                </div>

                <div className="card top-1">
                <h3 className="mt-4 text-center fw-bold">1</h3>
                  <div className="user-info">
                  {
                      leaderboards.length < 1
                      ? (
                        <h5>N/A</h5>
                      )
                      : (
                        <h5>{leaderboards[0].fullName}</h5>
                      )
                    }
                  </div>
                </div>
                <div className="card top-2">
                <h3 className="mt-4 text-center fw-bold">2</h3>
                  <div className="user-info">
                  {
                      leaderboards.length < 2
                      ? (
                        <h5>N/A</h5>
                      )
                      : (
                        <h5>{leaderboards[1].fullName}</h5>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
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
      </div>
    </div>
  )
}
export default QuizLeaderboard
