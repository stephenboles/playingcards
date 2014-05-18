module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

	jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
    	  options: { 
    	  		
    	  		jshintrc: true,
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

simplemocha: {
    test: {
        src: ['test/**/*.js']
    }
   }
});

grunt.loadNpmTasks('grunt-simple-mocha');
grunt.loadNpmTasks('grunt-contrib-jshint');


grunt.registerTask('test', ['simplemocha', 'jshint']);
};