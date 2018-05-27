import { connect } from 'react-redux';

import ByCategory from '../components/pages/ByCategory/ByCategory';

const mapStateToProps = (state, props) => {
    const categoryId = parseInt(props.match.params.id, 10);
    
    return {
        posts: state.getIn(['posts', categoryId, 'posts']),
    }
};

export const ByCategoryContainer = connect(
    mapStateToProps,
    null,
)(ByCategory);
