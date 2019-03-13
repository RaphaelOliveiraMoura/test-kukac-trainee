# kukac-project

Processo Seletivo - Estagiario em desenvolvimento Full Stack

### @author : Raphael de Oliveira Moura
#### @gmail : raphaeldeoliveiramoura@gmail.com
#### @linkedin : https://www.linkedin.com/in/raphael-oliveira-212663179/

## Ferramentas Utilizadas
- [x] Angular Cli v7.2.0
- [x] Node Js v10.15.2
- [x] Visual Code
- [x] Postman
- [x] Git

![alt text](https://i.ibb.co/RCdbF4q/kukac-index.png)

![alt text](https://i.ibb.co/mDJxCKD/kukac-modal.png)

## Descrição
Aplicação basica com um back end que recebe do usuario:
 - nome ( opcional )
 - cep
 - renda mensal
 - numero de dependentes
 
O back end se comunica com uma [API](https://viacep.com.br/) para pegar os dados do endereço de acordo com o CEP e retornar o endereço completo juntamento com a renda per capita do usuário.

No front end foi utilizado bootstrap com um [tema personalizado](https://bootswatch.com/sketchy/).


## Como Instalar

#### -Clonando o projeto

    Clone o repositorio
        - git clone https://github.com/RaphaelOliveiraMoura/kukac-project.git

#### -Baixando as dependencias
Abra o cmd na pasta origem do projeto clonado

    -> abra a pasta server e execute o comando npm install
        - cd server
        - npm install

    -> agora abra a pasta client e repita o processo
        - cd ..
        - cd client
        - npm install

#### -Executando o projeto
Vamos inicar primeiro a api

    -> pelo cmd, va para a pasta server do seu projeto e execute server
        - cd server
        - node build/index.js

Agora vamos iniciar o angular

    -> em outro cmd va para a pasta client e execute o comando para iniciar o angular
        - cd ..
        - cd client
        - ng serve --open
        
### Prontinho, agora é so usar :)