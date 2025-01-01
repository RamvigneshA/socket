import './App.css';
import logo from "./assets/logo.png"

function App() {
  return (
    <>
      <div className="App">
        <div className="sidebar">
          <div className="upperSide">
            <div className="upperSideLogo"><img src={`${logo}`} alt="logo" className='logo' /><span className='brand'>Ai Chat</span></div>
            <button className="midBtn"><span className='addBtn'>+</span>New Chat</button>
            <div className="upperSideBottom">
              <button className="query">what is Programming?</button>
              <button className="query">funny jokes</button>
            </div>
          </div>
          <div className="lowerSide">
            <div className="listsItem">Home</div>
            <div className="listsItem">saved</div>
            <div className="listsItem">upgrade to pro</div>
          </div>
        </div>
        <div className="main">main</div>
      </div>
    </>
  );
}

export default App;
