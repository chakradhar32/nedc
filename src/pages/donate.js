import React from 'react'
import Header from '../../components/Donate/Header';
import Data from '../../components/Donate/Data';
import App from '../../components/Donate/App';
import Map from '../../components/Donate/Map';
import Card from '../../components/Donate/Card';

const donate = () => {
    return (
        <div>
            <Header />
            <Data />
            <App />
            <Map />
            <Card />
        </div>
    )
}

export default donate