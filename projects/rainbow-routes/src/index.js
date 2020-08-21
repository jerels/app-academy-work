import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Rainbow from './components/Rainbow';
import './index.css';

const Root = () => (
    <BrowserRouter>
        <Rainbow />
    </BrowserRouter>
)

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Root />,
        document.getElementById('root')
    );
});