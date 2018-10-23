import React from 'react';
import { render } from 'react-dom';

import App from './App';
import Auth from "./Auth";


render(
    <Auth>
        <App />
    </Auth>,
    document.getElementById("root")
)



