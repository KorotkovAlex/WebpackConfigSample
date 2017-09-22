const webpack = require('webpack');

module.exports = [
    {
        name: 'vendor',
        entry: {
            'react-router-redux':['react-router-redux'],
            'react':['react','react-dom'],
            'react-redux':['react-redux'],
            'react-router':['react-router'],
            'redux':['redux'],
            'prop-types':['prop-types'],
            'redux-saga':['redux-saga'],
        },
        output: {
            path: __dirname + '/dist/vendors',
            publicPath: "/dist/",
            filename: '[name].js',
            libraryTarget: 'umd', 
        },
        module: {
            loaders: [
                {
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015','react','stage-2'],
                        plugins: [
                            'transform-runtime'
                        ],
                    }
                }
            ],          
        },
        plugins: [
            new webpack.DllPlugin({  
                path: __dirname + '/dist/manifest/[name]-manifest.json',
                name: '[name]'
            })
        ],
    },
    {
        name: 'common',
        dependencies: ['vendor'],
        resolve: {
            extensions: ['.js', '.jsx']
        },
        externals: [{
            common: 'common'
        }],
        entry: {
            admin: './src/components/admin',
            menu: './src/components/menu',
            common: './src/components/common'
        },
        output: {
            path: __dirname + '/dist',
            filename: '[name].js',
            libraryTarget: 'umd',
            publicPath:'/dist/',
        }, 
        module: {
            loaders: [
                {
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015','react','stage-2'],
                        plugins: [
                            'transform-runtime',
                        ],
                    }
                }
            ],
        },
        plugins: [
            new webpack.DllReferencePlugin({
                manifest: require(__dirname + '/dist/manifest/react-manifest.json'),
                sourceType: 'umd',
                name:'react'
            }),
            new webpack.DllReferencePlugin({
                manifest: require(__dirname + '/dist/manifest/prop-types-manifest.json'),
                sourceType: 'umd',
                name:'prop-types'
            }),
            new webpack.DllReferencePlugin({
                manifest: require(__dirname + '/dist/manifest/react-redux-manifest.json'),
                sourceType: 'umd',
                name:'react-redux'
            }),
            new webpack.DllReferencePlugin({
                manifest: require(__dirname + '/dist/manifest/react-router-manifest.json'),
                sourceType: 'umd',
                name:'react-router'
            }),
            new webpack.DllReferencePlugin({
                manifest: require(__dirname + '/dist/manifest/react-router-redux-manifest.json'),
                sourceType: 'umd',
                name:'react-router-redux'
            }),
            new webpack.DllReferencePlugin({
                manifest: require(__dirname + '/dist/manifest/redux-manifest.json'),
                sourceType: 'umd',
                name:'redux'
            }),
            new webpack.DllReferencePlugin({
                manifest: require(__dirname + '/dist/manifest/redux-saga-manifest.json'),
                sourceType: 'umd',
                name:'redux-saga'
            })
        ]
    }
];