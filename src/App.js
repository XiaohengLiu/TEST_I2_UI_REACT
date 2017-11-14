import React, { Component } from 'react';
import LoginContainer from './containers/LoginContainer';
import DashboardContainer from './containers/DashboardContainer';
import * as loginActions from './actions/login-actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

    render() {
        if (this.props.auth.authenticated) {
            return (
                <div className="App">
                    <DashboardContainer />
                </div>
            );
        } else {
            return (
                <LoginContainer/>
            )
        }
    }
}

const mapStateToProps = (state, props) => {
    return {
        auth: state.login
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
