import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "redux";
import Routes from "routes";

interface IAppProps {
  store: Store;
}

function App({ store }: IAppProps) {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes />
      </HashRouter>
    </Provider>
  );
}

export default App;
