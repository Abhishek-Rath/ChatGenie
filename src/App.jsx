import './App.css';
import OptionSelection from './components/OptionSelection';
import options from "./AIOptions";
import Translation from './components/Transalation';
import { useState } from 'react';
import { Configuration, OpenAIApi } from "openai";

function App() {

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPEN_AI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({}); // to get
  const [input, setInput] = useState("");  // to get prompt in the text area
  const [result, setResult] = useState("") // to store the result obtained from response of openai
  const selectOption = (opt) => {
    setOption(opt);
  }

  const doStuff = async () => {
    let obj = { ...option, prompt: input }

    const response = await openai.createCompletion(obj);
    setResult(response.data.choices[0].text);
  }

  return (
    <div className="App">
      <h1>ChatGenie</h1>
      {Object.values(option).length === 0 ? (
        <OptionSelection options={options} selectOption={selectOption} />
      ) : <Translation doStuff={doStuff} setInput={setInput} result={result} />}
    </div>
  );
}

export default App;
