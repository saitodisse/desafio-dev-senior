module.exports = function (grunt) {

    var TEMPLATES_LOCATION = "./WebAppSample/Scripts/src/templates/",       // don't forget the trailing /
        TEMPLATES_EXTENSION = ".hbs",
        TEMPLATES_OUTPUT_LOCATION = TEMPLATES_LOCATION + '/compiled/',       // don't forget the trailing /
        TEMPLATES_OUTPUT_FILENAME = "allCompiledTemplates.js";  // don't forget the .js

    

    grunt.initConfig({
        handlebars: {
            compile: {
                src: TEMPLATES_LOCATION + '**/*' + TEMPLATES_EXTENSION,
                dest: TEMPLATES_OUTPUT_LOCATION + TEMPLATES_OUTPUT_FILENAME,
                options: {
                    amd: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.registerTask('default', ['handlebars']);
}