import React from 'react';

import './About.css';

export const About = () => {
    return (
        <div className="info-about-page">
            <div className="info-about">
                <h1>MORE.</h1>
                <p style={{'textAlign': 'center' }}>Today the blog on the intranet is one of the most convenient and popular places where you can find a lot of useful information, share your thoughts, find people who are also interested in such topics as you. Here you can subscribe to popular bloggers or those who break out ahead by rating.</p>
                <p style={{'textAlign': 'center' }}>The MORE Web site provides great opportunities in blogging. Here, the information is mainly related to information technology. You can choose any category and read it posts: programming, development and layout of sites, game development, design and interface, creating a career in IT and much more. On the site you can use the user-friendly interface and use the plan manager.</p>
            </div>
            <div className="info-about-image-page">
                <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-0.3.5&s=c1058ecb478c4833b4cbf3133d7d10f1&auto=format&fit=crop&w=1350&q=80" alt="" />
            </div>
        </div>
    );
};
