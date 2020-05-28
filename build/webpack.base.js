module.exports = function (env, args) {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.png$/,
                    use: 'url-loader'
                }
            ]
        }
    }
}
