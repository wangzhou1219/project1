const gulp = require( "gulp" );
const concat = require( "gulp-concat" );
const cssmin = require( "gulp-cssmin" );
const uglify = require( "gulp-uglify" );
const sass = require( "gulp-sass" );
const rename = require( "gulp-rename" );
gulp.task( "uglify" , function(){
	return gulp.src( "js/*.js" )
               .pipe( uglify() )             
	           .pipe( gulp.dest( "js/" ) )
} )	
gulp.task( "sass" , function(){
	return gulp.src( "css/index.scss" )
	           .pipe( sass() )
	           .pipe( rename("index2.css") )
	           .pipe( gulp.dest( "css/" ) )
} )	
gulp.task( "cssmin" , function(){
	return gulp.src( "css/*.css" )
	           .pipe( cssmin() )
	           .pipe( gulp.dest( "css/" ) )
} )
gulp.task( "watch" , function(){
	return gulp.watch( "css/index.scss" , ["sass"] );
} )

gulp.task( "sass1" , function(){
	return gulp.src( "css/jewelbox.scss" )
	           .pipe( sass() )
	           .pipe( rename("jewelbox.css") )
	           .pipe( gulp.dest( "css/" ) )
} )	
gulp.task( "watch1" , function(){
	return gulp.watch( "css/jewelbox.scss" , ["sass1"] );
} )