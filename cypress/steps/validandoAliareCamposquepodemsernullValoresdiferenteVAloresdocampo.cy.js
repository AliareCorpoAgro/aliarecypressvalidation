import { InicializationAcess } from "../components/component";

const acess = new InicializationAcess();

Given(
  "Que seja efetuado um get no endpoint da mockableTwo {word}",
  (endpoint) => {
    acess.acessInicialization(endpoint);
  }
);
When(
  "For validado que so os campos price_sign currency rating category podem ter o valor null",
  () => {
    let newResponse = JSON.parse(sessionStorage.getItem("JSONGet"));
    for (newResponse of newResponse) {
      expect(newResponse.id).to.be.not.null;
      expect(newResponse.brand).to.be.not.null;
      expect(newResponse.name).to.be.not.null;
      expect(newResponse.price).to.be.not.null;
      expect(newResponse.image_link).to.be.not.null;
      expect(newResponse.product_link).to.be.not.null;
      expect(newResponse.website_link).to.be.not.null;
      expect(newResponse.description).to.be.not.null;
      expect(newResponse.product_type).to.be.not.null;
      expect(newResponse.tag_list).to.be.not.null;
      expect(newResponse.created_at).to.be.not.null;
      expect(newResponse.updated_at).to.be.not.null;
      expect(newResponse.product_api_url).to.be.not.null;
      expect(newResponse.api_featured_image).to.be.not.null;
      expect(newResponse.product_colors).to.be.not.null;
    }
  }
);
And(
  "For validado a quantidade dentro do campo product_colors pois so podem ter {int} itens",
  (numberProductColors) => {
    let newResponse = JSON.parse(sessionStorage.getItem("JSONGet"));
    for (newResponse of newResponse) {
      let productColor = newResponse.product_colors.length;
      console.log(
        `A empresa ${newResponse.name} tem ${productColor} itens no campo product_color`
      );
      if (productColor > numberProductColors) {
        throw new Error(
          `O campo product_color só pode ter 20 itens e a empresa ${newResponse.name} tem ${productColor} itens`
        );
      }
    }
  }
);
And(
  "For validado a quantidade dentro do campo tag_list pos so e permitido {int} itens",
  (numberTagList) => {
    let newResponse = JSON.parse(sessionStorage.getItem("JSONGet"));
    for (newResponse of newResponse) {
      let tagList = newResponse.tag_list.length;
      console.log(
        `A empresa ${newResponse.name} tem ${tagList} itens no campo tag_list`
      );
      if (tagList > numberTagList) {
        throw new Error(
          `O campo tag_list só pode ter 10 itens e a empresa ${newResponse.name} tem ${tagList} itens`
        );
      }
    }
  }
);
Then(
  "Sera validado o campo product_type nao pode ter o valor {string}",
  (valueProductType) => {
    let newResponse = JSON.parse(sessionStorage.getItem("JSONGet"));
    for (newResponse of newResponse) {
      let productType = newResponse.product_type;
      if (productType === valueProductType) {
        throw new Error(
          `O campo product_type nao pode ter o valor em analise e a empresa ${newResponse.name} tem o campo ${productType}, id: ${newResponse.id}`
        );
      }
    }
  }
);
