'use strict'

const del = require('del');
const fileinclude = require('gulp-file-include');

let project_folder = "dist";
let source_folder = "src";

let path = {
	build: {
		mainCss: project_folder + "/",
		mainIndex: project_folder + "/",
		mainJs: project_folder + "/",
		favicon: project_folder + "/",

	},
	src: {
		mainCss: source_folder + "/style.scss",
		mainIndex: source_folder + "/index.html",
		mainJs: source_folder + "/script.js",
		favicon: source_folder + "/favicon.ico",
	},
	watch: {
		mainCss: source_folder + "/style.scss",
		mainIndex: source_folder + "/index.html",
		mainJs: source_folder + "/script.js",
	},
	clean: "./" + project_folder + "/"
};

let { src, dest } = require('gulp'),
	gulp = require('gulp'),
	browsersync = require("browser-sync").create(),
	scss = require('gulp-sass')(require('sass')),
	autoprefixer = require("gulp-autoprefixer"),
	group_media = require("gulp-group-css-media-queries"),
	clean_css = require("gulp-clean-css"),
	rename = require("gulp-rename"),
	uglify = require("gulp-uglify-es").default;

function clean() {
	return del(path.clean);
}
function browserSync() {
	browsersync.init({
		server: {
			baseDir: "./" + project_folder + "/",
		},
		port: 3000,
	})
}


/* function images() {
	return src(path.src.img)
		.pipe(
			webp({
				quality: 100 // 0 to 100
			})
		)
		.pipe(dest(path.build.img))
		.pipe(src(path.src.img))
		.pipe(
			imagemin({
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				interlaced: true,
				optimizationLevel: 0 // 0 to 7
			})
		)
		.pipe(dest(path.build.img))
		.pipe(browsersync.stream())
} */
/* function lazyLoad() {
	return src(path.src.lazyLoad)
		.pipe(fileinclude())
		.pipe(dest(path.build.lazyLoad))
		.pipe(
			uglify()
		)
		.pipe(
			rename({
				extname: ".min.js"
			})
		)
		.pipe(dest(path.build.lazyLoad))
		.pipe(browsersync.stream())
} */



function favicon() {
	return src(path.src.favicon)
		.pipe(fileinclude())
		.pipe(dest(path.build.favicon))
}
function mainIndex() {
	return src(path.src.mainIndex)
		.pipe(fileinclude())

		.pipe(dest(path.build.mainIndex))
		.pipe(browsersync.stream())
}
function mainCss() {
	return src(path.src.mainCss)
		.pipe(
			scss({
				outputStyle: "expanded"
			})
		)
		.pipe(
			group_media()
		)
		.pipe(
			autoprefixer({
				overrideBrowserslist: ["last 5 versions"],
				cascade: true
			})
		)
		.pipe(dest(path.build.mainCss))
		.pipe(clean_css())
		.pipe(
			rename({
				extname: ".min.css"
			})
		)
		.pipe(dest(path.build.mainCss))
		.pipe(browsersync.stream())
}
function mainJs() {
	return src(path.src.mainJs)
		.pipe(fileinclude())
		.pipe(dest(path.build.mainJs))
		.pipe(
			uglify()
		)
		.pipe(
			rename({
				extname: ".min.js"
			})
		)
		.pipe(dest(path.build.mainJs))
		.pipe(browsersync.stream())
}

function watchFiles(params) {
	gulp.watch([path.watch.mainIndex], mainIndex),
		gulp.watch([path.watch.mainCss], mainCss),
		gulp.watch([path.watch.mainJs], mainJs),
		params();
}




let build = gulp.series(clean, gulp.parallel(mainCss, mainJs, mainIndex, favicon));
let watch = gulp.parallel(build, watchFiles, browserSync);


exports.build = build;
exports.watch = watch;
exports.default = watch;