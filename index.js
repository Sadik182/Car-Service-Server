const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// Midle ware
// Genius_Car
//8dbb1ehjElACjEOm
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://Genius_Car:8dbb1ehjElACjEOm@cluster0.crcll.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("Genius_Car_DB");
    const dataCollection = database.collection("Services");
    console.log("Databse is Connected");

    // Get All Services
    app.get('/Services', async(req, res) => {
      const query = {}
      const result = await dataCollection.find(query)
      res.send(result);
    });

    // Get Single Service

    app.get('/Services/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: ObjectId(id)}
      const result = await dataCollection.findOne(query);
      res.send(result)
    });






  } finally {
    // client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("From Car Service Server");
});

app.listen(port, () => {
  console.log("Listing From Port ", port);
});
