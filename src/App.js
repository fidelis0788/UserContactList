import React from "react"
import './App.css';
import UserList from "./components/UserList"
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount = () => {
    fetch('https://randomuser.me/api?results=25')
      .then(response => response.json())
      .then(data => this.setState({
        users: data.results
        
      }))
     
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contact List</h1>
          <UserList users={this.state.users}/>
        </header>
      </div>
    );
  }
} 
export default App