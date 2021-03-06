import { connect } from 'react-redux';

import CommentList from '../components/partials/CommentList/CommentList';

const mapStateToProps = (state, props) => {

    return {
        isAuth: state.getIn(['auth', 'isAuth'])
    }
};

export const CommentListContainer = connect(
    mapStateToProps,
    null,
)(CommentList);
