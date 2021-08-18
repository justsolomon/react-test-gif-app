import { Provider } from "react-redux";
import store from "redux/store";
import Routes from "./Routes";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "assets/scss/main.scss";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
