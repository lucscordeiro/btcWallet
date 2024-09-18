//importando as dependencias
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

//definir a rede
//bitcoin - rede principal - mainnet
//testnet - rede de teste - testnet
const network = bitcoin.networks.testnet


//carteira hierarquica deterministica HD
//derivation path
//`m/49'/0'/0'/0` - primeiro 0 mainnet
const path = `m/49'/1'/0'/0` // primeiro 1 testnet

//frases aleatorias que geram a seed (palavras de senha)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

//criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network)

//criando uma conta - par pvt-pub key
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

//gerando endereco
let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address

console.log("Carteira gerada")
console.log("Endereço: ", btcAddress)
console.log("Chave privada: ", node.toWIF()) //wallet import format (toWif) formata a chave privada para conseguir importar em um software de gerenciamento de carteiras (ex. Electrum)
console.log("Seed", mnemonic)