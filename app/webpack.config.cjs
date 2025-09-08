const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = (env, argv) => {
  const isProd = argv.mode === "production";
  return {
    entry: path.resolve(__dirname, "src/main.tsx"),
    output: { path: path.resolve(__dirname, "dist"), filename: isProd ? "assets/[name].[contenthash].js" : "assets/[name].js", assetModuleFilename:"assets/[name][ext]", publicPath:"/", clean:true },
    resolve: { 
      extensions:[".ts",".tsx",".js"], 
      alias:{ 
        "@components":path.resolve(__dirname,"src/components"), 
        "@pages":path.resolve(__dirname,"src/pages"), 
        "@routes":path.resolve(__dirname,"src/routes"), 
        "@utils":path.resolve(__dirname,"src/utils"), 
        "@layouts":path.resolve(__dirname,"src/layouts"),
        "@assets": path.resolve(__dirname, "src/assets"),

      } 
    },
    module: { rules: [ { test:/\.tsx?$/, use:"ts-loader", exclude:/node_modules/ }, { test:/\.css$/, use:["style-loader","css-loader"] }, { test:/\.(png|jpe?g|svg|gif|ico)$/i, type:"asset" } ] },
    devtool: isProd ? "source-map" : "eval-cheap-module-source-map",
    devServer: { static: path.resolve(__dirname, "public"), historyApiFallback:true, port:5173, open:true },
    plugins: [ new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public/index.html") }) ],
    optimization: { splitChunks: { chunks: "all" } },
  };
};