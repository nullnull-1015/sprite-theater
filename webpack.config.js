const path = require('path');

module.exports = {
    entry: {
        bundle: './src/index.ts'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: 'SpriteTheater',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        open: true,
        static: {
            directory: path.join(__dirname, 'dist'),
        }
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts$/
            }
        ]
    }
}