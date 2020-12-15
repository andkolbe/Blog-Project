import * as React from 'react';
import Layout from '../components/Layout';

const Login: React.FC<LoginProps> = props => { 
    return (
        <Layout>
            <h1 className="text-center">Login</h1>
        </Layout>
    );
}

interface LoginProps {}

export default Login;