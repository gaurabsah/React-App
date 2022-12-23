import './App.css';
import { Provider } from 'react-redux';
import BookContainer from './components/BookContainer';
import store from './redux/Store';
import HooksBookContainer from './components/HooksBookContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">

      <BookContainer/>

      <HooksBookContainer/>
    
    </div>
    </Provider>
  );
}

export default App;
