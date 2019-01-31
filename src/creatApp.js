import React, { Component } from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Route from './route'
import Store from './store'


export default class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <Router>
                    <Route />
                </Router>
            </Provider>

        )
    }
}