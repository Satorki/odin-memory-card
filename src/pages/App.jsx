import AppStyle from "../components/atoms/AppStyle";
import Title from "../components/atoms/Title";
import Game from "../components/organisms/Game";

function App() {
  return (
    <>
      <AppStyle>
        <Title />
        <Game />
      </AppStyle>
    </>
  );
}

export default App;
