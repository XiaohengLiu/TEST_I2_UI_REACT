import React, {Component} from 'react';

class LoginInput extends Component {
    constructor(props) {
        super(props);

        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onLoginClick() {
        const username = document.getElementById('username');
        const password = document.getElementById('password');

        this.props.actions.login({
            username: username.value,
            password: password.value
        }).then(() => {
            this.props.history.push('/');
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

export default LoginInput;