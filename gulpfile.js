const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Defina a função 'styles'
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

// Crie uma tarefa Gulp que use a função 'styles'
gulp.task('styles', styles);

// Defina a tarefa padrão para executar 'styles'
gulp.task('default', gulp.series('styles'));

// Crie uma tarefa Gulp para assistir os arquivos SCSS
gulp.task('watch', function() {
    // Observe os arquivos SCSS e, quando houver alterações, execute a tarefa 'styles'
    gulp.watch('./src/styles/*.scss', gulp.series('styles'));
});
