import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Icon, Divider, Button } from 'antd';

export const PostVertical = (props) => {
    PostVertical.propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };

    return (
        <Link to="/post/1" style={{ textDecoration: 'none' }}>
            <div className="card">
                <div className="card__image">
                    <img src="https://images.unsplash.com/photo-1509227035009-4bef0b738dd3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92ba209a4e60bf47921d3ad689829adf&auto=format&fit=crop&w=666&q=80" alt="" />
                </div>
                <div className="card__description">
                    <div className="info">
                        {/* <span class="line _long"></span>
                <span class="line _short"></span> */}
                        <h1 className="info__title">Some more posts</h1>
                        <div className="info__subtitle">
                            <span>Pina Chaudhary</span>
                            <span> - </span>
                            <span className="info__subtitle--light">15 jul 2018</span>
                        </div>
                        <hr className="info__divider" />
                        <p className="info__text">The publisher invested $35 million in Ubisoft Winnipeg hiring people, who can help build new tech to improve Ubisoft’s world-building tech.</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};