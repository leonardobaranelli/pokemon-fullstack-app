module.exports = (error, res) => {
    const statusCode = error.status || 500;
    const errorMessage = error.message || 'Internal server error';

    const matchStatus = errorMessage.match(/(\d{3})/);
    if (matchStatus && matchStatus[1]) {
        statusCode = parseInt(matchStatus[1], 10);
    }

    //console.error({ error: true, status: statusCode, message: errorMessage });
    res.status(statusCode).json({ error: true, status: statusCode, message: errorMessage });
};