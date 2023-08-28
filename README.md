# Caixa da Lanchonete - Solução do Desafio de Automação

Neste repositório, apresento a solução desenvolvida para o desafio de automação do Caixa da Lanchonete da DB. O objetivo deste desafio era construir a lógica que calcula o valor de uma compra de acordo com o cardápio, regras e descontos da Lanchonete.

## O Desafio

O desafio consistia em criar uma solução capaz de calcular o valor total de uma compra com base nos itens do cardápio, considerando diferentes formas de pagamento, descontos e regras específicas.

### Cardápio

O cardápio consiste em uma lista de itens com seus códigos, descrições e valores. Além disso, há a possibilidade de adicionar itens extras a alguns produtos.

### Formas de Pagamento

A solução deve aceitar três formas de pagamento: dinheiro, débito e crédito. Cada forma de pagamento tem regras de desconto ou acréscimo no valor total da compra.

### Descontos e Taxas

- Pagamento em dinheiro: 5% de desconto.
- Pagamento a crédito: acréscimo de 3% no valor total.

### Regras Adicionais

- Itens extras não podem ser pedidos sem o item principal correspondente.
- Combos não são considerados itens principais.
- É possível pedir mais de um item extra sem precisar de mais de um item principal.
- Mensagens de erro específicas devem ser exibidas para cada situação inválida.

## Como Rodar a Solução

### Pré-requisitos
1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Instalando Dependências
1. Abra o terminal na pasta raiz do projeto.
2. Execute o seguinte comando para instalar as dependências do projeto:

   npm install

### Testando sua Solução

- No terminal, ainda na pasta raiz do projeto, execute o seguinte comando para rodar os testes:

    npm test
    
Os testes fornecidos verificarão se sua solução está correta de acordo com as regras do desafio.


### Entrada (método calcularValorDaCompra):

 O método calcularValorDaCompra recebe dois parâmetros:

- formaDePagamento: Uma string com os possíveis valores válidos: debito, credito e dinheiro.
- itens: Uma array contendo os itens que serão comprados, onde cada item é uma string contendo o código do item e a quantidade 
  separados por vírgula.

### Saída:
- O retorno do método calcularValorDaCompra será uma string, que pode ser o valor total da
  compra ou uma mensagem de erro, de acordo com as regras do desafio.
