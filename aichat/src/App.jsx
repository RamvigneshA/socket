import './App.css';
import logo from "./assets/logo.png"
import { IoMdAdd } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { IoBookmarkOutline } from 'react-icons/io5';
import { IoDiamondOutline } from 'react-icons/io5';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideLogo">
            <img src={logo} alt="logo" className="logo" />
            <span className="brand">Ai Chat</span>
          </div>

          <button className="midBtn">
            <IoMdAdd className="addBtn" />
            New Chat
          </button>

          <div className="upperSideBottom">
            <button className="query">What is Programming?</button>
            <button className="query">How to learn React.js?</button>
            <button className="query">What are JavaScript promises?</button>
          </div>
        </div>

        <div className="lowerSide">
          <div className="listsItem">
            <IoHomeOutline className="listIcon" />
            Home
          </div>
          <div className="listsItem">
            <IoBookmarkOutline className="listIcon" />
            Saved
          </div>
          <div className="listsItem">
            <IoDiamondOutline className="listIcon" />
            Upgrade to Pro
          </div>
        </div>
      </div>

      <div className="main">
        <div className="chats">{/* Chat content will go here */}</div>

        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message..." />
            <button className="send">Send</button>
          </div>
          <p>AI Chat may produce inaccurate information.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
