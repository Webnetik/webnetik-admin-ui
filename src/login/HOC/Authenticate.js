import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from '../actions/login';

export const AuthenticatorContext = React.createContext(null);

const Authenticate = (ComposedComponent) => {
    class WithAuthenticate extends Component {
        async componentDidMount() {
            await this.props.authenticateUser();
        }

        render() {
            let { token } = this.props.login;

            if(!!token) {
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

    function mapStateToProps(state) {
        return {
            login: state.login
        }
    }

    return connect(mapStateToProps, { authenticateUser })(WithAuthenticate);
};

export default Authenticate;