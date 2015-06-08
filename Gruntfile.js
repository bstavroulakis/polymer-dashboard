/// <binding />
/*
 This file in the main entry point for defining grunt tasks and using grunt plugins.
 Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
 */
module.exports = function (grunt) {

    grunt.initConfig({
        baseDir: '',
        vulcanize: {
            default: {
                options: {

                },
                files: {
                    'index.min.html': 'index.html',
                    'pages/auth/auth.min.html': 'pages/auth/auth.html',
                    'pages/main/main.min.html': 'pages/main/main.html',
                    'pages/theme/icons/default.min.html': 'pages/theme/icons/default.html',
                    'pages/theme/tables/tables.min.html':'pages/theme/tables/tables.html'
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
                    'css/main.css': 'css/main.scss',
                    'css/font.css': 'css/font.scss',
                    'css/skins/default/colors.css': 'css/skins/default/colors.scss',
                    'css/skins/light/colors.css': 'css/skins/light/colors.scss',
                    'css/position.css': 'css/position.scss',
                    'components/pd-drawer/pd-drawer.css': 'components/pd-drawer/pd-drawer.scss',
                    'components/pd-page-dialog/pd-page-dialog.css': 'components/pd-page-dialog/pd-page-dialog.scss',
                    'pages/auth/auth.css': 'pages/auth/auth.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-vulcanize");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-file-append');

    grunt.registerTask('default', ['file_append', 'vulcanize']);
};