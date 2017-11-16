import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import pageLogo from '../images/Button-Blank-Blue-icon.png'

class NavigationContainer extends Component {
    render() {
        const navigation = this.props.auth.permissions.map((permission) => {
            return (
                <li key={permission.name} className="nav-list_item">
                    <Link to={permission.path}>
                        <div className="nav-list_item_container">
                            <span className={permission.style + ' nav-list_item_logo'}></span>
                            <span className="nav-list_item_name">{permission.name}</span>
                        </div>
                    </Link>
                </li>
            )
        });

        return (
            <nav>
                <div className="page-logo-container">
                    <img className="page-logo-image" src={pageLogo}/>
                </div>
                <ul className="nav-list">{navigation}</ul>
            </nav>
        )
    }
}

export default NavigationContainer;