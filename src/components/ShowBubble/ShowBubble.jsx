import avatar from "../../static/avatar.png";

function ShowBubble() {
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img className="w-10" src={avatar} alt="avatar"/>
          </div>
        </div>
        <div className="chat-header">
          Marked as resolved
          <time className="text-xs opacity-50 ml-3">12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Megha</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={avatar} alt="avatar"/>
          </div>
        </div>
        <div className="chat-header">
          Marked as resolved
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">karan</div>
      </div>
    </>
  );
}

export default ShowBubble;
