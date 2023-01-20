import './index.css'

// Write your code here.
const wonImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const lossImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLossCard = props => {
  const {isWon, playAgain, score} = props

  const imgUrl = isWon ? wonImage : lossImage
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const isBestScore = isWon ? 'Best Score' : 'Score'

  return (
    <div className="winLoss-card">
      <div className="details-section">
        <h1>{gameStatus}</h1>
        <p>{isBestScore}</p>
        <p>{score}/ :12</p>
        <div>
          <button className="btn" type="button" onClick={playAgain}>
            Play Again
          </button>
        </div>
      </div>
      <div>
        <img src={imgUrl} alt="win or lose" className="img-size" />
      </div>
    </div>
  )
}

export default WinOrLossCard
