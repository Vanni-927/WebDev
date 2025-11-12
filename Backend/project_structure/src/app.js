import express from 'express';


import cors from 'cors';  // Importing CORS middleware to handle cross-origin requests
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,  
}));  


app.use(express.json( {limit: "16kb"}));                 // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true, limit: "16kb" }));        // Middleware to parse URL-encoded request
app.use(express.static('public'));                                     // Serve static files from the 'public' directory



export { app }    //so that we can import this app in other files and utilise it.


