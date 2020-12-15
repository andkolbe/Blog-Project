import * as React from 'react';
import Layout from '../components/Layout';

const Register: React.FC<RegisterProps> = props => { 
    return (
        <Layout>
            <h1 className="text-center">Register</h1>
        </Layout>
    );
}

interface RegisterProps {}

export default Register;