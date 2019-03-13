"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class IndexController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            var dataToResponse = {
                nome: '',
                endereco: '',
                per_capita: 0
            };
            var name = request.body.nome;
            const adress = yield IndexController.searchAdressByCep(request.body.cep);
            const renda_mensal = request.body.renda_mensal;
            const numero_dependentes = request.body.numero_dependentes;
            var erros = new Array();
            if (name.trim() === '' || !name)
                name = undefined;
            if (adress == null)
                erros.push("Cep inválido");
            if (renda_mensal == null)
                erros.push("Digite sua renda mensal");
            else if (renda_mensal <= 0)
                erros.push("Digite uma renda valida");
            if (numero_dependentes == null)
                erros.push("Digite o numero de dependentes");
            else if (numero_dependentes <= 0)
                erros.push("Numero de dependentes invalido");
            if (erros.length == 0) {
                dataToResponse.endereco = adress;
                dataToResponse.nome = name;
                dataToResponse.per_capita = renda_mensal / numero_dependentes;
                response.send(dataToResponse);
            }
            else {
                const errosJson = {
                    "erro": true,
                    "messages": erros
                };
                response.status(400);
                response.send(errosJson);
            }
        });
    }
    static searchAdressByCep(cep) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get('https://viacep.com.br/ws/' + cep + '/json/')
                .catch(error => {
                console.log(error);
                return null;
            });
            if (response == null)
                return null;
            return response.data;
        });
    }
}
const indexController = new IndexController();
exports.default = indexController;
