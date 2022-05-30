const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: ""
    },
    watch: true
}

// entry: {
//     app: ['./src/index.js']
// },