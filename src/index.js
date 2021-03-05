import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import {HashRouter} from 'react-router-dom'

ReactDom.render(<HashRouter><App/></HashRouter>, 
    document.getElementById("app")
)