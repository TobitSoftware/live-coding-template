import HtmlWebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';
import webpack from 'webpack';
import path from 'path';

import common from './common';

const ROOT_PATH = path.resolve('./');

export default merge(
    common,
    {
        mode: 'development',
        output: {
            filename: '[name].bundle.js',
        },
        devServer: {
            historyApiFallback: true,
            disableHostCheck: true,
            host: '0.0.0.0',
            compress: true,
            port: 8080,
            hot: true
        },
        devtool: 'inline-source-map',
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(ROOT_PATH, 'src/index.dev.html')
            }),
            new webpack.DefinePlugin({
                __DEV__: true,
                __STAGING__: false,
                __PROD__: false,
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.LoaderOptionsPlugin({
                debug: true
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
    }
);
