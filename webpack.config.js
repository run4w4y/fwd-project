const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
    target: 'web',
    module: {
        rules: [
            {
                test: /\.([cm]?ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    output: {
        path: outputPath,
        filename: 'bundle.js',
    },
}
