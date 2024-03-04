import { Provider } from "react-redux";
import { store } from "./store/store";
import { AppRouter } from "./router/AppRouter";
import ErrorBoundary from "./providers/ErrorBoundry/ErrorBoundry";

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <div className="App">
          <AppRouter />
        </div>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
