import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LoginInput extends Component {
    constructor(props) {
        super(props);

        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onLoginClick() {
        const username = document.getElementById('username');
        const password = document.getElementById('password');

        console.log('onLoginClick...');
        this.props.login({
            username: username.value,
            password: password.value
        });
    }

    componentDidMount() {
        document.getElementById('username').focus();
    }

    render() {
        return (
            <div>
                <input id="username" type="text" placeholder="Username" />
                <input id="password" type="text" placeholder="Password" />
                <button onClick={this.onLoginClick}>Login</button>
            </div>
        );
    }
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired
};

export default LoginInput;