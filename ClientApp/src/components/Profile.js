import React, { Component } from 'react';

export class Profile extends Component {
    constructor (props) {
        super(props);
        this.state = { profile: [], loading: true, error: null};

        this.handleChange = this.handleChange.bind(this);
    }

    fetchProfile (userName) {
        fetch('api/Profile/GetProfile?userName=' + userName)
        .then (response => response.json())
        .then(data => 
            this.setState({
                profile: data,
                loading: false
            })
        )
        .catch(error => this.setState({error, loading: false}));
    }

    updateProfile () {
        console.log(this.state.profile);
    }
    
    componentDidMount () {
        this.fetchProfile('PavlovsCat');
    }

    handleChange (event) {
        this.setState({profile: event.target.value});
    }

    static renderProfilePage (profile) {
        return (
            <div>
                <h6>Profile Id</h6>
                <h6>{profile.id}</h6>
                <h6>User Name</h6>
                <input type="text" name="User Name" onChange={this.handleChange} value={profile.userName}/>
                <h6>Email Address</h6>
                <input type="email" name="Email Address" onChange={this.handleChange} value={profile.emailAddress}/>
                <button className="btn btn-primary" onClick={this.updateProfile}>Update Profile</button>
            </div>
        )
    }

    render () {
        let contents = this.state.loading ? <p><em>Loading...</em></p> : Profile.renderProfilePage(this.state.profile);

        return (
            <div>
                <h1>Profile Page</h1>
                {contents}
            </div>
        );
    }
}