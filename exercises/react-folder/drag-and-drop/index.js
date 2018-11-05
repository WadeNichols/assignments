import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContextProvider } from 'react-dnd';
import GameProvider from "./GameProvider"

ReactDOM.render(
    <DragDropContextProvider backend={HTML5Backend}>
        <GameProvider>
            <App />
        </GameProvider>
    </DragDropContextProvider>
    ,
    document.getElementById('root'));


