import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form, Icon, Input } from 'antd';

import './SignInModal.css';

const FormItem = Form.Item;

class SignInModal extends React.Component {
    static propTypes = {
        visible: PropTypes.bool.isRequired,
        close: PropTypes.func.isRequired,
        open: PropTypes.func.isRequired,
        signIn: PropTypes.func.isRequired,
        error: PropTypes.string.isRequired,
    };

    handleOk = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.signIn(values.email, values.password);
            }
        });
    }

    handleCancel = () => {
        this.props.close();
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        if (!this.props.visible) {
            return null;
        }
        
        const {
            visible,
            error,
            isLoading,
        } = this.props;

        let errorItem;

        if (visible && error) {
            errorItem = <span style={{ 'color': 'red' }}>{error}</span>;
        }

        return (
            <Modal
                visible={this.props.visible}
                title="Sign in"
                confirmLoading={isLoading}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
                    <Button key="submit" type="primary"  onClick={this.handleOk}>Sign in</Button>,
                ]}
            >
                <Form onSubmit={this.handleSubmit} className="login-form">
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
                    <FormItem hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    {errorItem}
                </Form>
            </Modal>
        );
    }
};

export default Form.create()(SignInModal);
