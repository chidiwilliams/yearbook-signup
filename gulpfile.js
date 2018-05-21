var gulp = require("gulp");
var render = require('gulp-nunjucks-render');

gulp.task('nunjucks', function () {
    return gulp.src('parts/**/*.+(html|nunjucks)')
        .pipe(render({ path: ['templates'] }))
        .pipe(gulp.dest('out'))
});
