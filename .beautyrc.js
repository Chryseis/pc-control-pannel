const path = require('path')
const package = require('./package')

module.exports = {
    entry: {
        cp: ['@babel/polyfill', path.resolve(__dirname, './src/index')]
    },
    isCssModule: true,
    splitChunks: {},
    chunks: ['cp'],
    babelPlugins: [["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }]],
    isRem: false,
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: `js/[name].${package.version}.js`,
        library: 'panel',
        libraryTarget: 'umd',
    }
}