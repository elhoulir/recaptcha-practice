import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.handleSubscribe = this.handleSubscribe.bind(this)
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this)
    this.verifyCallback = this.verifyCallback.bind(this)
    this.state = {
      isVerfied: false
    }
  }

  recaptchaLoaded () {
    console.log('Captcha has successfully loaded');
  }

  
  handleSubscribe(){
    if (this.state.isVerfied) {
      alert('You have successfully subscribed!')
    } else alert('Please verify that you are a human')
  }

  verifyCallback (response) {
    if (response) {
      this.setState({
        isVerfied: true
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <input type="text" placeholder="email@company.com"/>
            <div className="convert" onClick={this.handleSubscribe}>Subscribe </div>
          <Recaptcha
            sitekey="6LcB12QUAAAAAK05B2KeAdo6EcrEt9tko9aeWnFc"
            render="explicit"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
          />
        </div>
      </div>
    );
  }
}

export default App;
