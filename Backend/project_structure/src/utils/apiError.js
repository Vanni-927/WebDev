class apiError extends Error {
    constructor(statusCode, message = "Something went wrong!", error = [], //as there can be many errors.
        stack = '') {
        super(message);
        this.message = message;
        this.data = null; //data can be null if there is an error
        this.success = false; //success is false if there is an error
        this.statusCode = statusCode;
        this.error = error;
       
       
       
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { apiError };