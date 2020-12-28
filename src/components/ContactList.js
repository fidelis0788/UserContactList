import React from 'react';

class ContactList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        
        <h5>{this.props.user.name.first} {this.props.user.name.last}</h5>
        <h6> Phone : {this.props.user.phone}</h6>
        <h6> Email : {this.props.user.email}</h6>
        <img src={this.props.user.picture.thumbnail} alt="user" />
      </div>
    )
  }
}

export default ContactList;