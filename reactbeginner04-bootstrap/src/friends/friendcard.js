import React from 'react';

class FriendCard extends React.Component {
    
    render() { 
        return ( 
            <div class="col-md-4">
                <div class="card" style={{width: '18rem'}}>
                    <img src={`images/${this.props.picture}`} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.title}</h5>
                        <p class="card-text">{this.props.desc}</p>
                        <a href={this.props.link} class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default FriendCard;