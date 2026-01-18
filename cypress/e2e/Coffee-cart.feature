#utf-8
#language: pt

Funcionalidade: Compra de café no Coffee Cart

  Cenário: Finalizar compra com sucesso
    Dado que o usuário acessa a página Coffee Cart
    Quando ele seleciona três tipos de cafés diferentes
    E uma oferta promocional de Mocha por $4 é exibida
    E ele aceita a oferta promocional
    Então o carrinho deve conter quatro itens com valores corretos
    Quando ele remove o café Americano do carrinho
    Então o carrinho deve atualizar a remoção e exibir os valores atualizados
    Quando ele realiza o pagamento
    Então uma mensagem de sucesso deve ser exibida

