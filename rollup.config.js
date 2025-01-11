import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

export default [
  {
    input: "dist/main.js",
    output: [
      {
        name: "qi-utils",
        file: "./lib/qi-utils.esm.js",
        format: "es",
        sourcemap: true,
      },
      {
        name: "qi-utils",
        file: "./lib/qi-utils.cjs.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        name: "$qi",
        file: "./lib/qi-utils.umd.js",
        format: "umd",
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      // typescript(),
      terser({
        compress: true,
        format: {
          beautify: true,
          width: 80,
          max_line_len: 100,
          comments: false,
          indent_level: 4,
        },
      }),
    ],
  },
];
