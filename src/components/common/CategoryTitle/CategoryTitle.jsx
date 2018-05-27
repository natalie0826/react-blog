import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const CategoryTitle = (props) => {
    CategoryTitle.propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        loadStatus: PropTypes.string.isRequired,
        children: PropTypes.element.isRequired
    };

    return (
      <div className="category-block">
        <p className="recent-posts__divider">
            <Link to={`/categories/${props.id}`} style={{ textDecoration: 'none' }}>
                <span className="recent-posts__title" style={{ 'backgroundColor': '#673AB7', 'padding': '0 5px', 'color': '#ffffff' }}>
                  {props.loadStatus === 'start' ? 'Loading' : props.title}
                </span>
            </Link>
            <span className="recent-posts__divider" style={{ 'borderColor': '#673AB7' }} />
        </p>
        {props.children}
      </div>
    );
}
