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
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.createTable('drone', table => {
            table.increments('id').primary();
            table.string('modelo').notNullable;
            table.string('fabricante').notNullable;
            table.string('peso').notNullable;
            table.string('dimensao').notNullable;
            table.string('velocidade').notNullable;
            table.string('velocascensao').notNullable;
            table.string('velocdescensao').notNullable;
            table.string('alturamax').notNullable;
            table.string('duracaovoo').notNullable;
            table.string('duracaovooest').notNullable;
            table.string('duracaomediavoo').notNullable;
            table.string('distanciamax').notNullable;
            table.string('frequencia').notNullable;
            table.string('btcapacidade').notNullable;
            table.string('btvolts').notNullable;
            table.string('btipo').notNullable;
            table.string('btpeso');
            table.string('bateria').notNullable;
            table.string('remotofreq').notNullable;
            table.string('remotodistancia').notNullable;
            table.string('remotobateria').notNullable;
            table.string('camerasensor').notNullable;
            table.string('cameraiso').notNullable;
            table.string('camodosfoto').notNullable;
            table.string('camodosvideo').notNullable;
            table.string('camtxbites').notNullable;
            table.string('formatofoto').notNullable;
            table.string('formatovideo').notNullable;
            table.float('price');
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.dropTableIfExists("drone");
    });
}
exports.down = down;
