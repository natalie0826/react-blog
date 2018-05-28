import React from 'react';
import { Button, Input } from 'antd';

const { TextArea } = Input;

export default class CommentCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            commentText: '',
            warning: '',
        }
    }

    handleChange = event => {
        this.setState({commentText: event.target.value});
    }

    commentCreate = () => {
        if (this.state.commentText.length === 0) {
            this.setState({ warning: 'Please, enter the comment text before submitting' });
        }
    }

    render() {
        return (
            <div>
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
            </div>
        );
    }
}
