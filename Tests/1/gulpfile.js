'use strict';

const project_folder = "dist";
const source_folder = "src";


const { src, dest } = require('gulp'),
	gulp = require('gulp'),
	del = require('del'),
	fileinclude = require('gulp-file-include'),
	browsersync = require("browser-sync").create(),
	scss = require("gulp-sass")(require("sass")),
	autoprefixer = require("gulp-autoprefixer"),
	group_media = require("gulp-group-css-media-queries"),
	clean_css = require("gulp-clean-css"),
	rename = require("gulp-rename"),
	uglify = require("gulp-uglify-es").default;

const path = {
	build: {
		Html: project_folder + "/",
		Css: project_folder + "/css/",
		Js: project_folder + "/js/",
		img: project_folder + "/img/",
	},
	src: {
		Html: source_folder + "/*.html",
		Css: [source_folder + "/scss/*.scss", "!" + source_folder + "/scss/start*.scss"],
		Js: [source_folder + "/js/*.js", "!" + source_folder + "/js/*.min.js"],
		img: source_folder + "/img/**/*.{jpg,png,ico,gif,svg}",
	},
	watch: {
		Css: source_folder + "/scss/*.scss",
		Js: source_folder + "/js/*.js",
		Html: source_folder + "/*.html",
		img: source_folder + "/img/**/*.{jpg,png,ico,gif,svg}",
	},
	clean: "./" + project_folder + "/"
};

function clean() {
	return del(path.clean);
}
function browserSync() {
	browsersync.init({
		server: {
			baseDir: "./" + project_folder + "/",
		},
		port: 3000,
	});
}

function images() {
	return src(path.src.img)
		.pipe(dest(path.build.img))
		.pipe(src(path.src.img))
		.pipe(browsersync.stream());
}


function Html() {
	return src(path.src.Html)
		.pipe(fileinclude())
		.pipe(dest(path.build.Html))
		.pipe(browsersync.stream());
}


function Css() {
	return src(path.src.Css)
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
				overrideBrowserslist: ["last 10 versions"],
				cascade: true
			})
		)
		.pipe(dest(path.build.Css))
		.pipe(clean_css())
		.pipe(
			rename({
				extname: ".min.css"
			})
		)
		.pipe(dest(path.build.Css))

		.pipe(browsersync.stream());
}


function Js() {
	return src(path.src.Js)


		.pipe(fileinclude())

		.pipe(dest(path.build.Js))
		.pipe(
			uglify()
		)
		.pipe(
			rename({
				extname: ".min.js"
			})
		)
		.pipe(dest(path.build.Js))
		.pipe(browsersync.stream());
}


function watchFiles(params) {
	gulp.watch([path.watch.Html], Html),
		gulp.watch([path.watch.Css], Css),
		gulp.watch([path.watch.Js], Js),
		gulp.watch([path.watch.img], images),
		params()
}

let build = gulp.series(clean, gulp.parallel(Html, Css, Js, images));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.build = build;
exports.watch = watch;
exports.default = watch;