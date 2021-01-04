"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
const DronesController_1 = __importDefault(require("./controllers/DronesController"));
const dronesController = new DronesController_1.default();
routes.get('/drones', dronesController.index);
routes.post('/drones', dronesController.create);
exports.default = routes;
