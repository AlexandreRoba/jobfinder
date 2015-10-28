module.exports = function(grunt) {
    //Load tasks provided by each plugin
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-tslint');

    //Project Configuration
    grunt.initConfig({
        ts: {
            server: {
                src: [
                    'server/**/*.ts'
                ],
                //dest: 'server/build',
                options: {
                    fast: 'never',
                    module: 'commonjs',
                    target: 'es5',
                    rootDir: ".",
                    sourceMap: false,
                    declaration: false
                }
            },
            client: {
                src: [
                    'public/app/**/*.ts'
                ],
                //dest: 'public/app/build',
                options: {
                    fast: 'never',
                    module: 'commonjs',
                    target: 'es5',
                    rootDir: ".",
                    sourceMap: false,
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
            buildOutput: [
                'server/**/*.js',
                'public/app/**/*.js'
            ],
            baseDir: [
                'server/**/.baseDir.*',
                'public/**/.baseDir.*'
            ]
        },
        tslint: {
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            },
            files: {
                src: [
                    'server/**/*.ts',
                    'public/app/**/*.ts'
                ]
            }
        }
    });

    //Define the default task
    grunt.registerTask('default', ['clean:buildOutput', 'tslint', 'ts:server', 'ts:client', 'clean:baseDir']);
    grunt.registerTask('test', ['default', 'mochaTest']);
    grunt.registerTask('deploy', ['githubAsset']);
};