/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    TopScore: 0,
    previousClickedEmoji: [],
    isGameOver: true,
  }

  toResetTheGame = () =>
    this.setState({previousClickedEmoji: [], isGameOver: true})

  finishTheGame = currentScore => {
    const {TopScore} = this.state
    let newTopScore = TopScore

    if (currentScore > TopScore) {
      newTopScore = currentScore
    }
    this.setState({TopScore: newTopScore, isGameOver: false})
  }

  clickToGetEmojis = id => {
    const {previousClickedEmoji} = this.state
    const {emojisList} = this.props
    const isEmojiPresent = previousClickedEmoji.includes(id)
    const lengthOfList = previousClickedEmoji.length

    if (isEmojiPresent) {
      this.finishTheGame(lengthOfList)
    } else {
      if (emojisList.length - 1 === previousClickedEmoji) {
        this.finishTheGame(emojisList.length)
      }
      this.setState(preState => ({
        previousClickedEmoji: [...preState.previousClickedEmoji, id],
      }))
    }
  }

  getShuffledEmojis = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderOfEmojiList = () => {
    const shuffledEmojisList = this.getShuffledEmojis()

    return (
      <div className="emoji-container">
        <ul className="list-container">
          {shuffledEmojisList.map(eachEmoji => (
            <EmojiCard
              emojisDetails={eachEmoji}
              key={eachEmoji.id}
              clickToGetEmojis={this.clickToGetEmojis}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderOfScorecard = () => {
    const {emojisList} = this.props
    const {previousClickedEmoji} = this.state
    const isWon = emojisList.length === previousClickedEmoji.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        playAgain={this.toResetTheGame}
        score={previousClickedEmoji.length}
      />
    )
  }

  render() {
    const {previousClickedEmoji, isGameOver, TopScore} = this.state

    return (
      <div className="">
        <NavBar
          score={previousClickedEmoji.length}
          TopScore={TopScore}
          isGameOver={isGameOver}
        />
        <div className="app">
          {isGameOver ? this.renderOfEmojiList() : this.renderOfScorecard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
