import React from 'react'
import Header from '../../components/Resource/Header'
import About from '../../components/Resource/About'
import Card from '../../components/Resource/Card'
import Layout from '../../components/Layout/index'

const resource = () => {
    return (
        <Layout>
            <div>
                <Header />
                <About />
                <Card />
            </div>
        </Layout>
    )
}

export default resource