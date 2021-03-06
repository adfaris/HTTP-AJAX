import React, { Component } from 'react';
import axios from 'axios';

class FriendList extends Component{
    constructor(){
        super();
        this.state = {
            friends : [],
        };
    };

    componentDidMount(){
        axios.get('http://localhost:5000/friends')
        .then (Response => {
            this.setState(() => ({friends:Response.data}));
        })
        .catch (error=>{
            console.error('Server Error', error);
        });
    }

    render() {
        return (
          <div>
            <div className="friend-title">Lambda Friends</div>
              <ul className="friend-grid">
                 {this.state.friends.map(friend => {
                return (
                  <li key={friend.id} className="friend">
                    <div className="friend-name">{friend.name}</div>
                    <div className="friend-age">{`Age: ${friend.age}`}</div>
                    <div className="friend-email">{`Email: ${friend.email}`}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
}
export default FriendList;