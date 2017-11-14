import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as dashboardActions from '../actions/dashboard-actions';

class DashboardContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        return (
            <div className="DashboardContainer">
                <h2>Dashboard</h2>
            </div>
        );
    }
}

DashboardContainer.propTypes = {
    actions: PropTypes.object.isRequired
};

const mapStateToProp = (state, props) =>{
    return {};
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(dashboardActions, dispatch)
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(DashboardContainer);