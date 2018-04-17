import React from 'react';
import GoogleLogin from 'react-google-login';

export const AuthModal = ({ signInGoogle }) => {
    const responseGoogle = (res) => {
        
        const postData = {
            name: res.w3.ofa,
            surname: res.w3.wea,
            email: res.w3.U3,
            token: res.Zi.access_token,
            avatar: res.w3.Paa
        };
        console.log('response from google', postData);
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
