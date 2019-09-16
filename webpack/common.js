import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import autoprefixer from 'autoprefixer';
import path from 'path';

const ROOT_PATH = path.resolve('./');

export default {
    entry: {
        "live-coding": path.resolve(ROOT_PATH, 'src/index.jsx')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: '[name].bundle.js?[hash]',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                postcssFlexbugsFixes,
                                autoprefixer({ flexbox: 'no-2009' })
                            ]
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    }
};
