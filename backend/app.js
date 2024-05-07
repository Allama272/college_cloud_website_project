import express from "express"
import { getInfo } from "./database.js"
import path from "path"
import { getGlobals } from 'common-es';

const { __dirname, __filename } = getGlobals(import.meta.url);


const app = express()
const port = 8080;
app.use(express.static(path.join(__dirname, '..')));

app.get("/users", async (req,res)=> {
    try {
        const info = await getInfo();
        res.json(info);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data');}
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

  app.listen(port, ()=>{
    console.log(`Server is running on port ${port} at http://localhost:${port}`)
  })
