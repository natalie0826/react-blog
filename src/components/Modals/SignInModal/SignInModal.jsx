import React from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import { Modal, Button, Form, Icon, Input, Checkbox } from 'antd';

import './SignInModal.css';

const FormItem = Form.Item;

class SignInModal extends React.Component {
    static propTypes = {
        // signInGoogle: PropTypes.func.isRequired,
        visible: PropTypes.bool.isRequired,
        close: PropTypes.func.isRequired,
        open: PropTypes.func.isRequired
    };

    responseGoogle = (res) => {
        const postData = {
            name: res.w3.ofa,
            surname: res.w3.wea,
            email: res.w3.U3,
            token: res.Zi.access_token,
            avatar: res.w3.Paa
        };
        this.props.signInGoogle();
    };

    handleOk = () => {
        console.log('handle OK');
    }

    handleCancel = () => {
        this.props.close();
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        if (!this.props.visible) {
            return null;
        }

        return (
            <Modal
                visible={this.props.visible}
                title="Title"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="back" onClick={this.handleCancel}>Return</Button>,
                    <Button key="submit" type="primary"  onClick={this.handleOk}>
                    Submit
                    </Button>,
                ]}
            >
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        <h4>Sign in with</h4>
                        <Icon type="google" style={{ fontSize: 20, color: '#d34836' }}>
                            <GoogleLogin
                                className="button google"
                                clientId="672658121417-enp7uld7q92vrdlms2keir3jn8mtpsit.apps.googleusercontent.com"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                            />
                        </Icon>
                    </FormItem>
                </Form>
            </Modal>
        );
    }
};

export default Form.create()(SignInModal);
