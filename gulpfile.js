const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('default-sass/**/*.css')
        .pipe(sass())
        .pipe(dest('css'))
}


function watchTask() {
    watch(['default-sass/**/*.scss'], buildStyles)
}


exports.default = series(buildStyles, watchTask)