require('es6-promise').polyfill()
require('isomorphic-fetch')
export default (method,url,data)=>{
    let opts={
        method:method,
        mode:'cors',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }
    return new Promise((resolve,reject)=>{
        fetch(url,opts)
            .then(response=>response.json())
            .then(res=>{
                resolve(res)
            })
            .catch(err=>{
                reject(err)
            })
            
    })
}