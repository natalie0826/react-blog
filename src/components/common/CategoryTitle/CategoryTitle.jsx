import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Icon, Divider, Button } from 'antd';

export const CategoryTitle = (props) => {
    CategoryTitle.propTypes = {
        title: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
        children: PropTypes.element.isRequired
    };

    return (
      <div className="category-block">
        <p className="recent-posts__divider">
            <Link to={`/categories/${props.title}`} style={{ textDecoration: 'none' }}>
                <span className="recent-posts__title" style={{ 'backgroundColor': '#673AB7', 'padding': '0 5px', 'color': '#ffffff' }}>
                  {props.loading ? 'Loading' : props.title}
                </span>
            </Link>
            <span className="recent-posts__divider" style={{ 'borderColor': '#673AB7' }}></span>
        </p>
        {props.children}
      </div>
    );
}
