import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as vmActions from '../actions/vm-actions';
import * as modalActions from '../actions/modal-actions';


class VirtualizationContainer extends Component {
    constructor(props) {
        super(props);

        console.log('Virtualization Container props: ', this.props);
        this.state = {};
    }

    addVm() {
        this.props.actions.displayModal('vm-create');
    }

    renderVms() {
        let vms = this.props.vms.vmList;

        return (vms.map((vm) => {
            return (<div>{vm.name}</div>)
        }))
    }

    render() {

        return (
            <div>
                <h1>VMS</h1>
                <button onClick={this.addVm.bind(this)}>Add VM</button>
                {this.renderVms()}
            </div>
        );
    }
}

VirtualizationContainer.propTypes = {
    actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => {
    return {
        vms: state.vms
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({...vmActions, ...modalActions}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VirtualizationContainer);