import './App.css';
import { Component } from 'react';
import firebase from 'firebase';
import data from '../data.json'

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
      <div className="App">
        <header className="App-header">
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
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;