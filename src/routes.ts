import express from 'express'
const routes = express.Router()

import DronesController from './controllers/DronesController'

const dronesController = new DronesController()

routes.get('/drones', dronesController.index)
routes.post('/drones', dronesController.create)
routes.delete('/drones/:id',  dronesController.remove)
routes.put('/drones/:id', dronesController.update)

export default routes