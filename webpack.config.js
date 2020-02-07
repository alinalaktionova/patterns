const path = require('path');


module.exports = {
    devtool: 'inline-source-map',
    mode: "development",
    entry: './src/behavioral_patterns/memento/index.ts',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        contentBase: "./dist",
        port: 1488
    }
};