import { connect } from 'react-redux';

import CommentCreate from '../components/common/CommentCreate/CommentCreate';

const mapStateToProps = (state, props) => {

    return {
        user: state.getIn(['auth', 'user']),
        isAuth: state.getIn(['auth', 'isAuth'])
    }
};

export const CommentCreateContainer = connect(
    mapStateToProps,
    null,
)(CommentCreate);
