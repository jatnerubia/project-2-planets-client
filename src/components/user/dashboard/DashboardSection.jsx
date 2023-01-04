import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useEffect, useState } from "react";
import * as RestApi from "../../../utils/rest_api_util"
import QuizCard from '../QuizCard'
import { useOutletContext } from 'react-router-dom';

const DashboardSection = () => {

  const [userData] = useOutletContext()

  const [dashboard, setDashboard] = useState({
    rank: null,
    correctAnswer: null,
    startedAt: null
  });

  useEffect(() => {
    getDashboards();
  }, []);

  const getDashboards = async () => {
    try {
      const result = await RestApi.getDashboards()
      let response = await result.json();
      setDashboard(response);
    } catch (error) {}
  };

  const getTimeSpent = () => {
    const totalSeconds = dashboard.timeSpent
    if (totalSeconds >= 600) return "00:10:00"
    return new Date(totalSeconds * 1000).toISOString().slice(11, 19)
  }

  return (
    <div className="mt-5">
        <div className="py-5 user_avatar d-flex justify-content-center flex-column align-items-center">
          <img src={userData.avatar} className="rounded-circle" alt="User Avatar" width={150} height={150} />
          <h4 className="mt-4 fw-bold">
            {userData.firstName} {userData.lastName}
          </h4>
        </div>
        <div className="card-wrapper">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="mb-4 left col-lg-4 col-md-12">
                  {
                    dashboard.rank === null
                      ? (
                        <QuizCard title="RANK" text='N/A' icon={solid('ranking-star')} />
                      )
                      : (
                        <QuizCard title="RANK" text={dashboard.rank+1} icon={solid('ranking-star')} />
                      )
                  }

                </div>
                <div className="mb-4 left col-lg-8 col-md-12">
                  {
                    dashboard.correctAnswer === null
                      ? (
                        <QuizCard title="CORRECT ANSWER" text='N/A' icon={solid('list-check')} />
                      )
                      : (
                        <QuizCard title="CORRECT ANSWER" text={(dashboard.correctAnswer / 10) + ' / 10'} icon={solid('list-check')} />
                      )
                  }

                </div>
              </div>
              <div className="row">
                <div className="mb-4 left col-lg-4 col-md-12">
                  {
                    dashboard.correctAnswer === null
                      ? (
                        <QuizCard title="SCORE" text='N/A' icon={solid('bookmark')} />
                      )
                      : (
                        <QuizCard title="SCORE" text={dashboard.correctAnswer / 100 * 100 + '%'} icon={solid('bookmark')} />
                      )
                  }
                </div>
                <div className="mb-4 left col-lg-8 col-md-12">
                  {
                    dashboard.startedAt === null
                      ? (
                        <QuizCard title="TIME SPENT" text='N/A' icon={solid('hourglass-half')} />
                      )
                      : (
                        <QuizCard title="TIME SPENT" footerText='Hr:Mins:Sec' text={getTimeSpent()} icon={solid('hourglass-half')} />
                      )
                  }
                </div>
              </div>
            </div>
            <div className="col-md-6 right mb-4">
              <div className="card text-center">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title fw-bold fs-4 text-muted">
                    <FontAwesomeIcon className='me-3' icon={solid('gift')} />
                    YOUR AWARD
                  </h5>
                  <div className="card-text fs-1 fw-bold mt-4">
                    <div className="hexagon">
                      {
                        dashboard.rank === null && (
                          <h1>N/A</h1>
                        )
                      }
                      {
                        dashboard.rank === 0 && (
                          <FontAwesomeIcon className='me-3 fs-1 medal gold' icon={solid('medal')} />
                        )
                      }
                      {
                        dashboard.rank === 1 && (
                          <FontAwesomeIcon className='me-3 fs-1 medal silver' icon={solid('medal')} />
                        )
                      }
                      {
                        dashboard.rank === 2 && (
                          <FontAwesomeIcon className='me-3 fs-1 medal bronze' icon={solid('medal')} />
                        )
                      }
                      {
                        dashboard.rank >= 3 && (
                          <h1>Better Luck Next Life</h1>
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DashboardSection
