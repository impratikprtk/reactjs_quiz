import React, { Component } from 'react';
import '../index.css';
import reactlogo from './images/reactlogo.png';
import pandaclose from './images/pandaclose.png';
import pandaopen from './images/pandaopen.png';

class Login extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.passwordfocus = this.passwordfocus.bind(this);
        this.login = this.login.bind(this);
        this.loginfocus= this.loginfocus.bind(this);
        this.loginblur = this.loginblur.bind(this);
        this.passwordblur = this.passwordblur.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.errorClass = this.errorClass.bind(this);
        this.state ={
            email:'',
            password:'',
            loginfocused:false,
            passwordfocused:false,
            formErrors: {email: '', password: '', error: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        };
    }

    handleChange(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({ [e.target.name]: e.target.value }, () => { this.validateField(name, value)});
    }


    loginfocus(){
    this.setState({
        loginfocused:true,
        passwordfocused:false
    });
}
    passwordfocus(){
        this.setState({
            passwordfocused:true,
            loginfocused:false
        });
    }

    loginblur(){
        this.setState({
            loginfocused:false
        });
    }
    passwordblur(){
        this.setState({
            passwordfocused:false
        });
    }


    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
                    console.log("email valid: ", emailValid);
                    console.log("password valid: ", passwordValid);
        switch(fieldName) {
          case 'email':
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            emailValid = re.test(value);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                       emailValid: emailValid,
                       passwordValid: passwordValid},
                          this.validateForm);
      }

      validateForm() {
         this.setState({formValid: this.state.emailValid && this.state.passwordValid});
       }

       errorClass(error) {
         return(error.length === 0 ? '' : 'has-error');
       }
       handleClearForm(e) {
          e.preventDefault();
          this.setState({
              email: '',
              password: '',
              emailValid: false,
              passwordvalid: false,
              formValid: false
          });
       }



    login(e)
    {
      e.preventDefault();
      let fieldValidationErrors = this.state.formErrors;
      if(this.state.email==="impratikprtk@gmail.com" && this.state.password==="pratikprtk1"){
        this.props.handler();
      }
      else {
        fieldValidationErrors.error = ': Your password does not match the email account';
   this.setState({
     formErrors: fieldValidationErrors
   });
      }
      this.handleClearForm(e);
    }
    render(){
        return(



            <div className="centerdiv form-inline">
<div className="text-center">
    <h1 className="indieflower">Welcome!</h1>
    <p>(id is impratikprtk@gmail.com & pass is pratikprtk1)</p>
</div>
<form>
<div className="panel panel-default">
        {(this.state.formErrors.email.length > 0 ? <p>{"email"} {this.state.formErrors.email}</p> : '')}
        {(this.state.formErrors.password.length > 0 ? <p>{"password"}{this.state.formErrors.password}</p> : '')}
        {(this.state.formErrors.error.length > 0 ? <p>{"error"} {this.state.formErrors.error}</p> : '')}
      </div>
<div className="form-group centerdivwithoutborder text-center">

    <table align="center">
        <tr>
            {!this.state.loginfocused && !this.state.passwordfocused ? <img src={reactlogo} alt="react js logo" className="img-circle img-responsive"/>: this.state.passwordfocused && !this.state.loginfocused? <img src={pandaclose} alt="panda eye close" className="img-circle img-responsive"/> : <img src={pandaopen} alt="panda eye open" className="img-circle img-responsive"/>}
        </tr>
        <tr>
            <input onChange={this.handleChange} onFocus={this.loginfocus} onBlur={this.loginblur} className="form-control inputbox"  name="email" type="text" placeholder="E-mail" />

        </tr>
        <tr>
            <input onChange={this.handleChange} onFocus={this.passwordfocus} onBlur={this.passwordblur} className="form-control inputbox" name="password" type="password" placeholder="Password" />

        </tr>
        <tr>
            <button className="btn btn-md btn-rounded btn-outline-primary flright" onClick={this.login} disabled={!this.state.formValid} type="submit" id="login-button">Login</button>

        </tr>
    </table>

</div>
</form>

            </div>

        );
    }
}

export default Login;
