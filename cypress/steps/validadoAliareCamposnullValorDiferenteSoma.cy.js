/// <reference types="cypress" />

import { InicializationAcess } from "../components/component";

const acess = new InicializationAcess();

Given("Que seja efetuado um GET no endpoint {word}", (endpoint) => {
  acess.acessInicialization(endpoint);
});
When("For validado que nenhum campo seja NULL", () => {
  let newResponse = JSON.parse(sessionStorage.getItem("JSONGet"));
  expect(newResponse.corporation).to.be.not.null;
  for (let enterprisesBuy of newResponse.enterprises_buy) {
    expect(enterprisesBuy.nome).to.be.not.null;
    expect(enterprisesBuy.cnpj).to.be.not.null;
    expect(enterprisesBuy.inscricao_estadual).to.be.not.null;
    expect(enterprisesBuy.data_abertura).to.be.not.null;
    expect(enterprisesBuy.cep).to.be.not.null;
    expect(enterprisesBuy.tipo).to.be.not.null;
    let especialization = enterprisesBuy.especialization;
    expect(especialization).to.be.not.null;
    expect(especialization.command).to.be.not.null;
    expect(especialization.command.type).to.be.not.null;
    expect(especialization.base_contratual).to.be.not.null;
  }

  let baseData = newResponse.base_data;
  expect(baseData).to.be.not.null;
  let solid = baseData.solid.cust;
  expect(solid).to.be.not.null;

  let enterprisesBuyAgro = newResponse.enterprises_buy_agro;
  for (enterprisesBuyAgro of newResponse.enterprises_buy_agro) {
    expect(enterprisesBuyAgro.nome).to.be.not.null;
    expect(enterprisesBuyAgro.cnpj).to.be.not.null;
    expect(enterprisesBuyAgro.inscricao_estadual).to.be.not.null;
    expect(enterprisesBuyAgro.data_abertura).to.be.not.null;
    expect(enterprisesBuyAgro.cep).to.be.not.null;
    expect(enterprisesBuyAgro.tipo).to.be.not.null;
    let especializationAgro = enterprisesBuyAgro.especialization;
    expect(especializationAgro).to.be.not.null;
    expect(especializationAgro.command).to.be.not.null;
    expect(especializationAgro.command.type).to.be.not.null;
    expect(especializationAgro.base_contratual).to.be.not.null;
  }
});
And(
  "For validado que o campo tipo enterprises_buy nao pode ter o valor diferente de {word} ou {word}",
  (valueOne, valueTwo) => {
    let newResponse = JSON.parse(sessionStorage.getItem("JSONGet"));
    let enterprisesBuy = newResponse.enterprises_buy;
    for (enterprisesBuy of newResponse.enterprises_buy) {
      let tipo = enterprisesBuy.tipo;
      if (tipo !== valueOne && tipo !== valueTwo) {
        throw new Error(
          `O campo tipo so pode conter o valor de VENDA ou NEGOCIO e o campo do nome: ${enterprisesBuy.nome} esta com o valor ${tipo}`
        );
      }
    }
  }
);
And(
  "For validado o campo tipo de enterprises_buy_agro nao pode ter o valor diferente de {word} e {word}",
  (valueOne, valueTwo) => {
    let newResponse = JSON.parse(sessionStorage.getItem("JSONGet"));
    let enterprisesBuyAgro = newResponse.enterprises_buy_agro;
    for (enterprisesBuyAgro of newResponse.enterprises_buy_agro) {
      let tipo = enterprisesBuyAgro.tipo;
      if (tipo !== valueOne && tipo !== valueTwo) {
        throw new Error(
          `O campo tipo so pode conter o valor de AGRO ou AFRE e o campo do nome: ${enterprisesBuyAgro.nome} esta com o valor ${tipo}`
        );
      }
    }
  }
);
And("For validado a soma total dos campo base_contratual", () => {
  let newResponse = JSON.parse(sessionStorage.getItem("JSONGet"));
  let enterprisesBuy = newResponse.enterprises_buy;
  let valueTotal = 0;
  for (enterprisesBuy of newResponse.enterprises_buy) {
    let baseContratual = enterprisesBuy.especialization.base_contratual;
    let sumBaseContratual = parseInt(baseContratual);
    valueTotal = valueTotal + sumBaseContratual;
    console.log(
      `O valor total do campo base_contratual da enterprises_buy e ${valueTotal}`
    );
  }
  let enterprisesBuyAgro = newResponse.enterprises_buy;
  let valueTotalAgro = 0;
  for (enterprisesBuyAgro of newResponse.enterprises_buy) {
    let baseContratualAgro = enterprisesBuy.especialization.base_contratual;
    let sumBaseContratualAgro = parseInt(baseContratualAgro);
    valueTotalAgro = valueTotalAgro + sumBaseContratualAgro;
    console.log(
      `O valor total do campo base_contratual da enterprises_buy_agro e ${valueTotal}`
    );
  }
});
Then(
  "Sera validado que o campo type nao pode ter o valor diferente de {string}",
  (valueType) => {
    let newResponse = JSON.parse(sessionStorage.getItem("JSONGet"));
    let enterprisesBuy = newResponse.enterprises_buy;
    for (enterprisesBuy of newResponse.enterprises_buy) {
      let especialization = enterprisesBuy.especialization;
      let type = especialization.command.type;
      if (type !== valueType) {
        throw new Error(
          `O campo type da enterprises_buy so pode conter o valor contrato anual e o campo do nome: ${enterprisesBuy.nome} tem o valor ${type}`
        );
      }
    }
    let enterprisesBuyAgro = newResponse.enterprises_buy_agro;
    for (enterprisesBuyAgro of newResponse.enterprises_buy_agro) {
      let especializationAgro = enterprisesBuyAgro.especialization;
      let type = especializationAgro.command.type;
      if (type !== valueType) {
        throw new Error(
          `O campo type da enterprises_buy_agro so pode conter o valor contrato anual e o campo do nome: ${enterprisesBuy.nome} tem o valor ${type}`
        );
      }
    }
  }
);
