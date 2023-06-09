import Webpack, { Stats } from "webpack";
import WebpackDevServer from "webpack-dev-server";
import webpackConfig from "../../webpack.config";
import { writeFileSync } from "fs";

const compiler = Webpack({ ...webpackConfig, mode: "development" });
const devServerOptions = {
  ...webpackConfig.devServer,
  open: true,
};
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  await server.start();

  const stats: Stats = await new Promise((res) =>
    compiler.hooks.done.tap("done", (stats) => res(stats))
  );

  const js = stats
    .toJson()
    .assetsByChunkName?.main.filter((asset) => asset.endsWith(".js"));

  writeFileSync("stats.json", JSON.stringify(js, null, 4), "utf-8");
};

runServer();
