module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('bower.json'),
	jshint: {
		all: [ 'app/js/app.js', 'Gruntfile.js', 'app/js/Controllers/*.js'],
		options: {
		  curly:  true,
		  immed:  true,
		  newcap: true,
		  noarg:  true,
		  sub:    true,
		  boss:   true,
		  eqnull: true,
		  node:   true,
		  undef:  true,
	  globals: {
		_:       false,
		jQuery:  false,
		angular: false,
		moment:  false,
		console: false,
		$:       false,
		io:      false
		}
		}
	 },
	 uglify: {
	 options: {
	 mangle: false
	 },
     my_target: {
      files: {
        'app/output.min.js': ['app/js/app.js', 'app/js/Controllers/*.js']
      }
    }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  grunt.registerTask('test', ['jshint', 'uglify']);
   
  grunt.registerTask('default', ['test']);
  

};