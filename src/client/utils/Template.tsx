import * as React from 'react';
import Layout from '../components/Layout';

const Template: React.FC<TemplateProps> = props => { // FC stands for function component. Template is a function component
    return (
        <Layout>
            <h1 className="text-center">Template</h1>
        </Layout>
    );
}

interface TemplateProps {}

export default Template;