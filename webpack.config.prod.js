const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
    mode: 'production',
    output: {
        clean: true
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { 
                    from: "img/optimized",
                    to: "img/optimized",
                    noErrorOnMissing: true
                },
                {
                    from: "css",
                    to: "css"
                },
                {
                    from: "*.{ico,png,svg,webmanifest}",
                    to: "[name][ext]"
                },
                {
                    from: "CNAME",
                    to: "CNAME"
                }
            ],
        }),
    ],
});
