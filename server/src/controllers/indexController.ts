import { Request, Response } from 'express';

import axios from 'axios';

class IndexController {

    public async index ( request: Request, response: Response ){

        var responseData = {
            nome: '',
            endereco: '',
            per_capita: 0
        };

        var name = request.body.nome;
        const adress = await IndexController.searchAdressByCep( request.body.cep );
        const renda_mensal = request.body.renda_mensal;
        const numero_dependentes = request.body.numero_dependentes;

        var erros = new Array();

        if ( name.trim() === '' || !name ) name = undefined;
        if ( adress == null ) erros.push( "Cep inválido" );
        if ( renda_mensal == null ) erros.push( "Digite sua renda mensal" );
        else if ( renda_mensal <= 0 ) erros.push( "Digite uma renda valida" );
        if ( numero_dependentes == null ) erros.push( "Digite o numero de dependentes" );
        else if ( numero_dependentes <= 0 ) erros.push( "Numero de dependentes invalido" );

        if ( erros.length == 0 ){

            responseData.endereco = adress;
            responseData.nome = name;
            responseData.per_capita = renda_mensal / numero_dependentes;
            responseData.per_capita = parseFloat(responseData.per_capita.toFixed(2));

            response.send( responseData );

        } else {

            const errosJson = {
                "erro": true,
                "messages": erros
            }
            
            response.status(400);
            response.send( errosJson );

        }
    }

    private static async searchAdressByCep( cep: string ) {
        const response = await axios.get('https://viacep.com.br/ws/'+cep+'/json/')
                            .catch(error => {
                                console.log(error);
                                return null;
                            });

        if( response == null ) return null;
        else if ( response.data.erro == true ) return null;
        else return response.data;
    }

}

const indexController = new IndexController();
export default indexController;