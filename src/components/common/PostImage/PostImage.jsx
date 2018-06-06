import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Popconfirm, message } from 'antd';

import './PostImage.css';

export default class PostImage extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        image: PropTypes.string.isRequired,
        showButtons: PropTypes.bool
    };

    static defaultProps = {
        showButtons: false,
        id: -1
    };

    confirm = (e) => {
        console.log('confirn', e.target.value);
        message.success('Click on Yes');
        this.props.deletePost(this.props.id);
        this.setState({'isDeleted': true});
    }

    cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    }

    render() {
        return (
            <div className="post-card__image" style={{ 'backgroundImage': `url("${this.props.image}")` }}>
                {this.props.showButtons ?
                    <div className="manage-post">
                        {/* <Link to={`/post/${this.props.id}/edit`}>
                        <Button shape="circle" icon="edit" style={{'marginRight': '10px'}} />
                    </Link> */}
                    <Popconfirm title="Are you sure delete this post?" onConfirm={this.confirm} onCancel={this.cancel} okText="Yes" cancelText="No">
                        <Button shape="circle" icon="delete" />
                    </Popconfirm>
                </div> : ''}
            </div>
        );
    }
}
