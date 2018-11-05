import React from 'react';

import { withGameContext } from './GameProvider';
import { DropTarget } from "react-dnd";

import { Types } from './lib/constants';

const spec = {
    drop({ moveTo, x, y }) {
        moveTo(x, y)
    },
    canDrop({ x, y, position }) {
        return (
            (Math.abs(x - position[0]) === 1 && Math.abs(y - position[1]) === 2) ||
            (Math.abs(x - position[0]) === 2 && Math.abs(y - position[1]) === 1)
        )
    }
}

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        canDrop: monitor.canDrop(),
        isOver: monitor.isOver()
    }
}

const styleBackground = (canDrop, isOver) => {
    if (canDrop && isOver) return "green";
    if (!canDrop && isOver) return "red";
    if (canDrop && !isOver) return "yellow";
    return "initial";
}

function Square({ connectDropTarget, canDrop, isOver, children }) {
    const squareStyle = {
        backgroundColor: styleBackground(canDrop, isOver)
    }
    return (
        connectDropTarget(
            <div className="square" style={squareStyle}>
                {children}
            </div>
        )
    )
}

export default withGameContext(DropTarget(Types.PIECE, spec, collect)(Square))
