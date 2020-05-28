const base = require('./webpack.base')()
const merge = require('webpack-merge')

module.exports = function (env, args) {
    return merge(base, {
        mode: 'production'
    })
}
