import React,{ useState } from 'react';

import data from "./data";

import SingileQuestions from './Questions';

function App() {

const [questions,setQuestions] = useState(data)
  return (
    <React.Fragment>

      <div className="container mt-5">
<div className="row">
  <div className="col-sm-4">
  <h3>Question and Answers about login</h3>
  </div>


  <div className="col-sm-8">
  {questions.map((question) =>{
      return(
        <SingileQuestions key={question.id} {...question} />
      )
    })}
  </div>
</div>
     
    
   
  
      </div>

    </React.Fragment>
  );
}

export default App;