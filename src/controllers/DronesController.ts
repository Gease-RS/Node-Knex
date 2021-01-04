import { Request, Response } from 'express'
import knex from '../database/connection'

class DronesController {
    async index (request: Request, response: Response) {
        const xdrones = await knex('drones').select('drones.*')
        return response.json(xdrones)
    }

    async create(request: Request, response: Response)  {
        const { 
          modelo, 
        	fabricante,
        	peso,
        	dimensao,
					velocidade,
					velocascensao,
					velocdescensao,
					alturamax,
					duracaovoo,
					duracaovooest,
					duracaomediavoo,
					distanciamax,
					frequencia,
					btcapacidade,
					btvolts,
					btipo,
					btpeso,
					bateria,
					remotofreq,
					remotodistancia,
					remotobateria,
					camerasensor,
					cameraiso,
					camodosfoto,
					camodosvideo,
					camtxbites,
					formatofoto,
					formatovideo,
					price
				 } = request.body

        const trx = await knex.transaction()

        const droneExists = await trx('drones').where('modelo',  modelo).first()

        if(droneExists) {
            await trx.rollback()
            return response.status(400).json({error: 'Modelo de Drone já criado!'})
				}
				
				const data = { 
          modelo, 
        	fabricante,
        	peso,
        	dimensao,
					velocidade,
					velocascensao,
					velocdescensao,
					alturamax,
					duracaovoo,
					duracaovooest,
					duracaomediavoo,
					distanciamax,
					frequencia,
					btcapacidade,
					btvolts,
					btipo,
					btpeso,
					bateria,
					remotofreq,
					remotodistancia,
					remotobateria,
					camerasensor,
					cameraiso,
					camodosfoto,
					camodosvideo,
					camtxbites,
					formatofoto,
					formatovideo,
					price
				 }

        const drone = await trx('drones').insert(data)

        await trx.commit()

        return response.status(201).json(data)
		}
		
		async remove (request: Request, response: Response ) {
			const { id } = request.body

			const drone = await knex('drones').where("id", id).delete()

			return response.json('Drone deletado com suceesso!')
		}
}

export default DronesController