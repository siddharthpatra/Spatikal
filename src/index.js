import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import {BrowserRouter} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

const app = (
    <BrowserRouter>
        <ScrollToTop/>
        <App/>
    </BrowserRouter>
)

ReactDom.render(app, document.getElementById("app")
)