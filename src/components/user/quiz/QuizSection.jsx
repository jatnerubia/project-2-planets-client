import { useEffect, useState } from "react"
import * as RestApi from "../../../utils/rest_api_util"

const QuizSection = () => {

    const [quizData, setQuizData] = useState()
    const [answer, setAnswer] = useState()
    const [timer, setTimer] = useState("00:00:00")


    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getQuiz()

    }, [])

    useEffect(() => {
      updateTime()
    }, [quizData])

    const updateTime = () => {
      setInterval(() => {
        if (quizData !== undefined) {
          const currentTime = new Date().getTime()
          const startedAt = new Date(quizData.startedAt).getTime()
          const remainingTime = (currentTime - startedAt) / 1000
          if(remainingTime <= 600 ) {
            setTimer(new Date((600 - remainingTime) * 1000).toISOString().slice(11, 19))
          }
        }
      }, 1000)
    }

    const getQuiz = async () => {
        try {
            const result = await RestApi.getQuiz()
            let response = await result.json()
            if (result.status === 200) {
                setQuizData(response)
            }
        } catch (error) {}
    }

    const startQuiz = async () => {
        setLoading(true)
        try {
            const result = await RestApi.startQuiz()
            let response = await result.json()
            if (result.status === 200) {
                setQuizData(response)
            }
        } catch (error) {}
        setLoading(false)
    }

    const submitAnswer = async () => {
        setLoading(true)
        try {
            const result = await RestApi.submitAnswer({
                answer
            })
            let response = await result.json()
            if (result.status === 200) {
                setQuizData(response)
            }
            setAnswer(undefined)
        } catch (error) {}
        setLoading(false)
    }

    const getTimeSpent = () => {
        const startedAt = new Date(quizData.startedAt).getTime()
        const finishedAt = new Date(quizData.finishedAt).getTime()
        const totalSeconds = (finishedAt - startedAt) / 1000
        if (totalSeconds >= 600) return "00:10:00"
        return new Date(totalSeconds * 1000).toISOString().slice(11, 19)
    }
    return (
        <div className="quiz-wrapper">

            {/* Quiz start */}
            {
                quizData !== undefined && quizData.status === 'start' && (
                    <div className="mt-4">
                      <h1 className="fw-bold fs-2">SPACE QUIZ</h1>
                      <div className="quiz-start_wrapper">
                        <div className="row">
                          <div className="col-md-6">
                              <div className="card text-center">
                                  <div className="card-body">
                                      <div className="card-title fw-bold fs-5">
                                          Question
                                      </div>
                                      <p className="card-text fw-bold fs-1 fw-bold mt-4">
                                          100
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="card text-center">
                                  <div className="card-body">
                                      <div className="card-title fw-bold fs-5">
                                          Total Score
                                      </div>
                                      <p className="card-text fw-bold fs-1 fw-bold mt-4">
                                          100
                                      </p>
                                  </div>
                              </div>
                          </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 pt-2">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text lh-base">
                                        Space is a mysterious place but there are plenty of things
                                        we are sure about when it comes to that vast space that surrounds
                                        us here on earth. Challenge what you think you know with our fun
                                        space quiz.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center pt-5">
                          {/* Modal Button */}
                          <button type="button" className="btn btn-lg px-4 btn-quiz" data-bs-toggle="modal" data-bs-target="#quizModal">
                            START
                          </button>
                          {/* Modal Content */}
                          <div className="modal fade" id="quizModal" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="quizModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h1 className="modal-title fs-5" id="quizModalLabel">
                                    <em className="text-danger fw-bold fs-6">Notes: </em><br />
                                  </h1>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                  <p className="text-start lh-base">
                                    This quiz is set to 10mins time to answer it. Keep in mind that once you started the quiz,
                                    the alloted time will start running. You can close the tab/browser and when you revisit, it will take
                                    you to the question your are currently answering until the countdown stop. <br /><br />
                                    Your rank will be based on your score and the time you spent. Goodluck 🙂
                                    <div className="pt-4">
                                      {
                                        loading
                                          ? <button className="btn btn-md btn-quiz d-block m-auto px-5" disabled>Loading...</button>
                                          : <button className="btn btn-md btn-quiz d-block m-auto px-5" data-bs-dismiss="modal" onClick={startQuiz}>Let's Go</button>
                                      }
                                    </div>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                )
            }

            {/* Quiz answering */}
            {
                quizData !== undefined && quizData.status === 'answering' && (
                    <div className="mt-4">
                        <div className="text-center mb-5">
                          <h2>{timer}</h2>
                        </div>
                        <div className="progress mb-5">
                            <div className="progress-bar" role="progressbar" style={{ width: (quizData.totalCompletedQuestion / 5) * 100 + '%' }} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="mb-5">
                            <h1 className="fs-4 fw-bold">{quizData.question}</h1>
                        </div>
                        <div className="mb-5">
                            <div className="d-grid mb-2">
                                <button type="button" className={"btn-choice btn text-start " + (answer === "a" ? "selected" : "unselect")} onClick={() => setAnswer('a')}>
                                    {quizData.choices.a}
                                </button>
                            </div>
                            <div className="d-grid mb-2">
                                <button type="button" className={"btn-choice btn text-start " + (answer === "b" ? "selected" : "unselect")} onClick={() => setAnswer('b')}>
                                    {quizData.choices.b}
                                </button>
                            </div>
                            <div className="d-grid mb-2">
                                <button type="button" className={"btn-choice btn text-start " + (answer === "c" ? "selected" : "unselect")} onClick={() => setAnswer('c')}>
                                    {quizData.choices.c}
                                </button>
                            </div>
                            <div className="d-grid">
                                <button type="button" className={"btn-choice btn text-start " + (answer === "d" ? "selected" : "unselect")} onClick={() => setAnswer('d')}>
                                    {quizData.choices.d}
                                </button>
                            </div>
                        </div>
                        <div className="text-end">
                            {
                                answer !== undefined && loading && <button type="button" className="btn px-4 btn-quiz" disabled>Loading...</button>
                            }
                            {
                                answer !== undefined && !loading && <button type="button" className="btn px-4 btn-quiz" onClick={submitAnswer}>NEXT</button>
                            }
                        </div>
                    </div>
                )
            }

            {/* Quiz done */}
            {
                quizData !== undefined && quizData.status === 'done' && (
                    <div className="mt-4">
                      <h1 className="fw-bold fs-2">SPACE QUIZ</h1>
                      {/* {timerComponents.length ? timerComponents : <span>Time's up!</span>} */}
                      <div className="quiz-done_wrapper">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <div className="card-title fs-5 fw-bold">
                                            Total Score
                                        </div>
                                        <p className="card-text fw-bold fs-1 mt-4">
                                            {quizData.score}/100
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 pt-2">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <div className="card-title fs-5 fw-bold">
                                            Correct
                                        </div>
                                        <p className="card-text fw-bold fs-1 mt-4">
                                            {quizData.score}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 pt-2">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <div className="card-title fs-5 fw-bold">
                                            Incorrect
                                        </div>
                                        <p className="card-text fw-bold fs-1 mt-4">
                                            {100 - quizData.score}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 pt-2">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <div className="card-title fs-5 fw-bold">
                                            Time Spent
                                        </div>
                                        <p className="card-text fw-bold fs-1 mt-4">
                                            {getTimeSpent()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                )
            }

        </div>
    )
}

export default QuizSection
