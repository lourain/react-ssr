import React, { Component } from 'react'
import styles from './login.less'
import store from '../store'
import request from '../request'
import * as action from '../store/reducers/actions'

export default class login extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            count: store.getState().count,
            text: store.getState().hello,
            data:store.getState().directory
        }
    }
    componentWillMount(){
        request('get','http://localhost:9999/api/directory')
            .then(res=>{
                store.dispatch(action.getDirectory(res))
            })
    }
    render() {

        store.subscribe(() => {
            // this.setState({
            //     count: store.getState().count,
            //     text: store.getState().hello,
            //     data:store.getState().directory
            // })
            // console.log("Store is changed: " + store.getState().count)
            console.log(store.getState().directory);
            
        })
        return (
            <div className={styles.login}>i am login!!
                <div className={styles.child}>child</div>
                <img src={require('../img/chuan.png')} alt="" />
                <div className={styles.chuan}></div>
                <div>{this.state.text}{this.state.count}</div>
                <button type="button" onClick={this.onincrement}>+1</button>
            </div>
        )

    }
}
