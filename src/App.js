import React from 'react';
import { Component } from 'react';
import Login from './components/login';
import Quizz from './components/quizz';
import './index.css';
//{this.state.user ? <Quizz /> : <Login handler={this.handler} />}
 class App extends Component {

constructor(props){
	super(props);
	this.handler = this.handler.bind(this);
	this.state = {
		user : null
	}
}

handler() {
	 this.setState({user: true});
 }

  render(){
		return(
			<div>
{this.state.user ? <Quizz /> : <Login handler={this.handler} />}
			</div>
		);
	}


}
export default App;
