import HtmlWebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';
import webpack from 'webpack';
import path from 'path';

import common from './common';

const ROOT_PATH = path.resolve('./');

export default merge(
    common,
    {
        mode: 'production',
        devtool: 'none',
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(ROOT_PATH, 'src/index.html')
            }),
            new webpack.DefinePlugin({
                __DEV__: false,
                __STAGING__: false,
                __PROD__: true,
            }),
        ]
    }
);
