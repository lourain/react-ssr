const lessParser = require('postcss-less').parse
const less = require('less')
module.exports = {
    extensions: ['.less'],
    generateScopedName: '[name]__[local]___[hash:base64:5]',
    processorOpts: {parser: lessParser},
    
}
