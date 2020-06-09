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

exports.getBadRequest = (error = [ null, 'Bad Request']) => ({
    status:400,
    errorCode:error[0],
    errorMessage:error[1],
    payLoad:null
});

exports.getNotFound = (error = [ null, 'Not Found']) => ({
    status:404,
    errorCode:error[0],
    errorMessage:error[1],
    payLoad:null
});

exports.getException = (error = [ null, 'Internal Server Error']) => ({
    status:500,
    errorCode:error[0],
    errorMessage:error[1],
    payLoad:null
});



