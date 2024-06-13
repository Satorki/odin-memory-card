import { useContext, useState } from "react"
import { ScoreControlContext } from "../molecules/ScoreControl"

const StartBtn = ({showCards}) => {

  const [started, setStarted] = useState(false)
const {restartGame} = useContext(ScoreControlContext)

  const startGame = () => {
    showCards()
    setStarted(true)
  }

  return (
    <>
        {!started ? 
        <button onClick={startGame} className="rounded-xl px-4 py-2 bg-teal-200 hover:bg-teal-300 active:shadow-inner">Start</button>
        :
        <button onClick={restartGame} className="rounded-xl px-4 py-2 bg-teal-200 hover:bg-teal-300 active:shadow-inner">Restart</button>}
    </>
  )
}

export default StartBtn