'use strict';

// give grunt specific directions for plug-ins

module.exports = function(grunt) {
// Configure main project settings

  grunt.initConfig({
    pkg: grunt.file.readJSON ('package.json'),
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

// Do the task

grunt.registerTask("default", ['cssmin']);

// Basic settings and info about plugins

};
