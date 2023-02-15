import pkgs from "gulp";
import gulpSass from "gulp-sass";
import library from "sass";

const { src, dest, watch, series } = pkgs;
const sass = gulpSass(library);

function buildStyles() {
    return src("styles.scss").pipe(sass()).pipe(dest("css"));
}

function watchStyles() {
    watch(["styles.scss"], buildStyles);
}

export default series(buildStyles, watchStyles);
