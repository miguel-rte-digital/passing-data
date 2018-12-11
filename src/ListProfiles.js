import React, { Component } from 'react'

class ListProfiles extends Component {
	render(){
      console.log(this.props.users)
      return (
    	<ol className="profile-list">
          {this.props.users.map( (user) => (
          	<p>{user.name}</p>
          ))}
        </ol>
			
    }
}

export default ListProfiles