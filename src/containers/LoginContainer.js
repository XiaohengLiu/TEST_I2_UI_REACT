import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginInput from '../components/login/LoginInput';
import * as loginActions from '../actions/login-actions';

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        return (
            <div className="loginContainer">
                <LoginInput {...this.props}/>
            </div>
        );
    }
}

LoginContainer.propTypes = {
    actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => {
    return {
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);