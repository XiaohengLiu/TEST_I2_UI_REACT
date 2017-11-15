import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavigationContainer extends Component {
    render() {
        console.log('permissions: ', this.props.auth);
        const navigation = this.props.auth.permissions.map((permission) => {
            console.log('current permission: ', permission);
            return (
                <li key={permission.name}>
                    <Link to={permission.path}>{permission.name}</Link>
                </li>
            )
        });

        return (
            <nav>
                <h2>I2 LOGO</h2>
                <ul>{navigation}</ul>
            </nav>
        )
    }
}

export default NavigationContainer;