import { Provider } from 'react-redux';
import store from './Store'; // Adjust path if needed
import CounterContainer from './CounterContainer';

function App() {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
}

export default App;
