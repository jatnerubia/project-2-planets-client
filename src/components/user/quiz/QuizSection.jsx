import { useEffect, useState } from "react"
import * as RestApi from "../../../utils/rest_api_util"

const QuizSection = () => {

    const [quizData, setQuizData] = useState()
    const [answer, setAnswer] = useState()

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getQuiz()
    }, [])

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
        if (totalSeconds >= 3600) return "1:00:00"
        return new Date(totalSeconds * 1000).toISOString().slice(11, 19)
    }

    return (
        <div>
            
            {/* Quiz start */}
            {
                quizData !== undefined && quizData.status === 'start' && (
                    <div className="container">
                        <div className="text-center">
                            Fun Quiz
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <div className="card-title">
                                            Question
                                        </div>
                                        <p className="card-text fw-bold">
                                            100
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <div className="card-title">
                                            Total Score
                                        </div>
                                        <p className="card-text fw-bold">
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
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Harum non aut nisi ut dolores ullam nemo quia consectetur adipisci tenetur.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center pt-2">
                            {
                                loading
                                    ? <button className="btn btn-lg btn-quiz" disabled>Loading...</button>
                                    : <button className="btn btn-lg btn-quiz" onClick={startQuiz}>START</button>
                            }
                        </div>
                    </div>
                )
            }

            {/* Quiz answering */}
            {
                quizData !== undefined && quizData.status === 'answering' && (
                    <div className="container">
                        <div className="text-center mb-5">
                            Time Here
                        </div>
                        <div className="progress mb-5">
                            <div className="progress-bar" role="progressbar" style={{ width: (quizData.totalCompletedQuestion / 5) * 100 + '%' }} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="mb-5">
                            {quizData.question}
                        </div>
                        <div className="mb-5">
                            <div className="d-grid mb-2">
                                <button type="button" className={"btn text-start " + (answer === "a" ? "btn-primary" : "btn-light")} onClick={() => setAnswer('a')}>
                                    {quizData.choices.a}
                                </button>
                            </div>
                            <div className="d-grid mb-2">
                                <button type="button" className={"btn text-start " + (answer === "b" ? "btn-primary" : "btn-light")} onClick={() => setAnswer('b')}>
                                    {quizData.choices.b}
                                </button>
                            </div>
                            <div className="d-grid mb-2">
                                <button type="button" className={"btn text-start " + (answer === "c" ? "btn-primary" : "btn-light")} onClick={() => setAnswer('c')}>
                                    {quizData.choices.c}
                                </button>
                            </div>
                            <div className="d-grid">
                                <button type="button" className={"btn text-start " + (answer === "d" ? "btn-primary" : "btn-light")} onClick={() => setAnswer('d')}>
                                    {quizData.choices.d}
                                </button>
                            </div>
                        </div>
                        <div className="text-end">
                            {
                                answer !== undefined && loading && <button type="button" className="btn btn-quiz" disabled>Loading...</button>
                            }
                            {
                                answer !== undefined && !loading && <button type="button" className="btn btn-quiz" onClick={submitAnswer}>NEXT</button>
                            }
                        </div>
                    </div>
                )
            }

            {/* Quiz done */}
            {
                quizData !== undefined && quizData.status === 'done' && (
                    <div className="container">
                        <div className="text-center">
                            Fun Quiz
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <div className="card-title">
                                            Total Score
                                        </div>
                                        <p className="card-text fw-bold">
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
                                        <div className="card-title">
                                            Correct
                                        </div>
                                        <p className="card-text fw-bold">
                                            {quizData.score}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 pt-2">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <div className="card-title">
                                            Incorrect
                                        </div>
                                        <p className="card-text fw-bold">
                                            {100 - quizData.score}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 pt-2">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <div className="card-title">
                                            Time Spent
                                        </div>
                                        <p className="card-text fw-bold">
                                            {getTimeSpent()}
                                        </p>
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