import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import {
    Form, Select, InputNumber, Switch, Radio, Button, Upload, Icon, Input, notification
  } from 'antd';
  const FormItem = Form.Item;
  const Option = Select.Option;
  const RadioButton = Radio.Button;
  const RadioGroup = Radio.Group;

const { TextArea } = Input;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  class PostEditor extends React.Component {
    static propTypes = {
      tags: PropTypes.instanceOf(List).isRequired,
      categories: PropTypes.instanceOf(List).isRequired
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
          this.props.createPost();
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

    addValues = values => {
      const children = [];
      values.map(value =>
        children.push(<Option key={value.get('id')}>{value.get('name')}</Option>)
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
          <h1 style={{ 'textAlign': 'center' }}>Create new post</h1>
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
              })(<Input placeholder="Please enter a subtitle" />)
              }
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Please select your category"
              hasFeedback
            >
              {getFieldDecorator('category', {
                rules: [
                  { required: true, message: 'Please select your category!' },
                ],
              })(
                <Select placeholder="Please select your category">
                  {this.addValues(this.props.categories)}
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
                  {this.addValues(this.props.tags)}
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
              })(
                <TextArea
                  placeholder="Your text here..."
                  autosize={{ minRows: 12, maxRows: 30 }}
                />
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Upload"
              extra="Upload main photo"
            >
              {getFieldDecorator('upload', {
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
              <Button type="primary" htmlType="submit">Create new post</Button>
            </FormItem>
          </Form>
        </div>
      );
    }
  }

export default Form.create()(PostEditor);
