/// <binding />
/*
 This file in the main entry point for defining grunt tasks and using grunt plugins.
 Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
 */
module.exports = function (grunt) {

    grunt.initConfig({
        baseDir: 'wwwroot',
        vulcanize: {
            default: {
                options: {

                },
                files: {
                    'wwwroot/index.html': 'wwwroot/dev.html'
                }
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: 'wwwroot/lib',
                    layout: 'byComponent',
                    cleanTargetDir:true
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'wwwroot/css/main.css': 'wwwroot/css/main.scss',
                    'wwwroot/css/font.css': 'wwwroot/css/font.scss',
                    'wwwroot/css/skins/default/colors.css': 'wwwroot/css/skins/default/colors.scss',
                    'wwwroot/css/skins/light/colors.css': 'wwwroot/css/skins/light/colors.scss',
                    'wwwroot/css/position.css': 'wwwroot/css/position.scss',
                    'wwwroot/Components/pd-drawer/pd-drawer.css': 'wwwroot/Components/pd-drawer/pd-drawer.scss',
                    //'wwwroot/Components/pd-drawer/pd-drawer-menu/pd-drawer-menu.css ': 'wwwroot/Components/pd-drawer/pd-drawer-menu/pd-drawer-menu.scss ',
                    'wwwroot/Components/pd-page-dialog/pd-page-dialog.css': 'wwwroot/Components/pd-page-dialog/pd-page-dialog.scss',
                    'wwwroot/pages/auth/auth.css': 'wwwroot/pages/auth/auth.scss'
                }
            }
        },
        copy: {
            main: {
                files: [
                    { expand: true, cwd: 'bower_components/', src: ['**'], dest: 'wwwroot/bower_components/' },
                    //{ expand: true, cwd: 'Components/', src: ['**'], dest: 'wwwroot/Components/' },
                    //{ src: 'dev.html', dest: 'wwwroot/dev.html' }
                    //{ src: 'bower_components/webcomponentsjs/webcomponents-lite.min.js', dest: 'wwwroot/webcomponents-lite.min.js' }
                ]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-vulcanize");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask('skins', ['default-skin']);
};