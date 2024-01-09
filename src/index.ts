
import { AppDataSource } from '../ormconfig';
import { app } from './app';
import "reflect-metadata";

// routes
import './routes'
import { errorHandler } from './middleware/errorHandler';

app.use(errorHandler)

// initialize server
const port = process.env.PORT || 8000;
AppDataSource.initialize().then(() => {
  app.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`);
  })
});


