import React, { Component } from 'react';

export class Profile extends Component {
    constructor (props) {
        //super(props) - super is a keyword to get the parent component. props is needed 
        //to create this keyword without breaking the logic
        super(props);
        this.state = { profile: [], loading: true, error: null};

        //this part is needed to bind the methods used in the view into react.
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //API backend call
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

    //method that will take the submitted updates.
    handleSubmit (e) {
        e.preventDefault();
        alert('its working');
    }
    
    //react js method that will set up the component first before retrieving data
    //from the backend
    componentDidMount () {
        this.fetchProfile('PavlovsCat');
    }

    //react does not have two way binding, so we have to setState of our profile object properties
    //everytime a change occurs in our input field. programatically getting property name.
    handleChange (event) {
        this.setState(
            {
                profile: {
                    [event.target.name]: event.target.value
                }
            }
        );
    }

    //view renderer for retrieved Profile data
    static renderProfilePage (profile) {
        return (
            <form onSubmit={this.handleSubmit}>
                <h6>Profile Id</h6>
                <h6>{profile.id}</h6>
                <h6>User Name</h6>
                <input type="text" name="userName" value={profile.userName} onChange={this.handleChange} />
                <h6>Email Address</h6>
                <input type="email" name="emailAddress" value={profile.emailAddress} onChange={this.handleChange} />
                <input type="submit" className="btn btn-primary" value="Update Profile" />
            </form>
        )
    }

    //react js method that will render the view.
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