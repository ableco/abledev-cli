import path from "path";
import webpack, { Configuration } from "webpack";
import nodeExternals from "webpack-node-externals";

const distPath = path.resolve(__dirname, "dist");

const config: Configuration = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: distPath,
    filename: "abledev-cli.js",
    library: {
      name: "abledev-cli",
      type: "umd",
    },
    globalObject: "this",
  },
  externalsPresets: { node: true },
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        resourceQuery: { not: [/raw-file/] },
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                declaration: true,
                outDir: distPath,
              },
            },
          },
          {
            loader: "shebang-loader",
          },
        ],
      },
      { resourceQuery: /raw-file/, type: "asset/source" },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".ts", ".js"],
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
  ],
};

export default config;
