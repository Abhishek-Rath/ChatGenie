import './App.css';
import OptionSelection from './components/OptionSelection';
import options from "./AIOptions";

function App() {
  // console.log(process.env.REACT_APP_OPEN_AI_API_KEY)
  console.log(options);
  return (
    <div className="App">
      <h1>ChatGenie</h1>
      {/* {process.env.REACT_APP_OPEN_AI_API_KEY} */}
      <OptionSelection options={ options } />
      
    </div>
  );
}

export default App;
