import React from 'react'
import styles from './text.less'
 export default class Text extends React.Component {
    constructor(){
        super()
    }
    render(){

        return (
            <div className={styles.text}>wo shi test!</div>
        )
    }
 }