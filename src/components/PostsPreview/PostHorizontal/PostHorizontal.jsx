import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Icon, Divider, Button } from 'antd';
// TODO
// add min-height + overflow: hidden + border-radius in parent container
// common folder
// PostCard.jsx (props: vertical - default + horizontal: true, text send/don't)
// PostHeader.jsx  (title, author, date)
// PostText.jsx (divider + text)
// PostMeta.jsx (divider long, comment, minutes to read)

// PostCardSlide

export const PostHorizontal = () => {
    PostHorizontal.propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };

    return (
        <Link to="/post/1" style={{ textDecoration: 'none' }}>
            <div className="post-horizontal-container">
                <div className="post-horizontal-image" style={{ 'backgroundImage': 'url("https://images.unsplash.com/photo-1484544808355-8ec84e534d75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc1407c2a550b0ebf3def8b81fa7b4a2&auto=format&fit=crop&w=766&q=80")' }} />
                <div className="post-horizontal">
                    <h1 className="post-horizontal-title">Everything You Need to Know About Painting Your House, Except for How to Do It</h1>
                    <div className="info__subtitle">
                        <span>Pina Chaudhary</span>
                        <span> - </span>
                        <span className="info__subtitle--light">15 jul 2018</span>
                    </div>
                    <hr className="info__divider" />
                    <p className="info__text info__text-no-margin">The publisher invested $35 million in Ubisoft Winnipeg hiring people, who can help build new tech to improve Ubisoft’s world-building tech.</p>
                    <Divider />
                    <div className="info__footer info__footer-margin">
                        <span className="info__comments">
                            <Icon type="message" />5 comments
                        </span>
                        <span className="info__time-read">
                            <Icon type="dashboard" />3 minutes read
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};