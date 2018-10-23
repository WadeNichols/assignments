const logger = (req, res, next) => {
    console.log(`
    METHOD: ${req.method}
    HOST: ${req.hostname}
    BODY: ${req.body}
    PARAMS: ${req.params}
    QUERY: ${req.query}
    `);
    next();
}

const errorHandler = (err, req, res, next) => {
    res.responseText = "There was an error";
    res.status(500).send()
}


module.exports = {
    logger,
    errorHandler
}