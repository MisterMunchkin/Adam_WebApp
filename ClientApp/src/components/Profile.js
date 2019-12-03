import Reach, { Component } from 'react';

export class Profile extends Component {
    constructor (props) {
        super(props);
        this.state = { profile: [], loading: true};
        this.profile = this.profile.bind(this);
    }
}