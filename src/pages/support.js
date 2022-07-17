import React from 'react';
import Header from '../../components/Support/Header';
import About from '../../components/Support/About';
import Input from '../../components/Support/Input';
import Data from '../../components/Support/Data';
import Form from '../../components/Support/Form';
import Layout from '../../components/Layout/index';

const support = () => {
    return (
        <Layout>
            <div>
                <Header />
                <About />
                <Input />
                <Data />
                <Form />
            </div>
        </Layout>
    )
}

export default support