module.exports = function(grunt) {
    //Load tasks provided by each plugin
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-github-release-asset');
    grunt.loadNpmTasks('grunt-git-remote-tag');
    grunt.loadNpmTasks('grunt-version-bump');

    //Project Configuration
    grunt.initConfig({
        ts: {
            server: {
                src: [
                    'server/src/**/*.ts'
                ],
                dest: 'server/build',
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
                    'public/app/src/**/*.ts'
                ],
                dest: 'public/app/build',
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
                'server/build',
                'public/app/build',
                'test/build',
                'spikes/build'
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
                    'server/src**/*.ts',
                    'public/app/src/**/*.ts',
                    'test/src/**/*.ts',
                    'spikes/src/**/*.ts'
                ]
            }
        },
        githubAsset: {
            options: {
                credentials: grunt.file.readJSON('githubtoken.json'),
                repo: 'git@github.com:AlexandreRoba/jobfinder.git',
                file: 'JobFinder-0.0.1.tgz',
                releaseName: 'Version {tag}'
            }
        },
        gitRemoteTag: {
            release: {
                options: {
                    tag: util.format('v.%s-%s', process.env.BUILD_NUMBER, process.env.ENVIRONMENT),
                    remote: 'origin',
                    //message: 'It worked!',
                    force: false
                },
                src: './'
            }
        }
    });

    //Define the default task
    grunt.registerTask('default', ['clean:buildOutput', 'tslint', 'ts:server', 'ts:client', 'clean:baseDir']);
    grunt.registerTask('test', ['default', 'mochaTest']);
    grunt.registerTask('deploy', ['githubAsset']);
};