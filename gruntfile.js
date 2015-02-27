module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 2
        },
        files: {
          // target.css file: source.less file
          'assets/css/styles.css': 'assets/less/styles.less',
        }
      }
    },
    lesslint:{
      src: ['src/**/*.less'],
      options: {
        imports: ['imports/**/*.less']
      }
    },
    autoprefixer: {
      options: {
        cascade: true
      },
      development: {
        browsers: ['> 2 %', 'last 2 version', 'BB 7', 'BB 10', 'Android 2', 'Android 3', 'Android 4', 'Android 5', 'Firefox ESR'],
        expand: true,
        flatten: true,
        src: 'assets/css/*.css',
        dest: 'assets/css'
      }
    },
    uglify: {
      options: {
        mangle: {
          except: ['jQuery']
        },
        preserveComments: 'some'
      },
      my_target: {
        files: {
          'assets/js/build/avatar.min.js': ['assets/js/src/avatar.js'],
          'assets/js/build/getSpark.min.js': ['assets/js/src/getSpark.js']
        }
      }
    },
    bowercopy: {
      options: {
        clean: false
      },
      //less: {
      //      options: {
      //          destPrefix: './assets/less/imports'
      //      },
      //      files: {
      //      }
      //  },
      //  font: {
      //      options: {
      //          destPrefix: './assets/fonts'
      //      },
      //      files: {
      //      }
      //  },
        js: {
            options: {
                destPrefix: './assets/js/vendor'
            },
            files: {
                'jquery.min.js': 'jquery/dist/jquery.min.js',
                'jquery.min.map': 'jquery/dist/jquery.min.map',
                'spark.min.js': 'spark/dist/spark.min.js',
                'paper-full.min.js': 'paper/dist/paper-full.min.js'
            }
        }
    },
    watch: {
      html: {
        files: ['**/*.html'],
        options: {
          livereload: true
        }
      },
      styles: {
        files: ['assets/less/**/*.less', 'assets/js/*.js'],
        tasks: ['less', 'lesslint', 'autoprefixer'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['assets/js/src/*.js'],
        tasks: ['uglify'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-lesslint');
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['bowercopy', 'watch']);
};