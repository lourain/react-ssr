import React from 'react'
import {
    Route
} from 'react-router-dom'
import Intro from './page/intro'
import Login from './page/login'
import Text from './Text'
export default ()=>{
    return [
        <Route path='/' component={Login} key="login" exact/>,
        <Route path='/intro' component={Intro} key="intro"/>,      
        <Route path='/text' component={Text} key="text"/>,      
    ]
}
