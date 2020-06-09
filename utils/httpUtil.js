exports.getSuccess = (payLoad = null, message = 'OK') => ({
    status:200,
    errorCode:null,
    message,
    payLoad
});

exports.getCreated = (payLoad = null, message = 'CREATED') => ({
    status:201,
    errorCode:null,
    message,
    payLoad
});

exports.getBadRequest = (error = null, message = 'Bad Request') => ({
    status:404,
    errorCode:null,
    errorMessage:error,
    payLoad:null
});

exports.getException = (error = [ null, 'Internal Server Error']) => ({
    status:500,
    errorCode:error[0],
    errorMessage:error[1],
    payLoad:null
});



