import React from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import { Form, Input, Tooltip, Icon, Row, Col, Checkbox, Button, Modal } from 'antd';

const FormItem = Form.Item;

class RegisterModal extends React.Component {
    static propTypes = {
        // signInGoogle: PropTypes.func.isRequired,
        visible: PropTypes.bool.isRequired,
        close: PropTypes.func.isRequired,
    };

    responseGoogle = (res) => {
        const postData = {
            name: res.w3.ofa,
            surname: res.w3.wea,
            email: res.w3.U3,
            token: res.Zi.access_token,
            avatar: res.w3.Paa
        };
        console.log('response from google', postData);
        this.props.signInGoogle();
    };

    handleOk = () => {
        console.log('handle OK');
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // this.props.signIn(values.email, values.password);
            }
        });
    }

    handleCancel = () => {
      this.props.close();
    }

    render() {
        if (!this.props.visible) {
            return null;
        }
        const { getFieldDecorator } = this.props.form;   

        return (
            <Modal
                visible={this.props.visible}
                title="Sign up"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
                    <Button key="submit" type="primary" onClick={this.handleOk}>Sign Up</Button>,
                ]}
            >
      <Form onSubmit={this.handleSubmit}>
        <FormItem hasFeedback>
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Email" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
              min: 6, message: 'Your password shoulbe at least 6 charaters'
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
              min: 6, message: 'Your password shoulbe at least 6 charaters'
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
          })(
            <Input prefix={<Icon type="user-add" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Name" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('surname', {
            rules: [{ required: true, message: 'Please input your surname!', whitespace: true }],
          })(
            <div>
              <Input prefix={<Icon type="user-add" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Surname" />
            </div>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <div>
              <Checkbox>I have read the <a href="">agreement</a></Checkbox>
              <Tooltip title="You should read our agreement to be aware of our blog rules">
                  <Icon type="question-circle-o" />
              </Tooltip>
            </div>
          )}
        </FormItem>
      </Form>
            </Modal>
            // <GoogleLogin
            //     className="button google"
            //     clientId="672658121417-enp7uld7q92vrdlms2keir3jn8mtpsit.apps.googleusercontent.com"
            //     onSuccess={responseGoogle}
            //     onFailure={responseGoogle}
            // >
            //     <span>SignIn with Google</span>
            // </GoogleLogin>
        );
    }
};

export default Form.create()(RegisterModal);
