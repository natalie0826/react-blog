import React from 'react';
import { Button, Input, notification  } from 'antd';

import { api } from '../../../tools/ajax-tool';
import { BASE_URL } from '../../../constants/urls';

const { TextArea } = Input;

export default class CommentCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            commentText: '',
            warning: ''
        }
    }

    handleChange = event => {
        this.setState({commentText: event.target.value});
    }

    commentCreate = () => {
        if (this.state.commentText.length === 0) {
            this.setState({ warning: 'Please, enter the comment text before submitting' });
        } else {
            const comment = {
                userId: this.props.user.get('id'),
                postId: this.props.postId,
                text: this.state.commentText,
                previousId: this.props.previousId,
                prevAuthor: ''
            };
            api
                .post(`${BASE_URL}/comments`, JSON.stringify(comment))
                .then(res => {
                    if (res.data.status === false) {
                        this.openNotificationWithIcon('error', 'Please, try again. Something goes wrong.');
                        // dispatch(createCommentFailure(res.data.message));
                    } else {
                        this.openNotificationWithIcon('success', 'Congratulations! Your comment has been successfully added.');
                        // dispatch(createCommentSuccess(res.data));
                    }
                })
                .catch(error => this.openNotificationWithIcon('error', 'Please, try again. Something goes wrong.')
                /*dispatch(createCommentFailure(error))*/
            );
            this.setState({commentText: ''});
        }
    }

    openNotificationWithIcon = (type, text) => {
        notification[type]({
            message: 'Comment create status',
            description: text,
        });
    };

    render() {
        return (
            this.props.isAuth ? <div>
                <TextArea
                    placeholder="Enter your comment here, please"
                    autosize={{ minRows: 2, maxRows: 6 }}
                    value={this.state.commentText}
                    onChange={this.handleChange}
                />
                <div style={{'display': 'flex', 'justufy-content': 'space-between', 'marginTop': '20px'}}>
                    {this.state.warning && <p style={{'color': 'red'}}>{this.state.warning}</p>}
                    <Button onClick={this.commentCreate} style={{'margin-left': 'auto'}}>Add comment</Button>
                </div>
            </div> : null
        );
    }
}
