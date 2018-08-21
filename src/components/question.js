import React, { Component } from 'react';

class Question extends Component{


   render(){


     return(
       <p>
      {this.props.questions[0].text}
      </p>
     );
   }


}
export default Question;
