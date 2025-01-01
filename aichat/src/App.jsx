import './App.css';
import logo from './assets/logo.png';
import avatar from './assets/image.png';
import { IoMdAdd } from 'react-icons/io';
import {
  IoHomeOutline,
  IoBookmarkOutline,
  IoDiamondOutline,
  IoSendSharp,
} from 'react-icons/io5';
import { sendMessage } from './services/openai';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Add user message
    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Get AI response
      const response = await sendMessage(input);
      const aiMessage = { role: 'assistant', content: response };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Failed to get response:', error);
      // Optionally show error to user
    } finally {
      setIsLoading(false);
    }
  };

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

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
        <div className="chats" ref={chatRef}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat ${message.role === 'assistant' ? 'bot' : ''}`}
            >
              <img
                src={message.role === 'assistant' ? logo : avatar}
                alt={message.role}
                className="logo"
              />
              <p className="txt">{message.content}</p>
          </div>
          ))}
          {isLoading && (
            <div className="chat bot">
              <img src={logo} alt="ai" className="logo" />
              <p className="txt">Thinking...</p>
          </div>
          )}
        </div>

        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message..." />
            <button className="send">
              <IoSendSharp size={24} />
            </button>
          </div>
          <p>AI Chat may produce inaccurate information.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
