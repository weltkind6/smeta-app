import './App.css';
import ButtonMain from "./components/common/ButtonMain/ButtonMain";
import ButtonLike from "./components/common/ButtonLike/ButtonLike";
import {ReactComponent as LikeIcon} from "./img/svg/like.svg";
import {ReactComponent as DislikeIcon} from "./img/svg/dislike.svg";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
        {/*<ButtonMain discount="Со скидкой 29%">Добавить к заказу</ButtonMain>*/}
        {/*<ButtonLike icon={LikeIcon} bgColor="#76BC21"/>*/}
        {/*<ButtonLike icon={DislikeIcon} bgColor="#003595" />*/}
        <Main />
    </div>
  );
}

export default App;
