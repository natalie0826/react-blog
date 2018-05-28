import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

import Comment from '../../common/Comment/COmment';

import { api } from '../../../tools/ajax-tool';
import { BASE_URL } from '../../../constants/urls';
import { buildHierarchy } from '../../../tools/comment-tool';

export default class CommentList extends React.Component {
    static propTypes = {
        postId: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            commentsReceived: false
        }
    }

    componentDidMount() {
        const url = `${BASE_URL}/posts/${this.props.postId}/comments`
        api
          .get(url)
          .then(res => {
              if (res.data.status === false) {
                  console.log('failure', res.data.message);
                  // dispatch(fetchCommentsByPostFailure(res.data.message, postId));
              } else {
                  console.log('COMMENTS', res.data);
                  this.setState({ comments: buildHierarchy(res.data), commentsReceived: true });
                  // dispatch(fetchCommentsByPostSuccess(postId, res.data));
              }
          })
          .catch(error => {
              console.log('failure', error);
              // dispatch(fetchCommentsByPostFailure(error, postId));
          });
    }

    render() {
        console.log('HIERARCHY', this.state.comments);
        return (
            <div>
                {(!this.state.comments && !this.state.commentsReceived) && <Spin />}
                {(this.state.comments.length < 1 && this.state.commentsReceived)
                    ? <h3>There are no comments. Be first!</h3>
                    : this.state.comments.map(comment => <Comment comment={comment} key={comment.id} />)
                }
            </div>
        )
    }
}
