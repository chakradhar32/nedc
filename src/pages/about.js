import React from 'react'
import About from '../../components/About/About';
import Text from '../../components/About/Text';
import Map from '../../components/About/Map';
import Pie from '../../components/About/Pie';
import Data from '../../components/About/Data';
import Author from '../../components/About/Author';
import Info from '../../components/About/Info';
import Layout from '../../components/Layout/index';

const about = () => {
    return (
        <Layout>
            <div>
                <About />
                <Text />
                <Map />
                <Pie />
                <Data />
                <Author />
                <Info />
            </div>
        </Layout>
    )
}

export default about