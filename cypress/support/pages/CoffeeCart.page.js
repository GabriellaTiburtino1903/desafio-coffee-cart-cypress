class CoffeeCartPage {

  acessarPagina() {
    cy.visit('/');
  }

  mapearProdutosComDataTest() {
    cy.get('button').each(($el) => {
      const nomeCafe = $el
        .text()
        .trim()
        .split('$')[0]
        .trim();

      cy.wrap($el)
        .invoke('attr', 'data-test', `product-${nomeCafe}`);
    });
  }

adicionarCafe(nomeCafe) {
    // Usei o seletor exato que vi no 'Inspecionar'
    cy.get(`[data-test="${nomeCafe}"]`)
      .scrollIntoView()
      .should('be.visible')
      .click();
}

validarOfertaMocha() {
  cy.contains('Mocha').should('be.visible');
  cy.contains('$4').should('be.visible');

}

   aceitarOfertaMocha() {
  cy.contains('Yes').should('be.visible').click();

  }

  validarItensCarrinho() {
  cy.contains('Espresso').should('be.visible');
  cy.contains('Americano').should('be.visible');
  cy.contains('Cappuccino').should('be.visible');
  cy.contains('Mocha').should('be.visible');
  }

  validarCafeNoCarrinho(nomeCafe, valor) {
    cy.contains('[data-test="cart-item"]', nomeCafe)
      .should('contain.text', valor);
  }

  removerCafe(nomeCafe) {
  cy.contains(nomeCafe).should('be.visible').click();

  }

  validarCafeRemovido(nomeCafe) {
  cy.contains(nomeCafe).should('not.exist');
}


  validarTotal(valorTotal) {
    cy.get('[data-test="total-price"]')
      .should('contain.text', valorTotal);
  }

  finalizarCompra() {
  cy.contains('Total').click();

  }

  preencherPagamento() {
  cy.get('input').eq(0).type('Gabriella');
  cy.get('input').eq(1).type('gabriella123@email.com');
}

  confirmarPagamento() {
  cy.contains('button', 'Submit').click();
}

 validarMensagemSucesso() {
  cy.contains('Thanks').should('be.visible');

  }
}

export default new CoffeeCartPage();
