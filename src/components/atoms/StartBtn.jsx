const StartBtn = ({showCards}) => {
  return (
    <>
        <button onClick={showCards} className="rounded-xl px-4 py-2 bg-teal-200 hover:bg-teal-300 active:shadow-inner">Start</button>
    </>
  )
}

export default StartBtn