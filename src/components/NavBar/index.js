// Write your code here.
import './index.css'

const Navbar = props => {
  const {score, TopScore, isGameOver} = props
  return (
    <div className="">
      <nav className="top-section">
        <div className="emoji-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        {isGameOver && (
          <div className="score-card">
            <p>Score: {score}</p>
            <p>Top Score: {TopScore}</p>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
