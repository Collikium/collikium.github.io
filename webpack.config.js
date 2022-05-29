const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        app: ['./src/index.js', './src/entry-code-generator.js']
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    watch: true
}
