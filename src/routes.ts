import express from 'express'
const routes = express.Router()

import DronesController from './controllers/DronesController'

const dronesController = new DronesController()

routes.get('/drones', dronesController.index)
routes.post('/drones', dronesController.create)

export default routes