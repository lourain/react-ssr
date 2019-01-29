import React from 'react'
import styles from './login.less'
// import zhang from '../img/zhang.jpg'
// const zhang = require('../img/chuan.png')
// console.log(zhang);

export default ()=>{
    return (
        <div className={styles.login}>i am login!!
            <div className={styles.child}>child</div>
            <img src={require('../img/chuan.png')} alt=""/>
            <div className={styles.chuan}></div>
        </div>
    )
}