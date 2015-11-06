module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean : {
            options: {},
            files: ['dist/**/*.*']
        },
        uglify : {
            development : {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    dest: 'dist/js',
                    src: '**/*.js'
                }]
            },
            options : {
                sourceMap : true
            }
        },
        // validate HTML
        htmlhint: {
            templates: {
                options: {
                    force: true
                },
                src: ['src/html/**/*.html']
            }
        },
        htmlmin : {
            development: {
                options: {
                },
                files: [{
                    expand: true,
                    cwd: 'src/html',
                    dest: 'dist/html',
                    src: ['**/*.html'],
                    ext: '.html',
                    extDot: 'last'
                }]
            }
        },
        less: {
            development: {
                options: {
                    cleancss: true,
                    compress: true,
                    // substitute variables
                    modifyVars: {
                        'james': 'blue'
                    }
                },
                // Convert all src/less/*.less files to dist/css/*.css
                files: [{
                    expand: true,
                    cwd: 'src/less',
                    dest: 'dist/css',
                    src: ['*.less'],
                    ext: '.css',
                    extDot: 'last'
                }]
            }
        },
        cssmin: {
            // minify css files
            minify: {
                expand: true,
                cwd: 'src/less',
                dest: 'dist/css',
                src: ['*.less'],
                ext: '.min.css',
                extDot: 'last'
            },
            options : {
                sourceMap : true
            }
        },
        wiredep: {
            app: {
                src: ['dist/test.html']
            }
        },
        useminPrepare: {
            // source file
            html: 'dist/test.html',
            options: {
                dest: 'dist'
            }
        },

        usemin: {
            // file to insert components into
            html: ['dist/test.html'],
            css: ['dist/test.html']
        },
        copy: {
            main: {
                expand: true,
                cwd: 'app/',
                src: '**',
                dest: 'dist/',
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', [
        'clean',
        'copy',
        'wiredep',
        'min'
    ]);

    grunt.registerTask('min', [
        'useminPrepare',
        'concat',
        'uglify',
        'cssmin',
        'usemin'
    ]);
};