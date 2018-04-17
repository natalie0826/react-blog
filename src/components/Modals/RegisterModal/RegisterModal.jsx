import React from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import { Modal, Button } from 'antd';

export default class RegisterModal extends React.Component {
    static propTypes = {
        // signInGoogle: PropTypes.func.isRequired,
        visible: PropTypes.bool.isRequired
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
    }

    handleCancel = () => {
        console.log('handle cancel');
    }

    render() {
        if (!this.props.modalMode) {
            return null;
        }

        return (
            <Modal
                visible={this.props.modalMode}
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
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
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
