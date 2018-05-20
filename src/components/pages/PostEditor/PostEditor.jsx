import React from 'react';
import {
    Form, Select, InputNumber, Switch, Radio, Button, Upload, Icon, Input, notification
  } from 'antd';
  const FormItem = Form.Item;
  const Option = Select.Option;
  const RadioButton = Radio.Button;
  const RadioGroup = Radio.Group;

const children = [];
const { TextArea } = Input;

  children.push(<Option key="programming">programming</Option>);
  children.push(<Option key="html">html</Option>);
  children.push(<Option key="18">layout</Option>);
  children.push(<Option key="17">flexbox</Option>);
  children.push(<Option key="16">css</Option>);
  children.push(<Option key="15">gaming</Option>);
  children.push(<Option key="2">game</Option>);
  children.push(<Option key="3">developer</Option>);
  children.push(<Option key="4">code</Option>);
  children.push(<Option key="5">more</Option>);
  children.push(<Option key="6">history</Option>);
  children.push(<Option key="7">xml</Option>);
  children.push(<Option key="8">keyboard</Option>);
  children.push(<Option key="9">mouse</Option>);
  children.push(<Option key="14">laptop</Option>);
  children.push(<Option key="13">flex</Option>);
  children.push(<Option key="12">float</Option>);
  children.push(<Option key="11">technology</Option>);
  children.push(<Option key="10">website</Option>);

  function handleChange(value) {
    console.log(`selected ${value}`);
  }



  class PostEditor extends React.Component {
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
                  <Option value="programming">Programming</Option>
                  <Option value="website">Website dev</Option>
                  <Option value="game">Game dev</Option>
                  <Option value="careers">Careers in IT</Option>
                  <Option value="use">Interfaces</Option>
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
                  {children}
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
