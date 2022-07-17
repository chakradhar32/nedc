import React from 'react'
import Board from '../../components/Board/Board';
import Data from '../../components/Board/Data';
import Author from '../../components/Board/Author';
import Layout from '../../components/Layout/index';


const board = () => {
    return (
        <Layout>
            <div>
                <Board />
                <Data />
                <Author />
            </div>
        </Layout>
    )
}

export default board