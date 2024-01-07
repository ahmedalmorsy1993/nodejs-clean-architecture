import { app } from "../app";
import bootcampsRoutes from './bootcamps'




app.use('/api/v1', bootcampsRoutes)