import './App.css';
import { Employee } from './components/Employee';

function App() {
  return (
    <div className="App">
      <h1>Welcome To my APP</h1>
      <Employee name="Gaurab" id={777}>I am Children in JSX</Employee>
    </div>
  );
}

export default App;
