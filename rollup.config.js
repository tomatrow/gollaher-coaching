import svelte from "rollup-plugin-svelte"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import css from "rollup-plugin-css-only"
import fs from "fs"
import sveltePreprocess from "svelte-preprocess"
import format from "./format.js"
import { terser } from "rollup-plugin-terser";


const production = !process.env.ROLLUP_WATCH

export default {
    input: "src/main.js",
    output: {
        sourcemap: false,
        format: "iife",
        name: "app",
        file: "scripts/bundle.js"
    },
    plugins: [
        format({ exclude: ["node_modules/**", "**/*.css"] }), // from zen
        svelte({
            compilerOptions: {
                // enable run-time checks when not in production
                dev: !production
            },
            preprocess: sveltePreprocess({
                sourceMap: !production,
                postcss: {
                    plugins: [require("tailwindcss")]
                }
            })
        }),
        // we'll extract any component CSS out into
        // a separate file - better for performance
        css({
            output(styles) {
                console.log("Writting styles...")
                fs.writeFileSync("assets/bundle.css", styles)
            }
        }),

        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration -
        // consult the documentation for details:
        // https://github.com/rollup/plugins/tree/master/packages/commonjs
        resolve({
            browser: true,
            dedupe: ["svelte"]
        }),
        commonjs(),
         production && terser(),
    ],
    watch: {
        clearScreen: false
    }
}
