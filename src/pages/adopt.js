import React from 'react'
import Header from '../../components/Adopt/Header';
import About from '../../components/Adopt/About';
import Data from '../../components/Adopt/Data';
import Map from '../../components/Adopt/Map';
import App from '../../components/Adopt/App';
import Layout from '../../components/Layout/index';

const adopt = () => {
    return (
        <Layout>
            <div>
                <Header />
                <About />
                <Data />
                <Map />
                <App />
            </div>
        </Layout>
    )
}

export default adopt