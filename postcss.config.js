import postCssPlugin from "postcss-preset-env";

export default {
  plugins: [
    postCssPlugin({
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    }),
  ],
};
