import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class UserRedux extends Component {

    constructor(probs) {
        super(probs);
        this.state = {

        }
    }

    componentDidMount() {

    }
    render() {
        return (
            <>
                <div className='user-redux-container'>
                    <div className='title'>User Redux </div>
                    <div className='user-redux-body'></div>
                </div>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
