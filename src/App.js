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
import Footer from './components/footer/Footer'

class App extends Component {

    render() {
        console.log('app props: ', this.props);
        if (this.props.auth.authenticated) {
            return (
                <div className="app-container">
                    <SettingGear {...this.props}/>
                    <div className="main-container">
                        <div className="nav-container">
                            <NavigationContainer {...this.props}/>
                        </div>

                        <div className="content-container">
                            <div className="content-container_main">
                                <Switch>
                                    <Route exact path='/' component={DashboardContainer}/>
                                    <Route path='/account' component={AccountContainer}/>
                                    <Route path='/dash' component={DashboardContainer}/>
                                </Switch>
                            </div>

                            <div className="content-container_footer">
                                <Footer/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            if (this.props.history.location.pathname.indexOf('login') === -1) {
                return null;
            } else {
                return (
                    <div className="app-container">
                        <Route path='/' component={LoginContainer}/>
                    </div>
                )
            }
        }
    }

    componentDidUpdate() {
        if (!this.props.auth.authenticated &&
            this.props.history.location.pathname.indexOf('login') === -1) {
            this.props.history.push('/login');
        }
    }

    componentWillMount() {
        if (!this.props.auth.authenticated &&
            this.props.history.location.pathname.indexOf('login') === -1) {
            this.props.history.push('/login');
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
