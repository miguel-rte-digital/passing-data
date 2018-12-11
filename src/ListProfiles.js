import React, { Component } from 'react'

class ListProfiles extends Component {
	render(){
      console.log(this.props.users)
      return (
    	<ol className="profile-list">
          {this.props.profiles.map((profile) => (
        
          	<li key={profile.id}>
				{this.props.users.filter((user) => ( 
                  user.id == profile.userID
                )).map(user=>(
                  <div>
                    {this.props.movies.filter((movie) => ( 
                    movie.id == profile.favoriteMovieID
                    )).map(movie=>(
                      <p>{user.name}'s favourite movie is {movie.name}</p>

                    ))}
                  
                 </div>  
                ))}
			</li>
          ))}
        </ol>
	)
}
}

export default ListProfiles