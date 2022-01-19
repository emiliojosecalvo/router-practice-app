import React, { Component } from 'react'

export default class Profile extends Component {
    componentDidMount() {
        console.log('Profile Did Mount')
    }

    render() {
        console.log('Render')
        return (
            <div>
                <h1>Profile Component</h1>
                <p>Name: {this.props.name}</p>
                <p>Mobile: {this.props.mobile}</p>
                <p>Merry: {this.props.isMerry ? 'Yes' : 'No'}</p>
            </div>
        )
    }
}
