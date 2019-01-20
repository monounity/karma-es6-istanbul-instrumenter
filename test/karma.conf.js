module.exports = function(config) {
    config.set({

        frameworks: ["jasmine"],

        files: [
            { pattern: "**/*.js", type: "module" },
        ],

        preprocessors: {
            "**/!(*.spec).js": ["karma-es6-istanbul-instrumenter"]
        },

        reporters: ["progress", "coverage-istanbul"],

        browsers: ["ChromeHeadless"],

        singleRun: true
    });
};
