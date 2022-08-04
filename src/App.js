import logo from './logo.svg';
import './App.css';
import Questions from './components/Questions';
import { useState } from 'react';
import data from './components/data'

function App() {

  const[questions,setQuestions] = useState(data)

  return (
    <div className="App">
        <h2>Questions</h2>
        <div>
          {
            questions.map((question) => {
              return (
                <Questions key={question.id}{...question}/>
              )
            })
          }
        </div>
    </div>
  );
}

export default App;
