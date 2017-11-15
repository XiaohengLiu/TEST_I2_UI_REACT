import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import * as loginActions from './actions/auth-actions';

import LoginContainer from './containers/LoginContainer';
import DashboardContainer from './containers/DashboardContainer';
import AccountContainer from './containers/AccountContainer';
import NavigationContainer from './containers/NavigationContainer';
import SettingGear from './components/SettingGear';

class App extends Component {

    render() {
        console.log('app props: ', this.props);
        if (this.props.auth.authenticated) {
            return (
                <div className="App">
                    <NavigationContainer/>
                    <SettingGear {...this.props}/>
                    <Switch>
                        <Route exact path='/' component={DashboardContainer}/>
                        <Route path='/account' component={AccountContainer}/>
                        <Route path='/dash' component={DashboardContainer}/>
                    </Switch>
                </div>
            );
        } else {
            if (this.props.history.location.pathname.indexOf('login') === -1) {
                this.props.history.push('/login');
                return null;
            } else {
                return (
                    <Route path='/' component={LoginContainer}/>
                )
            }
        }
    }

    // componentDidMount() {
    //     console.log('did mount');
    //     if (!this.props.auth.authenticated) {
    //         this.props.history.push('/login');
    //     }
    // }
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
