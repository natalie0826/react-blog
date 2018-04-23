import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Icon, Divider, Button } from 'antd';

export const PostVerticalLittle = (props) => {
    PostVerticalLittle.propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    };

    return (
        <Link to={`/post/${props.id}`} style={{ textDecoration: 'none' }}>
            <div className="card card--first">
                <div className="card__image">
                    <img src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-0.3.5&s=177fa5618e070b6d13cf5debd2034426&auto=format&fit=crop&w=772&q=80" alt="" />
                </div>
                <div className="card__description card__description--little">
                    <div className="info">
                        {/* <span class="line _long"></span>
                        <span class="line _short"></span> */}
                        <h1 className="info__title info__title--little">Some more posts</h1>
                        <div className="info__subtitle info__subtitle--little">
                            <span>Pina Chaudhary</span>
                            <span> - </span>
                            <span className="info__subtitle--light">15 jul 2018</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};