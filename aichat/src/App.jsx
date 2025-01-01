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
        <div className="chats">
          <div className="chat">
            <img src={logo} alt="logo" className="logo" />{' '}
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque eaque dolorem placeat ipsa porro facilis minima aliquid
              ducimus perspiciatis a id, architecto explicabo reiciendis ab.
              Deserunt hic neque quidem iure?
            </p>
          </div>
          <div className="chat">
            <img src={avatar} alt="avatar" className="logo" />{' '}
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque eaque dolorem placeat ipsa porro facilis minima aliquid
              ducimus perspiciatis a id, architecto explicabo reiciendis ab.
              Deserunt hic neque quidem iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nemo ullam distinctio, incidunt harum error totam ad. Inventore id dolor amet animi et suscipit ratione! Voluptatibus quaerat temporibus consectetur exercitationem?
              Saepe fugiat hic ipsam! Nobis libero sequi doloribus culpa aspernatur molestiae rerum nihil recusandae quam architecto quidem, harum laboriosam in dolorem distinctio alias a possimus amet, aliquam tempore dolore voluptates!
              Rem, hic. Aliquam ipsam minima ab dignissimos error distinctio reprehenderit corporis atque qui, eos tempore? Commodi repellendus blanditiis doloribus culpa quia, sunt unde nesciunt facilis impedit id facere ea adipisci.
              Aliquid nostrum itaque corrupti facere ut, soluta ipsa quasi ratione voluptate dolore maxime, fugiat magni suscipit modi error perferendis consequuntur! Commodi, nostrum. Officiis exercitationem recusandae non cumque beatae cum distinctio.
              Vitae magnam id deserunt! Quas excepturi voluptatem necessitatibus similique itaque ipsa provident nam iusto sit, at molestiae ullam praesentium maiores adipisci velit omnis nihil. Minima consequuntur aut atque a architecto!
              Aspernatur debitis ea fuga molestias aliquam in ducimus officia est cupiditate eveniet quidem quaerat distinctio, magni error optio eum itaque, hic nisi voluptas nostrum sequi. Numquam iure animi architecto tempore?
              Vel odit dolorum tenetur enim aspernatur qui quasi illo libero natus recusandae, perspiciatis repellendus, sunt rem iusto laborum ullam. Quasi nostrum sed, ab fugiat non accusamus impedit quae distinctio in.
              Consequatur quia repellendus, placeat illo perspiciatis tenetur vero exercitationem quaerat eum vel, quis labore corrupti eligendi sed cupiditate aliquam libero non, voluptates accusamus praesentium deleniti ab eaque veritatis quibusdam. Quae.
              Voluptas, perspiciatis mollitia facere eius dolorem, commodi aspernatur aut sint animi reiciendis velit? Quaerat itaque illum aperiam reprehenderit? Officia voluptatibus corporis nisi repellendus ad voluptas explicabo iste consectetur excepturi laboriosam!
              Sed sit vitae corrupti. Quasi vero quae earum voluptatum dolore. Quidem voluptatem aut explicabo, quisquam optio, modi incidunt eveniet obcaecati aliquid consectetur dolorem odio aliquam id tempore cum quis fugit!
              Quam autem aut velit eveniet impedit corrupti. Unde eaque saepe qui at modi ipsa, cupiditate illo, cum suscipit inventore reiciendis sapiente laboriosam doloremque id eius quibusdam exercitationem reprehenderit necessitatibus magni.
              Sed nulla eveniet reprehenderit rerum esse animi a repellendus vitae odit exercitationem porro repellat distinctio, iste ex placeat in expedita magni ad? Recusandae corrupti repellat vel dolore id delectus vero?
              Sed odit repudiandae laudantium dolore aperiam autem at fugiat necessitatibus magni tempora, aliquam aliquid fuga dolorem consectetur hic qui modi ad distinctio facilis temporibus! Provident, tempora quo! Consequuntur, odio hic.
              Quibusdam tenetur ipsam at dolorem ex veniam distinctio architecto inventore accusamus. Totam delectus fugiat rem quia magnam perspiciatis veritatis minus eos soluta, quo nobis fuga aperiam voluptatem excepturi non esse.
              Est maxime, doloremque minima dignissimos fugiat laudantium facilis incidunt delectus facere, adipisci aliquid animi? Fuga ad impedit, quod eligendi itaque reiciendis iure enim asperiores debitis praesentium ex, temporibus officiis cupiditate?
              Voluptas consequuntur blanditiis, nemo sapiente quasi totam. Reprehenderit at, quae iste sed odio alias aperiam perspiciatis ipsam laborum, repudiandae debitis, dolore provident adipisci? Aliquid, delectus consequatur praesentium assumenda reprehenderit labore.
              Accusantium dolorem, quam illo excepturi quod sequi delectus dolor impedit deserunt consequatur beatae! Iste ullam a incidunt ut aperiam sit temporibus fugiat eum ducimus? Molestiae, accusamus. Perspiciatis eos eveniet dignissimos?
              Optio vero saepe nemo et perferendis, rem explicabo, aspernatur odit soluta architecto dolores cumque voluptate officia eos, praesentium neque itaque quos! Molestias quod itaque vel corrupti accusantium corporis assumenda praesentium?
              Esse odit provident, libero rerum tempora qui voluptatem ducimus, deserunt quibusdam porro dolore, temporibus magnam ex quod expedita dolorem maiores iste aperiam quis non nemo quaerat! Architecto temporibus voluptates amet?
              Inventore consequuntur sed qui aliquid doloribus nam tenetur rem ut aspernatur numquam illo, maiores vel perspiciatis quam tempore dignissimos itaque eius magni vero? Reprehenderit maiores veniam delectus omnis, eius error.
              Vitae labore doloremque autem reiciendis pariatur. Accusamus vel odio sint, nostrum debitis enim fuga eveniet repudiandae beatae nemo consectetur omnis quaerat magnam iusto ut nesciunt corrupti numquam, sapiente libero a.
              Iste magni, accusantium rerum doloremque eligendi maxime voluptate architecto mollitia quam dolore perspiciatis! Quos vero aspernatur fuga, facilis quae sapiente, quod velit in eaque, recusandae repellat consequuntur iusto labore? Dolores?
              Itaque incidunt inventore deserunt perferendis amet, odio earum, accusamus modi deleniti corrupti fuga cupiditate corporis accusantium expedita, cumque blanditiis magni maiores. Suscipit mollitia unde omnis. Delectus voluptates cumque maiores sint?
              Autem ab laudantium voluptatum, blanditiis facilis rem corporis delectus ipsa cum minus pariatur unde ex distinctio illum sint ullam esse consectetur. Id, laboriosam quisquam inventore recusandae deleniti nam odio veritatis!
              Minima soluta quia assumenda dolorem minus porro earum totam laudantium saepe? Porro veniam natus error doloribus eos itaque provident earum possimus odit, ducimus inventore neque molestiae eligendi quo magnam maxime.
            </p>
          </div>
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
