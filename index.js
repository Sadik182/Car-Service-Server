const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
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
