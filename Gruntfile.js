module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: ['js/scripts.js'],
        dest: 'build/js/scripts.js'
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/scripts.js'],
        dest: 'build/js/scripts.js',
      },
    },

    sass: {
        options: {
          sourceMap: false,
          style: 'compressed'
        },
        dist: {
            files: {
                'build/css/style.css': 'css/style.scss'
            }
        }
    },

    copy: {
      main: {
        files: [
          {expand: true, src: ['*.html'], dest: 'build/'},
          {expand: true, src: ['images/*.svg'], dest: 'build/'},
          {expand: true, src: ['fonts/*.*'], dest: 'build/'},
        ],
      },
    },

    watch: {
      sass: {
        files: [ './css/*.scss' ],  //<- this watch all files (even sub-folders)
        tasks: ['sass']
      },
      js: {
        files: ['./js/*.js'],
        tasks: ['concat'],
      },
      copy: {
        files: ['./*.html'],
        tasks: ['copy'],
      },
        options: {
          livereload: true
        }
    },

    connect: {
      server: {
        options: {
          livereload: true,
          base: 'build/',
          port: 3000
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: './',
          src: ['images/*/*.{png,jpg,gif}'],
          dest: 'build'
        }]
      }
    }

  });

  // Load Plugins Here.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-concat');


  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'copy']);
  grunt.registerTask('live', ['connect', 'watch']);

};