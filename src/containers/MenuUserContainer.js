import { connect } from 'react-redux';

import { MenuUser } from '../components/partials/MenuMain/MenuUser/MenuUser';

const mapStateToProps = state => ({
    name: state.getIn(['auth', 'user', 'name']),
    surname: state.getIn(['auth', 'user', 'surname']),
    avatarUrl: state.getIn(['auth', 'user', 'avatarUrl']),
});

export const MenuUserContainer = connect(
    mapStateToProps,
    null,
)(MenuUser);
