module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*\n' +
                '*\n' +
                '* <%= pkg.name %> <%= pkg.version %>\n' +
                '* Copyright 2013, Pedro Rogerio\n' +
                '* Licensed under the WTFPL licenses (http://www.wtfpl.net/).\n' +
                '*\n' +
                '*/\n',
      },
      build: {
        src: 'src/youtube.js',
        dest: 'src/youtube.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};