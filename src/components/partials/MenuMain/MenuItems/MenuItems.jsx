import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const { SubMenu, Item, ItemGroup } = Menu;

export default class MenuItems extends React.Component {

    static propTypes = {
        // loadCategories: PropTypes.func.isRequired,
        categories: PropTypes.bool.isRequired,
        // isLoading: PropTypes.bool.isRequired
    };

    capitalize = str =>
      str.charAt(0).toUpperCase() + str.slice(1);

    render() {
        // const loading = <Item key="1.1.1"><Spin /></Item>
        // const categories = this.props.categories.size > 1 && this.props.categories.map(category =>
        //         // <MenuItem linkTo={`/categories/${category.get('name')}`}  key={`1.1.${category.get('id')}`} text={category.get('name')} />
        //         <Item key={`1.1.${category.get('id')}`}>
        //             <Link to={`/categories/${category.get('id')}`} className="menu-main__links menu-main__links--light">
        //                 {this.capitalize(category.get('name'))}
        //             </Link>
        //         </Item>
        //     );

        return (
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['1']}
                className="menu-main__items"
            >
                <SubMenu key="1" title={<span><Icon type="star-o" />Posts</span>}>
                    <ItemGroup key="1.1" title="Categories" className="submenu-item">
                        {this.props.categories}
                    </ItemGroup>
                    <ItemGroup key="1.2" title="Other" className="submenu-item">
                        <Item key="1.2.1">
                            <Link to="/" className="menu-main__links menu-main__links--light">
                                Latest
                            </Link>
                        </Item>
                    </ItemGroup>
                </SubMenu>
                <Item key="2">
                    <Link to="/users" className="menu-main__links">
                        <Icon type="user" />Users
                    </Link>
                </Item>
                <Item key="3">
                    <Link to="/about" className="menu-main__links">
                        <Icon type="bulb" />About
                    </Link>
                </Item>
            </Menu>
        );
    }
};
