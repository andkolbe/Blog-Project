import * as React from 'react';
import Layout from '../components/Layout';

const Donate: React.FC<DonateProps> = props => { 
    return (
        <Layout>
            <h1 className="text-center">Donate</h1>
        </Layout>
    );
}

interface DonateProps {}

export default Donate;