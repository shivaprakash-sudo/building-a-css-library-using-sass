import pkgs from "gulp";
import gulpSass from "gulp-sass";
import library from "sass";

const { src, dest, watch, series } = pkgs;
const sass = gulpSass(library);

function buildStyles() {
    return src("contra/**/*.scss").pipe(sass()).pipe(dest("css"));
}

function watchStyles() {
    watch(["contra/**/*.scss"], buildStyles);
}

export default series(buildStyles, watchStyles);
