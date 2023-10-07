import './App.css';
import Button from "./components/common/ButtonMain/Button";
import ButtonLike from "./components/common/ButtonLike/ButtonLike";
import {ReactComponent as LikeIcon} from "./img/svg/like.svg";
import {ReactComponent as DislikeIcon} from "./img/svg/dislike.svg";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
        {/*<Button discount="Со скидкой 29%">Добавить к заказу</Button>*/}
        {/*<ButtonLike icon={LikeIcon} bgColor="#76BC21"/>*/}
        {/*<ButtonLike icon={DislikeIcon} bgColor="#003595" />*/}
        <Main />
    </div>
  );
}

export default App;
