// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisDetails, clickToGetEmojis} = props
  const {id, emojiUrl, emojiName} = emojisDetails

  const clickOnEmojisButton = () => {
    clickToGetEmojis(id)
  }
  return (
    <li className="list emojis">
      <button type="button">
        <img
          className="emoji"
          src={emojiUrl}
          alt={emojiName}
          onClick={clickOnEmojisButton}
        />
      </button>
    </li>
  )
}

export default EmojiCard
