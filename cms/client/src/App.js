import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  constructor(){
    super();
    this.state={
      users:[]
    };
  }
  componentDidMount(){
    fetch('/api/users')
        .then(res => res.json())
        .then(users => this.setState({users}, () => console.log('Users list =>', users)))
  }
  render(){
    return(
      <div>
        <h2>Users</h2>
        <ul>
          {this.state.users.map((user) => 
            <li  key={user.id}>{user.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
