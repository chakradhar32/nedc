import React from 'react'
import Board from '../../components/Board/Board';
import Data from '../../components/Board/Data';
import Author from '../../components/Board/Author';


const board = () => {
    return (
        <div>
            <Board />
            <Data />
            <Author />
        </div>
    )
}

export default board