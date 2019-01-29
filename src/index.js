
import React from 'react'
import ReactDOM from 'react-dom'
import Text from './Text.js'
import { BrowserRouter as Router } from 'react-router-dom'
import Route from './route'

ReactDOM.render(
    <Router>
        <Route />
    </Router>
    ,
    document.getElementById('root')
)
