'use strict';

var gulp=require('gulp');
var sass=require('gulp-sass');

gulp.task('create',function(){
    //引用scss文件夹所有文件，得到文件流
    gulp.src('./sass/*.scss')
    
    //截取管道流的scss文件，然后进行编译
    .pipe(sass({outputStyle: 'expanded'}))//编译scss文件
    .pipe(gulp.dest('./css/'))

});

gulp.task('thewatch',function(){
    //监听scss里面的scss文件，如果有修改则执行create任务
    gulp.watch('./sass/*.scss',['create'])
});

//合并文件
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var rename=require('gulp-rename');
var c_obj={
    newLine : ";"
}

gulp.task('isconcat',function(){
    //引用js文件
    gulp.src('./js/*.js')
    .pipe(concat('./js/index.js',c_obj))
        .pipe(rename({suffix:'.min'}))

        .pipe(gulp.dest('./css/'))


        
});

