import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        return (
            <div>
                <PersonInput addPerson={this.props.actions.addPerson} />
                <PeopleList people={people} />
            </div>
        );
    }
}