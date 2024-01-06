import bodyParser from 'body-parser';
import express from 'express'
import { AppDataSource } from '../ormconfig';
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))




const port = process.env.PORT || 8000;
AppDataSource.initialize().then(() => {
  app.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`);
  })
});


