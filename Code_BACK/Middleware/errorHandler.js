const errorHandler = (err, req, res, next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500
    res.statuts(statusCode).json({
        message: err.message,
        stack: err.stack,
    })
}
module.exports = errorHandler