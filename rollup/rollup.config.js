import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

export default {
  output: { format: "iife", name: "Bar" },
  plugins: [resolve(), commonjs()]
};
