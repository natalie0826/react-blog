import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Form, Select, Button, Upload, Icon, Input, notification, Badge } from 'antd';
import { api } from '../../../tools/ajax-tool';
import { BASE_URL } from '../../../constants/urls';

import './PostEditor.css';

  const FormItem = Form.Item;
  const Option = Select.Option;

const { TextArea } = Input;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  class PostEditor extends React.Component {
    static propTypes = {
      tags: PropTypes.instanceOf(List).isRequired,
      categories: PropTypes.instanceOf(List).isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            post: {},
            showImage: true
        }
    }

    componentDidMount() {
        const postId = parseInt(this.props.match.params.id, 10);
        api
            .get(`${BASE_URL}/posts/${postId}`)
            .then(res => {
                if (res.data.status === false) {
                    console.log('failure');
                } else {
                    this.setState({post: res.data});
                }
            })
            .catch(error => console.log('failure'));
    }

    hideImage = () => {
        this.setState({showImage: false});
    }

    openNotificationWithIcon = (type) => {
        notification[type]({
          message: 'Post Success',
          description: 'New post has successfully been created.',
        });
      };

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
            // this.openNotification('success');
          console.log('Received values of form: ', values);
          values.imageUrl="placeholder";
          values.excerpt ="placeholder";
          values.userId ="1";
          this.props.createPost(values);
        }
      });
    }

    normFile = (e) => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }

    addValues = (values, key) => {
      const children = [];
      values.map(value =>
        children.push(<Option key={value.get(key)}>{value.get('name')}</Option>)
      );

      return children;
    }

    render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      };

      return (
        <div>
          <h1 style={{ 'textAlign': 'center' }}>{this.props.match.params.id ? 'Edit existing post' : 'Create new post'}</h1>
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="Please enter a title"
              hasFeedback
            >
              {getFieldDecorator('title', {
                rules: [
                  { required: true, message: 'Please enter a title' },
                ],
                initialValue: this.state.post.title
            })(<Input placeholder="Please enter a title" />)
              }
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Please enter a subtitle"
              hasFeedback
            >
              {getFieldDecorator('subtitle', {
                rules: [
                  { required: true, message: 'Please enter a subtitle' },
                ],
                initialValue: this.state.post.subtitle
              })(<Input placeholder="Please enter a subtitle" />)
              }
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Please select your category"
              hasFeedback
            >
              {getFieldDecorator('categoryId', {
                rules: [
                  { required: true, message: 'Please select your category!' },
                ],
                initialValue: this.state.post.category
              })(
                <Select placeholder="Please select your category">
                  {this.addValues(this.props.categories, 'id')}
                </Select>
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Please tags for your post"
            >
              {getFieldDecorator('tags', {
                rules: [
                  { required: true, message: 'Please tags for your post!', type: 'array' },
                ],
              })(
                  <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Please tags for your post"
                    onChange={handleChange}
                  >
                  {this.addValues(this.props.tags, 'name')}
                </Select>
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Please input post text"
            >
              {getFieldDecorator('text', {
                rules: [
                  { required: true, message: 'Please enter text!' },
                ],
                initialValue: this.state.post.text
              })(
                <TextArea
                  placeholder="Your text here..."
                  autosize={{ minRows: 12, maxRows: 30 }}
                />
              )}
            </FormItem>

{this.state.post.id && this.state.showImage &&
            <FormItem
              {...formItemLayout}
              label="Existing photo"
              hasFeedback
            >
                <div style={{ 'position': 'relative'}}>
                    <Badge count="X" style={{'cursor':'pointer'}} title="Delete" onClick={this.hideImage}>
                        <img src={this.state.post.imageUrl} style={{ 'height': '250px', width: 'auto'}} />
                    </Badge>
                </div>
          </FormItem>}

            <FormItem
              {...formItemLayout}
              label="Upload"
              extra="Upload main photo"
            >
              {getFieldDecorator('imageUrl11', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload name="logo" action="/upload.do" listType="picture">
                  <Button>
                    <Icon type="upload" /> Click to upload
                  </Button>
                </Upload>
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Dragger"
            >
              <div className="dropbox">
                {getFieldDecorator('dragger', {
                  valuePropName: 'fileList',
                  getValueFromEvent: this.normFile,
                })(
                  <Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                  </Upload.Dragger>
                )}
              </div>
            </FormItem>

            <FormItem wrapperCol={{ span: 12, offset: 6 }}>
              <Button type="primary" htmlType="submit">{this.props.match.params.id ? 'Save your post' : 'Create new post'}</Button>
            </FormItem>
          </Form>
        </div>
      );
    }
  }

export default Form.create()(PostEditor);
