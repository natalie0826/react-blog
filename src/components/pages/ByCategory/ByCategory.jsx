import React from 'react';
import PropTypes from 'prop-types';
import { OrderedMap } from 'immutable';
import { Row, Col } from 'antd';

import { VerticalGrid } from '../../partials/VerticalGrid/VerticalGrid';

export default class ByCategory extends React.Component {

    static propTypes = {
        posts: PropTypes.instanceOf(OrderedMap).isRequired
    }

    renderPosts = (posts, categoryId) => {
        if (categoryId % 2 === 0) {
            return (
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <VerticalGrid posts={this.props.posts} columns={4} />
                    </Col>
                </Row>
            )
        } else {
            return (
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <VerticalGrid posts={this.props.posts} columns={4} />
                    </Col>
                </Row>
            )
        }
    }

    render() {
        const categoryId = parseInt(this.props.match.params.id, 10);

        return this.renderPosts(this.props.posts, categoryId);
    }
}
