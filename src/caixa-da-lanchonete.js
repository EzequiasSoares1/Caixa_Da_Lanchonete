class CaixaDaLanchonete {
  constructor() {
    this.cardapio = {
        cafe: { descricao: 'Café', valor: 3.0 },
        chantily: { descricao: 'Chantily (extra do Café)', valor: 1.5 },
        suco: { descricao: 'Suco Natural', valor: 6.2 },
        sanduiche: { descricao: 'Sanduíche', valor: 6.5 },
        queijo: { descricao: 'Queijo (extra do Sanduíche)', valor: 2.0 },
        salgado: { descricao: 'Salgado', valor: 7.25 },
        combo1: { descricao: '1 Suco e 1 Sanduíche', valor: 9.5 },
        combo2: { descricao: '1 Café e 1 Sanduíche', valor: 7.5 }
    };
  }

  formatarValor(valor) {
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
  }

  calcularAumentoPercentual(valor, percentual) {
    const aumento = (valor * percentual) / 100;
    const valorComAumento = valor + aumento;
    return valorComAumento;
  }

  calcularDesconto(valorOriginal, percentualDesconto) {
    const desconto = (valorOriginal * percentualDesconto) / 100;
    const valorComDesconto = valorOriginal - desconto;
    return valorComDesconto;
  }

  procurarItemCardapio(item) {
    const cardapioItem = this.cardapio[item];
    return cardapioItem !== undefined ? cardapioItem : ' ';
  }
  procurarValorCardapio(item){
    return this.cardapio[item].valor;
  }

  calcularSubtotalPedido(pedido){
    const [item, quantidade] = pedido.split(',');
    const valorItem = this.procurarValorCardapio(item);
    return valorItem * parseInt(quantidade);
  }

  calcularTotalPedido(itens) {
    let totalPedido = 0;

    for (const pedidoEntrada of itens) {
      const subtotal = this.calcularSubtotalPedido(pedidoEntrada);
      totalPedido += subtotal;
    }
    return totalPedido;
  }

  verificarQtd(itens) {
    const hasQuantidadeZero = itens.some((pedidoEntrada) => {
        const [quantidade] = pedidoEntrada.split(',');
        return parseInt(quantidade) === 0;
    });
    return hasQuantidadeZero;
  }

  verificarItens(itens, valor) {
    
    if (itens.length === 0) {
      return 'Não há itens no carrinho de compra!';
    } 
    else if (this.verificarQtd(itens) || valor === 0) {
      return 'Quantidade inválida!';
    } 

    const temItemPrincipal = itens.some((item) => {
      const [produto] = item.split(',');
      const itemEncontrado = this.procurarItemCardapio(produto);
      return itemEncontrado && !itemEncontrado.descricao.includes('(extra');
    });
      
    if (!temItemPrincipal) {
      return 'Item extra não pode ser pedido sem o principal';
    }

    return '';
  }
  

    calcularValorDaCompra(formaDePagamento, itens) {
    let valorTotal = 0;
    const valorPedido = this.calcularTotalPedido(itens);

    if (!['dinheiro', 'credito', 'debito'].includes(formaDePagamento)) {
        return 'Forma de pagamento inválida!';
    } else{

      const result = this.verificarItens(itens, valorPedido);
      if(result !== ''){
        return result;
      }
    }

    if (formaDePagamento === 'dinheiro') {
        valorTotal = this.calcularDesconto(valorPedido, 5);
    } else if (formaDePagamento === 'credito') {
        valorTotal = this.calcularAumentoPercentual(valorPedido, 3);
        
    } else if (formaDePagamento === 'debito') {
        valorTotal = valorPedido;
    }

    const valorFormatado = this.formatarValor(valorTotal);
    return valorFormatado;
  }
}
export { CaixaDaLanchonete };