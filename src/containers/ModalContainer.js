import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as modalAction from '../actions/modal-actions'

class ModalContainer extends Component {
    constructor(props) {
        super(props);

        console.log('props: ', props);
    }

    render() {
        if (this.props.modal.showModal) {
            return (
                <div className="modal-container">
                    <h1>Modal</h1>
                </div>
            )
        } else {
            return null;
        }

    }
}

const mapStateToProps = (state, props) => {
    return {
        modal: state.modal
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(modalAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);