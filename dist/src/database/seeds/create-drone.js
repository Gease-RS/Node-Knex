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
exports.seed = void 0;
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        yield knex('drone').insert([
            {
                id: 1,
                modelo: "Mavic 2 PRO",
                fabricante: "Dji",
                peso: "931",
                dimensao: "341*430*341",
                velocidade: "65km/h",
                velocascensao: "5m/s modo Esportivo(S)",
                velocdescensao: "3m/s",
                alturamax: "5000 m",
                duracaovoo: "27 minutos",
                duracaovooest: "24 minutos",
                duracaomediavoo: "21 minutos com nível de 15% de bateria",
                distanciamax: "13km",
                frequencia: "2.4835GHz; 5.150 GHz",
                btcapacidade: "100",
                btvolts: "11.4V",
                btipo: "3830 mAh",
                btpeso: "Aprox. 240g",
                bateria: "Lipo 3S",
                remotofreq: "2.483 GHz",
                remotodistancia: "7km",
                remotobateria: "2970mAh",
                camerasensor: "1/2.3” (CMOS), Píxeis efetivos: 12.35 M (Píxeis totais: 12.71 M)",
                cameraiso: "Vídeo: 100-3200 - Foto: 100-1600",
                camodosfoto: "Disparo único - Disparo contínuo: 3/5/7 quadros - Bracketing de Exposição Automática (AEB): 3/5 quadros em bracketing a 0.7 EV bias - Intervalo",
                camodosvideo: "C4K: 4096×2160 24p - 4K: 3840×2160 24/25/30p - 2.7K: 2720x1530 24/25/30p - FHD: 1920×1080 24/25/30/48/50/60/96p - HD: 1280×720 24/25/30/48/50/60/120p",
                camtxbites: "60 Mbps",
                formatofoto: "JPEG, DNG",
                formatovideo: "MP4, MOV (MPEG-4 AVC/H.264）",
                price: 12.000
            }
        ]);
    });
}
exports.seed = seed;
