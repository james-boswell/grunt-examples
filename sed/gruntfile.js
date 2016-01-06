module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        variables: grunt.file.readJSON('variables.json'),
        
        sed: {
          var1: {
            pattern: /var1/g,
            replacement: '<%= variables.1 %>',
            path: 'file1.txt'
          },
          var2: {
            pattern: 'var2',
            replacement: '<%= variables.2 %>',
            path: 'file1.txt'
          }
        }
    });

    grunt.loadNpmTasks('grunt-sed');

    grunt.registerTask('default', [
        'sed'
    ]);
};