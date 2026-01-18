import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CoffeeCartPage from '../pages/CoffeeCart.page';

Given('que o usuário acessa a página Coffee Cart', () => {
  CoffeeCartPage.acessarPagina();
  CoffeeCartPage.mapearProdutosComDataTest();
});

When('ele seleciona três tipos de cafés diferentes', () => {
    CoffeeCartPage.adicionarCafe('Espresso'); 
    CoffeeCartPage.adicionarCafe('Americano'); 
    CoffeeCartPage.adicionarCafe('Cappuccino'); 
});

When('uma oferta promocional de Mocha por $4 é exibida', () => {
  CoffeeCartPage.validarOfertaMocha();
  });

And('ele aceita a oferta promocional', () => {
    CoffeeCartPage.validarOfertaMocha(); 

});

Then('o carrinho deve conter quatro itens com valores corretos', () => {
  CoffeeCartPage.validarItensCarrinho(4);
});

When('ele remove o café Americano do carrinho', () => {
  CoffeeCartPage.removerCafe('Americano');
});

Then('o café Americano não deve mais estar presente', () => {
  CoffeeCartPage.validarCafeRemovido('Americano');
});

Then('o carrinho deve atualizar a remoção e exibir os valores atualizados', () => {
  CoffeeCartPage.validarItensCarrinho(3);
});

When('ele realiza o pagamento', () => {
  CoffeeCartPage.finalizarCompra();
  CoffeeCartPage.preencherPagamento();
  CoffeeCartPage.confirmarPagamento();
});


Then('uma mensagem de sucesso deve ser exibida', () => {
  CoffeeCartPage.validarMensagemSucesso();
});
