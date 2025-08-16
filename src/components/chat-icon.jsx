import chatIcon from '../assets/icons/chat.svg'

const ChatIcon = () => {
  return (
    <div id="chat-icon">
        <img src={`${chatIcon}`} alt="chat-icon" className="fixed right-8 sm:right-5 md:right-10 bottom-8 z-50 cursor-pointer " />
    </div>
  )
}

export default ChatIcon
