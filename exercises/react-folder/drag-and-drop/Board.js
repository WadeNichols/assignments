import React from 'react';

import Piece from "./Piece";
import Square from "./Square";

import { withGameContext } from "./GameProvider";

function Board({ n, position }) {
    const [x, y] = position;
    const genGrid = n => {
        const grid = [];
        for (let i = 0; i < (n * n); i++) {
            const squareX = i % n;
            const squareY = Math.floor(i / n)
            const piece = (squareX === x && squareY === y) ? <Piece /> : null;
            grid.push(
                <Square x={squareX} y={squareY} key={i}>
                    {piece}
                </Square>
            )
        }
        return grid
    }
    return (
        <div className="board-wrapper">
            {genGrid(n)}
        </div>
    )
}

export default withGameContext(Board)
