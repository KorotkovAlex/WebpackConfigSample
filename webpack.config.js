const webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var vendors = {
    'react': 'react',
    'prop-types': 'prop-types',
    'react-redux': 'react-redux',
    'react-router':'react-router',
    'redux': 'redux',
    'redux-saga':'redux-saga',            
    'react-router-redux': 'react-router-redux'
}
  
function getDllReferencePlugin(vendors) {
    var plugins = [];
    for (var vendor in vendors) {
        var plugin = new webpack.DllReferencePlugin({
            manifest: require(__dirname + '/dist/manifest/' + vendor + '-manifest.json'),
            sourceType: 'umd',
            name:vendor
        });
        plugins.push(plugin);
    }
    plugins.push(new webpack.HashedModuleIdsPlugin({
        hashFunction: 'sha256',
        hashDigest: 'hex',
        hashDigestLength: 20
    })
    );
    return plugins;
}

var plugins = getDllReferencePlugin(vendors);
plugins.push(
    new BundleAnalyzerPlugin(
        {
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8887,
            reportFilename: 'analyzer.html'
        }
    )
);

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
        plugins: plugins
    }
];