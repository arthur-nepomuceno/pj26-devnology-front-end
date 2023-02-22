##### **Read in english:**
[![en](https://img.shields.io/badge/lang-en-blue.svg)](https://github.com/arthur-nepomuceno/pj26-devnology-front-end/blob/master/README.md)

<p align="center">
   <img src="src/assets/logo.png" alt="FavLinks" style="width: 121px; height: 121px"/>
</p>

## <p align = "center">  - FavLinks - </p>

<p align = "center">
   <img src="https://img.shields.io/badge/autor-Arthur Nepomuceno-093D04?style=flat-square" />
</p>

## Avisos

1. Para utilizar esta aplicação, certifique-se de ter baixado e inicializado o back-end, disponivel clicando [aqui](https://github.com/arthur-nepomuceno/pj26-devnology-beck-end/blob/master/README-pt-br.md). Somente depois de ter seguido esse passo é que você deve esperar que este front-end funcione.

2. Este front-end é desenvolvido, até o presente momento, para telas na proporção de 1440 x 1084 pixels. Para sua melhor visualição, ao abri-lo em seu navegador, aperte as teclas "ctrl + shift + i" para abrir o console, e então altere a proporção da tela para 1440 pixels de largura e 1084 pixels de altura.

## Deploy

[https://pj25-vflows-vite.vercel.app/](https://pj26-devnology-front-end.vercel.app/)

## Sumário
   - [Apresentação](#apresentação)
   - [Introdução](#introdução)
   - [Conceitos e Tecnologias](#conceitos-e-tecnologias)
   - [Rodando a aplicação](#rodando-a-aplicação)

***


## Apresentação
   Este projeto é o front-end de uma aplicação para emissão de folhas de pagamento de fornecedores.
   Com um CNPJ devidamente registrado e válido, uma empresa pode se conectar, visualizar os contratos disponíveis
   e então emitir uma nota fiscal, com valores, data e dados de impostos específicos para cada caso.
   
***

## Introdução
   Este projeto é desenvolvido em React (ViteJS), constituído de três telas:
   - Tela de Login: tela de entrada da aplicação. Nela, um usuário informa o CNPJ de sua empresa para acessar as demais telas.
   - Tela de Contratos: tela exibindo os principais dados da empresa, junto com uma lista de contratos para emissão de nota fiscal.
   - Tela de Novo Contrato: tela exibindo os dados da nota fiscal para preenchimento, mediante seleção de contrato na tela anterior.
   
   Para utilizar a aplicação, insira na tela inicial qualquer um dos seguintes valores para o CNPJ:
   - 02.828.446/0001-34
   - 72.610.132/0001-46
   - 01.874.354/0001-28
   - 04.220.692/0001-34
   - 12.146.377/0001-32
   - 06.034.513/0001-08
   - 02.006.030/0001-30
   - 15.358.677/0001-73
   - 07.744.937/0001-10
   - 07.126.280/0001-28
   - 09.159.197/0001-80
   - 25.144.592/0001-46
   - 13.715.241/0001-69
   
***

## Conceitos e Tecnologias
    - React (ViteJs)
    - React-Router-Dom
    - Styed-Components
    - ContextAPI
    - Unform
    - Eslint
    - Prettier
    - React-Input-Mask

***

## Rodando a aplicação
Este projeto foi inicializado com o Node Package Manager, então certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/arthur-nepomuceno/pj25-vflows-vite.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
npm run dev
```
###### [voltar para o sumário](#sumário)
***

