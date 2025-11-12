import 'dotenv/config';           // Load environment variables from .env file
import { app } from './app.js';
import connectDB from './db/index.js';


const PORT = process.env.PORT || 7001;    //PORT is an environment variable, if not set, default to 7000

connectDB()
  .then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  })
.catch((error) => {
    console.error('Failed to connect to the database:', error);
    process.exit(1);  
  });

  