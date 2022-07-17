import React from 'react'
import Header from '../../components/Contact/Header'
import About from '../../components/Contact/About'
import Layout from '../../components/Layout/index'

const contact = () => {
    return (
        <Layout>
            <div>
                <Header />
                <About />
            </div>
        </Layout>

    )
}

export default contact