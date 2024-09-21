import app from "./server.js"
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviewsDAO.js" // DAO - Data Acquire Object

const MongoClient = mongodb.MongoClient
const mongo_username = "stejskald" // process.env["MONGO_USERNAME"]
const mongo_password = "monVR01DcJW6CxLC" // process.env["MONGO_PASSWORD"]
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.hmoxe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const port = 8000

MongoClient.connect(
    uri,
    {
        maxPoolsize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    })
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        await ReviewsDAO.injectDB(client)

        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })