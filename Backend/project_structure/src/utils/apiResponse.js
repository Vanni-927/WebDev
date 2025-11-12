//To have a synchronous response structure for API responses
//This will help in maintaining a consistent response format across the application

class apiResponse { 
    constructor(statusCode, data, message= "Success") {
       this.statusCode = statusCode;
        this.data = data;    
        this.message = message;
        this.success = statusCode < 400;
   }
}

export { apiResponse };