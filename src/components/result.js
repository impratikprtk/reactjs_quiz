import React, { Component } from 'react';
import '../index.css';

class Result extends Component {
  constructor(props){
    super(props);
    this.refreshPage = this.refreshPage.bind(this);
  }


refreshPage(){
   window.parent.location = window.parent.location.href;
  }
render(){

  return(
    <div>
<div>
<button onClick={this.refreshPage} className="btn btn-md btn-rounded btn-danger flright" type="button">Signout</button>
</div>

<h1>Result Time...</h1>
<div className="marginauto" id="questions"><h3>You Score {this.props.score} out of {this.props.useranswer.length}</h3></div>
{ this.props.questions.map((question,index)=> {return (
<div id="question">
{question.id} :- {question.text}
<h3>Correct Answer:- {question.correct}</h3>
<h3>Your Answer:- {this.props.useranswer[index]}</h3>
</div>)
})
}

    </div>
  );
}
}

export default Result;
