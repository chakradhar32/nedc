import React from 'react'
import About from '../../components/About/About';
import Text from '../../components/About/Text';
import Map from '../../components/About/Map';
import Pie from '../../components/About/Pie';
import Data from '../../components/About/Data';
import Author from '../../components/About/Author';
import Info from '../../components/About/Info';

const about = () => {
    return (
        <div>
            <About />
            <Text />
            <Map />
            <Pie />
            <Data />
            <Author />
            <Info />
        </div>
    )
}

export default about