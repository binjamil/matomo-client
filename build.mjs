import * as esbuild from "esbuild";
import pkg from "./package.json" assert { type: "json" };

await Promise.all([
  // bundle for esm
  esbuild.build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    format: "esm",
    outfile: pkg.module,
  }),

  // bundle for commonjs
  esbuild.build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    format: "cjs",
    outfile: pkg.main,
  }),
]);
