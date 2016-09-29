'use strict';
var express = require('express');
var app = express();



var build = require('@rustamspl/rsbuild');

build.compilator({
    entry: './src/entry',
    outFile: 'js/a.js'
}) //
//.pipe(build.minify()) //
//.pipe(build.dest('./dist')) //

 

.pipe(build.httpdest(app, '/js/*')) //
.pipe(build.minify()) //
.pipe(build.dest('./prod')) //
;


app.use(express.static('./static'));
app.listen(80);

//------------------------

// var app2 = express();

// build.compilator({
//     entry: './src/preloader',
//     outFile: 'js/a.js'
// }) 


// .pipe(build.minify()) //
// .pipe(build.httpdest(app2, '/js/*')) //
// .pipe(build.dest('./prod_preload')) //
// ;
// app2.use(express.static('./static'));
// app2.listen(81);
//------------------------