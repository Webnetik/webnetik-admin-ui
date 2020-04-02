import React, { Component } from 'react';
import { authenticateUserOnLoginPage } from '../actions/login';

export const AuthenticatorContext = React.createContext(null);

const WithoutAuthenticate = (ComposedComponent) => {
    class WithoutAuthenticateHOC extends Component {
        state = {
            token: null
        };

        async componentDidMount() {
            try {
                const { status, token } = await authenticateUserOnLoginPage('/');
            } catch (err) {
                console.log('error', err);
            }
        }

        render() {
            let { token } = this.state;

            if(!!!token) {
                return (
                    <AuthenticatorContext.Provider value={token}>
                        <ComposedComponent/>
                    </AuthenticatorContext.Provider>
                );
            } else {
                return null;
            }
        }
    }

    return WithoutAuthenticateHOC;
};

export default WithoutAuthenticate;