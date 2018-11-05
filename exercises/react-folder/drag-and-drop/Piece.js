import React from 'react';

import { DragSource } from "react-dnd";

import { Types } from "./lib/constants";

const spec = {
    beginDrag(props, monitor) {
        return {}
    }
}

const collect = (connect, monitor) => {
    return {
        dragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
}

function Piece({ dragSource, isOver, isDragging }) {
    const spanStyle = {
        opacity: isDragging ? .5 : 1,
        cursor: "pointer",
    }
    return (
        dragSource(
            <span className="piece"style={spanStyle}>♘</span>
        )
    )
}

export default DragSource(Types.PIECE, spec, collect)(Piece);
