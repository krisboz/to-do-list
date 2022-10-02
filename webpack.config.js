const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = {
    mode:"development",
    entry: "./src/index.js",
    devtool:"inline-source-map",
    devServer:{
        static:"./dist"
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ]
      },
    plugins:[
        new HtmlWebpackPlugin({
            title:"To-Do"})
    ],
    output:{
        filename:"[name].js",
        path: path.resolve(__dirname, "dist"),
        clean:true,
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    optimization:{
        runtimeChunk:"single",
    },

}