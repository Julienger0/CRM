import './App.css';
import { Component } from 'react';
import firebase from "firebase/compat/app"
import data from '../data.json'
import Grid from './Grid';
import Form from './Form';

class App extends Component{
  constructor(props){
    super(props);
    this.state={data}
  }
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyCey_v71gUqwxbC6Mb47-ZdB6tPHHgxwRQ",
      authDomain: "crm-linkedin-e8177.firebaseapp.com",
      projectId: "crm-linkedin-e8177",
      storageBucket: "crm-linkedin-e8177.appspot.com",
      messagingSenderId: "233163257383",
      appId: "1:233163257383:web:e39f7c840d22d28248c002",
      measurementId: "${config.measurementId}"
    })
  }
  render(){
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="blue lighten-2">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo center">Contacts</a>
            </div>
          </nav>
        </div>
        <div>
          <Form/>
          <Grid items={this.state.data}/>
        </div>
      </div>
    );
  }
  
}

export default App;
