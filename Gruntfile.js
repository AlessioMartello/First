'use strict';

// give grunt specific directions for plug-ins

module.exports = function(grunt) {
// Configure main project settings

  grunt.initConfig({
    pkg: grunt.file.readJSON ('package.json'),

    uncss: {
      dist:{
        files:{
          'styles.css':['index.html', 'Art.html','Videos.html', 'Pictures.html'],
        }
      }
    },

    cssmin: {
      target: {
        files: [{
        expand: true,
        cwd: '' ,
        src:['*.css', '!*.min.css'],
        dest: '',
        ext: '.min.css'
      }]
    }
  }
}),

// Load plugins

grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-uncss');

// Do the task

grunt.registerTask("default", ['uncss', 'cssmin']);

// Basic settings and info about plugins

};
