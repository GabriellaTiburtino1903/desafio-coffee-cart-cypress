Desafio Técnico - Coffee Cart 


Projeto com o objetivo de demonstrar a criação de uma suíte de testes automatizados end-to-end (E2E) utilizando Cypress, aplicando as boas práticas de BDD (Behavior Driven Development) com Cucumber e o padrão Page Object Model (POM).

Os testes validam o fluxo completo de compra de cafés na aplicação Coffee Cart, desde a seleção dos produtos até a finalização do pagamento com sucesso.


Tecnologias Utilizadas:

Cypress 15.9.0

cypress-cucumber-preprocessor 4.3.1

JavaScript

BDD / Gherkin

Page Object Model (POM)


Estrutura do Projeto:

⦁	TREINAMENTO_CYPRESS_DESAFIO
 - cypress
  - e2e
    - Coffee-cart.feature
  - fixtures
  - plugins
   - index.js
  - support
   - pages
    - CoffeeCart.page.js
   - step_definitions
    - coffe-cart.steps.js
    - commands.js
    - e2e.js
  - README.md
  - cypress.config.js
  - package-lock.json
  - package.json



Cenário Automatizado:

O cenário automatizado contempla:

Acesso à aplicação

Seleção de três tipos diferentes de café

Exibição e aceitação de oferta promocional (Mocha por $4)

Validação dos itens e valores no carrinho

Remoção de um item do carrinho

Atualização dos valores

Finalização do pagamento

Validação da mensagem de sucesso

O cenário foi escrito em português.


Estratégia de Seletores:

Prioridade para data-test

O desafio solicitava a priorização do uso de atributos de teste (data-test) ou IDs únicos.
No entanto, a aplicação Coffee Cart não disponibiliza esses atributos nativamente.

A solução adotada: foi criada uma estratégia de mapeamento dinâmico de data-test, adicionando esses atributos aos elementos durante a execução dos testes, sem alterar o código da aplicação.

Exemplo de abordagem:

Identificação dos produtos pelo DOM

Criação dinâmica de data-test com base no nome do café

Uso desses seletores no Page Object para maior estabilidade

Quando não foi tecnicamente viável utilizar data-test, foram utilizados seletores por texto visível, sempre encapsulados no Page Object.


Page Object Model (POM):

O projeto utiliza o padrão Page Object Model, centralizando:

Ações do usuário (cliques, preenchimentos)

Validações de estado da aplicação 

Regras de interação com a página



Como Executar o Projeto:

Pré-requisitos:

Node.js instalado

NPM instalado

Execute o comando abaixo na raiz do projeto: npx cypress open.





