import Webpack from "webpack";
import path from "path";
import WebpackDevServer from "webpack-dev-server";
import webpackConfig from "../../webpack.config";

const compiler = Webpack(webpackConfig);
const devServerOptions = {
  ...webpackConfig.devServer,
  open: true,
  stats: { outputPath: path.join(__dirname, "stats.json") },
};
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log("Starting server...");
  await server.start();
};

runServer();
