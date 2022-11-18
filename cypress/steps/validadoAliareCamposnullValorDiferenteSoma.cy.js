/// <reference types="cypress" />

Given(
  "Que seja efetuado um GET no endpoint {word}",
  (endpoint) => {
cy.request("GET", endpoint,(response)=>{
  
})
  }
);
When(
  "For validado que o campo TIPO enterprises_buy nao pode ter o valor diferente de VENDA ou NEGOCIO",
  () => {}
);
And(
  "For validado o campo TIPO de enterprises_buy_agro nao pode ter o valor diferente de AGRO e AFRE",
  () => {}
);
And("For validado a soma total dos campo base_contratual", () => {});
Then(
  "Sera validado que o campo TYPE nao pode ter o valor diferente de contrato anual",
  () => {}
);
