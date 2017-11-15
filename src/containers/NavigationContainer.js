import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavigationContainer extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to='/account'>Account</Link></li>
                    <li><Link to='/dash'>dash</Link></li>
                </ul>
            </nav>
        )
    }
}

export default NavigationContainer;