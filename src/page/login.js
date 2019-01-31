import React, { Component } from 'react'
import styles from './login.less'
import store from '../store'

export default class login extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            count: store.getState().count,
            text: store.getState().hello
        }
    }
    onincrement() {
        store.dispatch({
            type: 'increment'
        })
    }
    render() {
        store.subscribe(() => {
            this.setState({
                count: store.getState().count,
                text: store.getState().hello

            })
            console.log("Store is changed: " + store.getState().count)
        })
        return (
            <div className={styles.login}>i am login!!
                <div className={styles.child}>child</div>
                <img src={require('../img/chuan.png')} alt="" />
                <div className={styles.chuan}></div>
                <div>{this.state.text}{this.state.count}</div>
                <button type="button" onClick={this.onincrement.bind(this)}>+1</button>
            </div>
        )

    }
}
