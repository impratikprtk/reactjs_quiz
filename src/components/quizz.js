import React, { Component } from 'react';
import Result from './result';

class Quizz extends Component {
constructor(props){
  super(props);
    this.handleNext = this.handleNext.bind(this);
    this.answer = this.answer.bind(this);
    this.check = this.check.bind(this);
  this.state={
    useranswer: [],
    showResult: false,
    questions: [
        {
          id: 1,
          type: 'single',
          text: 'What does HTML stand for',
          choices: [
            {
              id: 'a',
              text: 'Hyper text markup language',
            },
            {
              id: 'b',
              text: 'Hyper text machine language',
            },
            {
              id: 'c',
              text: 'Hyper tranlated markup language',
            },
            {
              id: 'd',
              text: 'None of these'
            }
          ],
          correct: 'a'
        },
        {
          id: 2,
          type: 'single',
          text: 'Which company mantains ReactJS',
          choices: [
            {
              id: 'a',
              text: 'Google',
            },
            {
              id: 'b',
              text: 'Facebook',
            },
            {
              id: 'c',
              text: 'Adobe',
            },
            {
              id: 'd',
              text: 'None of these'
            },
          ],
          correct: 'b'
        },
        {
          id: 3,
          type: 'single',
          text: 'MEAN Stack stand for',
          choices: [
            {
              id: 'a',
              text: 'MongoDB, ExpressJS, AngularJS and Node.js',
            },
            {
              id: 'b',
              text: 'MongoDB, ExpressJS and AngularJS Network',
            },
            {
              id: 'c',
              text: 'Mozila, ExpressJS, AngularJS and Node.js'
            },
            {
              id: 'd',
              text: 'Mozila, ExpressJS and AngularJS Network'
            },
          ],
          correct: 'a'
        },
        {
          id: 4,
          type: 'single',
          text: 'Is ReactJS a framework by itself?',
          choices: [
            {
              id: 'a',
              text: 'Yes',
            },
            {
              id: 'b',
              text: 'No',
            },
            {
              id: 'c',
              text: 'No, it is a language',
            },
            {
              id: 'd',
              text: 'Undefined',
            },
          ],
          correct: 'b'
        }
      ],
      score: 0,
      current: 1,
  }
}

 answer(e){

   let userans = e.currentTarget.id;
   let crtans = this.state.questions[this.state.current - 1].correct;
   if(userans===crtans)
   {
     this.setState({
       score:this.state.score + 1,
       current:this.state.current + 1
     });
   }

else {
  this.setState({
    current:this.state.current + 1
  })
}
}



 handleNext()
 {
     this.setState({
       current:this.state.current + 1
     })

}


check(e)
{
  console.log(this.state.current);
   console.log(e.currentTarget.id);
   let userans1 = e.currentTarget.id;
   var newArr = this.state.useranswer;
   newArr.push(userans1);
   this.setState({useranswer:newArr});
   console.log(this.state.useranswer);

  if (this.state.current > this.state.questions.length - 1) {
    console.log("result page");
    this.setState({showResult:true});
    if(userans1 === this.state.questions[this.state.current - 1].correct){
      this.setState({score:this.state.score + 1});
    }
      }
      else {
        if(e.currentTarget.id === 'Not Answered')
        {
          this.handleNext();
        }
        else {
          this.answer(e);
        }
      }
}

render(){


  return(
    <div>
    {this.state.showResult===true ? <Result {...this.state} /> :  <div>
                     <div>
                         <div id="question">
                             <h4>Question {this.state.current } / {this.state.questions.length}</h4>
                             <p>{this.state.questions[this.state.current - 1].text}</p>

                         </div>
                     </div>

      <div id="answers">
                  <ul>
                  <li onClick={this.check} id='a' ><span>A</span> <p>{this.state.questions[this.state.current - 1].choices[0].text}</p></li>
                  <li onClick={this.check} id='b' ><span>B</span> <p>{this.state.questions[this.state.current - 1].choices[1].text}</p></li>
                  <li onClick={this.check} id='c' ><span>C</span> <p>{this.state.questions[this.state.current - 1].choices[2].text}</p></li>
                  <li onClick={this.check} id='d' ><span>D</span> <p>{this.state.questions[this.state.current - 1].choices[3].text}</p></li>
                  </ul>
              </div>
              <button onClick={this.check} id='Not Answered' className="btn btn-danger" type="button">Skip this Question</button>
      </div> }
</div>
  );
}

}

export default Quizz;
