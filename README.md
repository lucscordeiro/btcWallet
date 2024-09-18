# Criando e utilizando a sua primeira carteira de criptomoedas

Este projeto é um tutorial prático para criar e utilizar uma carteira Bitcoin utilizando pares de chave pública e privada. É ideal para quem está começando com criptomoedas e deseja entender a criação e o gerenciamento de carteiras Bitcoin.

## Objetivo
O objetivo deste desafio é desenvolver um gerador de carteiras Bitcoin, importar a carteira gerada para o Electrum e enviar e receber criptomoedas de teste.

## Requisitos

Para executar o gerador de carteiras bitcoin e importá-las no Electrum, você precisará ter os seguintes requisitos instalados em seu sistema:

- Node.js versão 16 ou superior
- npm (Node Package Manager)
- Electrum (aplicativo desktop para enviar e receber transações em bitcoin)

Verifique se o Node.js e o npm estão corretamente instalados usando os seguintes comandos:

node -v
npm -v

## Clonando o repositório

```
git clone https://github.com/lucscordeiro/btcWallet
```
## Executando o projeto

```
cd src
node createWallet.js
```
O output será a carteira gerada, junto com o seu endereço, chave privada e seed.

## Importando a carteira no Electrum

1. Abra o Electrum e selecione "Criar uma nova carteira".


2. Nomeie a carteira e siga as instruções para importar a seed ou a chave privada gerada pelo script.


## Buscando o seu bloco em um buscador de blocos. 

Utilize [blockchain.com](https://www.blockchain.com/explorer) ou [blockexplorer.one](https://blockexplorer.one/) para visualizar o bloco associado ao seu endereço Bitcoin.

## Obtendo faucets (criptomoedas de teste)

Para obter Bitcoins de teste, acesse [coinfaucet.eu](https://coinfaucet.eu/)e insira o endereço da sua carteira.


## Ativando a testnet no Electrum

Abra o Electrum Testnet e importe a chave privada da sua carteira para visualizar e realizar transações em modo de teste.

## Enviando criptomoedas

Para enviar criptomoedas, gere um novo endereço com o script e use o Electrum para transferir Bitcoins de teste para o novo endereço.


## Contribuindo

Se você deseja contribuir para este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias ou correções.

