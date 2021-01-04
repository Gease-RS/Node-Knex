"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
class DronesController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const drones = yield connection_1.default('drone').select('drone.*');
            return response.json(drones);
        });
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { modelo, fabricante, peso, dimensao, velocidade, velocascensao, velocdescensao, alturamax, duracaovoo, duracaovooest, duracaomediavoo, distanciamax, frequencia, btcapacidade, btvolts, btipo, btpeso, bateria, remotofreq, remotodistancia, remotobateria, camerasensor, cameraiso, camodosfoto, camodosvideo, camtxbites, formatofoto, formatovideo, price } = request.body;
            const trx = yield connection_1.default.transaction();
            const droneExists = yield trx('drone').where('modelo', modelo).first();
            if (droneExists) {
                yield trx.rollback();
                return response.status(400).json({ error: 'Modelo de Drone já criado!' });
            }
            const drone = yield trx('drones').insert(request.body);
            yield trx.commit();
            return response.json(`Drone id ${drone} criado com  Sucesso`);
        });
    }
}
exports.default = DronesController;
