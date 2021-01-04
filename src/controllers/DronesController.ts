import { Request, Response } from 'express'
import knex from '../database/connection'

class DronesController {
    async index (request: Request, response: Response) {
        const drones = await knex('drone').select('drone.*')
        return response.json(drones)
    }
}

export default DronesController