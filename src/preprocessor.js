const istanbul = require("istanbul-lib-instrument");

const createPreprocessor = (logger) => {

    const log = logger.create("preprocessor.karma-es6-istanbul-instrumenter");
    const instrumenter = istanbul.createInstrumenter({ esModules: true });

    return (content, file, done) => {

        log.debug("Processing \"%s\".", file.originalPath);

        instrumenter.instrument(content, file.originalPath, (error, instrumentedSource) => {
            if(error) {
                log.error("%s\nin %s", error.message, file.originalPath);
                done(error.message);
            }
            else {
                done(instrumentedSource);
            }
        });
    };
};

createPreprocessor.$inject = [
    "logger"
];

module.exports = createPreprocessor;
