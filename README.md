# btcWallet
Curso - Trabalhando com Blockchain na prática 
Criando e utilizando a sua primeira carteira de criptomoedas
Nesse desafio vamos criar um gerador de carteiras bitcoin, utilizando pares de chave pública e privada. Você irá desenvolver um gerador para criar endereços de depósito e de envio de bitcoin para a carteira gerada. Além disso, vamos importar essa carteira dentro do Electrum, um aplicativo desktop pra enviar e receber transações em bitcoin, e por fim enviar criptomoedas.

Requisitos
Para executar o gerador de carteiras bitcoin e importá-las no Electrum, você precisará ter os seguintes requisitos instalados em seu sistema:

Node.js versão 16 ou superior
npm (Node Package Manager)
Electrum (aplicativo desktop para enviar e receber transações em bitcoin)
Certifique-se de ter esses requisitos instalados antes de prosseguir.

Clonando o repositório
git clone https://github.com/yohanaff/dio-criando-e-utilizando-a-sua-carteira-de-criptomoedas.git
Executando o projeto
cd src
node createWallet.js
O output será a carteira gerada, junto com o seu endereço, chave privada e seed.

Importando a carteira no Electrum
Abra o Electrum e clique em "Criar uma nova carteira" Electrum - Passo 01

Dê um nome à carteira e clique em "Próximo" Electrum - Passo 02

Selecione "Carteira padrão" e clique em "Próximo" Electrum - Passo 03

Selecione "Crie uma nova semente" e clique em "Próximo" Electrum - Passo 04

Selecione o texto (seed) e copie para um bloco de notas. Clique em "Próximo". Electrum - Passo 05

Escreva o texto (seed) copiado no bloco abaixo e clique em "Próximo" Electrum - Passo 06

Digite uma senha e clique em "Finalizar" Electrum - Passo 07

Pronto! Você criou a sua carteira dentro do Electrum. Electrum - Passo 08

Buscando o seu bloco em um buscador de blocos.
Acesse o blockchain.com ou blockexplorer.one. Abaixo há um exemplo usando a segunda alternativa:

Clique no ícone do Bitcoin. BlockExplorer.one - Passo 01

Digite no buscador o endereço da sua carteira. BlockExplorer.one - Passo 02

Observe que ali há um alerta falando que é um endereço testnet. BlockExplorer.one - Exemplo

Observe também que não há nenhuma transação e o saldo está zerado.

Obtendo faucets (criptomoedas de teste)
Acesse coinfaucet.eu.

Coloque o endereço da sua carteira. coinfaucet.net - Passo 02

Mostrará uma tela como esta: coinfaucet.net - Exemplo

Agora você pode atualizar a página do seu buscador de blocos e verificar que há uma transação feita:

BlockExplorer.one - Print mostrando a transação feita

Ativando a testnet no Electrum
Abra o Electrum Testnet e crie uma nova carteira; clique em "Próximo". Electrum - Ativando a testnet: Passo 01

Selecione "Importar endereços Bitcoin ou chaves privadas". Electrum - Ativando a testnet: Passo 02

Copie a chave privada da sua carteira e cole no campo abaixo. Electrum - Ativando a testnet: Passo 03

Crie uma senha e clique em finalizar. Electrum - Ativando a testnet: Passo 04

Você verá um alerta avisando que você está no modo de teste, clique em "OK". Agora você poderá ver a transação feita anteriormente. Electrum - Ativando a testnet: Exemplo

Após a sua transação ser validada, você poderá enviar essa criptomoeda para outras carteiras.

Enviando criptomoedas
Repita o seguinte passo .

Copie o novo endereço gerado.

Clique na tab "Enviar" e cole o endereço que você copiou. Escolha a quantidade de criptomoedas que vai enviar; clique em "Pagar". Electrum - Enviando criptomoedas: Passo 03

Escolha a taxa de transação (quanto maior, mais rápida), clique em "Concluído" e digite a sua senha. Electrum - Enviando criptomoedas: Passo 04

Em seguida, você vai receber a mensagem de que o pagamento foi enviado:

Electrum - Enviando criptomoedas: Pagamento enviado

Após a transação ser confirmada, você poderá vê-la no buscador de blocos :)
