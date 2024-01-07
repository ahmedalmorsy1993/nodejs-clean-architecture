import { IService } from "../types/global"

export class BootCampsService implements IService {
  list() {
    return 'get all bootsCamps'
  }
  create() {
    return 'create bootCamp'
  }

  show(id: number) {
    return 'get  single bootCamp'
  }

  update(id: number) {
    return 'update bootCamp'
  }
  delete(id: number) {
    return 'delete bootCamp'
  }
}