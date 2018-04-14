import React from 'react';
import GoogleLogin from 'react-google-login';

export const Auth = ({ signInGoogle }) => {
    const responseGoogle = (res) => {
        console.log('response from google', res);
        const postData = {
            name: res.w3.ig,
            provider: 'google',
            email: res.w3.U3,
            token: res.Zi.access_token,
        };
        signInGoogle();
    };

    return (
        <GoogleLogin
            className="button google"
            clientId="672658121417-enp7uld7q92vrdlms2keir3jn8mtpsit.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
        >
            <span>SignIn with Google</span>
        </GoogleLogin>
    );
};
