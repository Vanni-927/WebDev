import { apiResponse } from "../utils/apiResponse.js"; 
import { asyncHandler } from "../utils/asyncHandler.js";   


const healthCheck = asyncHandler(async (req, res) => {
  // Simulating a health check operation
  const healthStatus = {
    status: "OK",
    timestamp: new Date().toISOString(),
  };

  // Creating a standardized API response
  const response = new apiResponse(200, healthStatus, "Health check successful");
  
  // Sending the response
  res.status(response.statusCode).json(response);
});