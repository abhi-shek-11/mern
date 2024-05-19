import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://abhi3832:9vFys78cacTRFZXt@testcluster.yu0y3ku.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster";
// console.log(uri, "uri");
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
    console.log('in catch block')
  console.error(err);
}

let db = client.db("employees");

export default db;