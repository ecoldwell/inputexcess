import React, { Component } from 'react';
//import logo from './logo.svg';
import NomadLogo from './logo'
// import MobileLogo from './MobileLogo'
import FacebookLogo from './facebook';
import InstagramLogo from './instagram';
import TwitterLogo from './twitter';
import LinkedinLogo from './linkedin';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      account: {
        firstName:'First Name',
        lastName:'',
        email:'',
        password:'',
        password2:'',
        gender: '',
        dateOfBirth: '',
        interests:'',
        token:'',    
      }
      
  }
  

  }
  updateSearch=(event) =>{
    console.log("I am console logginh the", event);
    this.setState({account:{...this.state.account,firstName:event.target.value }});
  }
  // addContact(event) {
  //  event.preventDefault();
  //  let name = this.refs.firstName.value;
  //  let lastName = this.refs.l astName.value;
  //  console.log(this.refs.firstName.value);
  //  console.log(this.refs.lastName.value);
  // }
  render() {
    return (
      <div className="App">
      <div className = "wrapper">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" /> 
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>*/}
          <div className = "appLogo desktop">
          <a href="http://localhost:3000/#" target="_blank" rel="noopener noreferrer">
        <NomadLogo color="" />
      </a>
        
          </div>
          <div className = "navigation">
            <ul className = "topNav">
            <li>
              <a href = "http://localhost:3000/#">French</a>
            </li>
            <li>
              <a href = "http://localhost:3000/#">Login</a>
            </li>
            </ul>
          </div>
        </header>
        <div className = "container">
          <h1 className = "reg">Register</h1>
          <form>
            <div className = "names form-row">
              <div className = "half">
              <input type="text" className = "first r" value = {this.state.account.firstName} onChange={this.updateSearch}></input>
              </div>
              <div className = "half"> 
                <input type = "text" className = "last l" placeholder = "Last Name" ></input>
              </div>
            </div>

            <div className = "names form-row">
              <div className = "half">
              <input type="text" className = "e-mail r" placeholder = "E-mail" ></input>
              </div>
              <div className = "half"> 
                <input type = "text" className = "password l" placeholder = "Password" ></input>
              </div>
            </div>

            <div className = "names form-row">
              <div className = "half">
              <input type="text" className = "repassword r" placeholder = "Confirm Password" ></input>
              </div>
              <div className = "half"> 
                <input type = "text" className = "birthday l" placeholder = "Birthday" ></input>
              </div>
            </div>

            <div className = "names form-row">
              <div className = "half-dropdowns">
              <ul className="has-submenu">
                <li className="half dropdowns gender r" >
                    <a href="http://localhost:3000/#" id="option">Gender</a>
                      <ul className="submenu one" id="submenuShow">
                         <li>Female</li>
                         <li>Male</li>
                         <li>Rather Not Say</li>
                       </ul>
                 </li>
                 <li className="half dropdowns interests l" >
                    <a href="http://localhost:3000/#" id="option">Interests</a>
                    <ul className="submenu two" id="submenuShow">
                      <li>Culture</li>
                      <li>Religion</li>
                      <li>Adventure</li>
                    </ul>
                  </li>
                                    
                 </ul>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="serviceTerms">
        <p>BY CLICKING THE BUTTON YOU</p>
        <p>ACCEPT OUR <a href="http://localhost:3000/#">TERMS OF SERVICE</a></p>
        </div>

        <footer>
          <div className = "firstRow">
          <ul>
                    <li className="facebook social"><a href="https://fb.me/livenomads" target="_blank" rel="noopener noreferrer">
        <FacebookLogo size={30} color="" />
      </a></li>
                    <li className="instagram social">
                    <a href="https://www.instagram.com/livenomads/" target="_blank" rel="noopener noreferrer">
        <InstagramLogo size={30} />
      </a>
                    </li>
                    <li className="twitter social">
                    <a href="https://twitter.com/livenomads" target="_blank" rel="noopener noreferrer">
        <TwitterLogo size={30} />
      </a>
                    </li>
                    <li className="linkedin social">
                    <a href="https://www.linkedin.com/company/livenomads/" target="_blank" rel="noopener noreferrer">
        <LinkedinLogo size={30} />
      </a>
                    </li>
                    <li className="youtube social">
      
                    </li>
                    
                </ul>
          </div>
          <div className = "secondRow">
            <ul>
              <li><a href = "/">FAQ</a></li>
              <li><a href = "/">Support</a></li>
              <li><a href = "/">Terms</a></li>
              <li><a href = "/">Privacy</a></li>
            </ul>
          </div>
        </footer>
        </div>
      </div>
    );
  }
}

export default App;
