import { Router } from 'express';
import { BootCampsService } from '../services/bootcamps.service';
import { BootCampController } from '../controllers/bootcamps.controller';
const router: Router = Router();

const bootCampController = new BootCampController(new BootCampsService())

router.get('/bootcamps', bootCampController.list)

export default router