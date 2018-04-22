import { connect } from 'react-redux';

import MenuMain from '../components/MenuMain/MenuMain';

const mapStateToProps = state => ({
    isAuth: state.getIn(['auth', 'isAuth']),
});

export const MenuMainContainer = connect(
    mapStateToProps,
    null
)(MenuMain);
