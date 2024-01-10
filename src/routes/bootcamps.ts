import { Router } from 'express';
import { BootCampController } from '../controllers/bootcamps.controller';
import { container } from 'tsyringe';
const router: Router = Router();

const bootCampController = container.resolve(BootCampController)

router.route('/bootcamps').get(bootCampController.list).post(bootCampController.create)
router.route('/bootcamps/:id').delete(bootCampController.delete)

export default router