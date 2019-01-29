//处理less
import cssHook from 'css-modules-require-hook/preset'
import assetHook from 'asset-require-hook'
assetHook({
    extensions:['png','jpg'],
    name:'[name].[ext]',
    publicPath:'static/images/'

})

import {Readable} from 'stream'
let tagClose = new Readable()
const express = require('express')
const server = express()
const path = require('path')

import React from 'react';
import { renderToNodeStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import Route from '../src/route'

server.use(express.static(path.resolve('dist')))

server.use((req, res, next) => {
    if(req.url.startsWith('/user/') || req.url.startsWith('/static/')){
        return next()
      }
    const context = {}
    const ReactSSR = renderToNodeStream(
        (
            <StaticRouter location={req.url}
                context={context}>
                <Route />
            </StaticRouter>
        )
    )
    
    const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                <title>Document</title>
                <link rel="stylesheet"  href="styles.css"/>
            </head>
            <body>
                <noscript>
                    You need to enable JavaScript to run this app.
                </noscript>
                <div id="root">`

    res.writeHead(200,{
        'Content-Type':'text/html'
    })
    res.write(html)
    ReactSSR.pipe(res,{end:false})

    ReactSSR.on('end',function(){
        
        res.write(
                `</div>
            </body>
        </html>`)
        res.end()

    })
})

server.listen(9999, function () {
    console.log('runnig9999...');

})