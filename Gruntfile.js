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
        file_append: {
            default_options: {
                files: [
                    {
                        append: "</style>",
                        prepend: "<style is=\"custom-style\">",
                        input: 'css/skins/default/color-vars-body.css',
                        output: 'css/skins/default/color-vars.css'
                    }
                ]
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
        }
    });

    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-vulcanize");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-file-append');

    grunt.registerTask('default', ['file_append']);
};