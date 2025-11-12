import logger from "./logger.js";
import morgan from "morgan";

import express from "express";

const app = express();

const port = 6000;

const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);





//Just returning the data
/*app.get("/", (req, res) => {
    res.send("Hello user")
})
app.get("/confirmation", (req, res) => {
  res.send("URL worked successfully.");
});*/

//Accepting the data from the frontend as well

app.use(express.json());

let arrayData = [];
let arrayID = 1;

//Building crud application
//Create
app.post("/data", (req, res) => {
  const { name, price } = req.body;
  //making an object so that it can be stored.
  const newData = {
    id: arrayID++,
    name,
    price,
  };
  arrayData.push(newData);
  res.status(201).send(newData);
});

//now returning the data according to the posted one
//Reading
app.get("/data", (req, res) => {
  res.status(200).send(arrayData);
});

app.get("/data/:id", (req, res) => {
  const data = arrayData.find((a) => a.id === parseInt(req.params.id)); //if there is a request in body, then req.body...if in url then req.params

  if (!data) {
    return res.status(404).send("Data not found");
  }
  res.status(200).send(data);
});

//updation
app.put("/data/:id", (req, res) => {
  const data = arrayData.find((a) => a.id === parseInt(req.params.id));

  if (!data) {
    return res.status(404).send("Data not found");
  }

  const { name, price } = req.body;
  data.name = name;
  data.price = price;
  res.status(200).send(data);
});

//Delete
app.delete("/data/:id", (req, res) => {
  const index = arrayData.findIndex((a) => a.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).send("Data not found");
  }
  arrayData.splice(index, 1);
  return res.status(200).send("deleted");
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});


