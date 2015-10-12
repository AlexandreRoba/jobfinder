module.exports = function(grunt) {
    //Load tasks provided by each plugin
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-tslint');
    //Project Configuration
    grunt.initConfig({
        ts: {
            default: {
                src: [
                    'server/**/*.ts',
                    'public/**/*.ts',
                    'test/**/*.js',
                    'spikes/**/*.ts'],
                //dest:'build',
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    rootDir: ".",
                    sourceMap: true,
                    declaration: false
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    quiet: false, // Optionally suppress output to standard out (defaults to false)
                    clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
                },
                src: ['test/**/*.js']
            }
        },
        clean: {
            build: [
                'server/**/*.js', 
                'server/**/*.js.map',
                'public/**/*.js',
                'public/**/*.js.map', 
                'test/**/*.js', 
                'test/**/*.js.map', 
                'spikes/**/*.js', 
                'spikes/**/*.js.map']
        },
        tslint: {
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            },
            files: {
                src: ['server/**/*.ts', 'test/**/*.ts', 'spikes/**/*.ts']
            }
        }
    });
    //Define the default task
    grunt.registerTask('default', ['clean', 'tslint', 'ts']);
    grunt.registerTask('test', ['default', 'mochaTest']);
};