import { InicializationAcess } from "../components/component";

const acess = new InicializationAcess();

Given(
  "Que seja efetuado um GET no endpoint da mockableThree {word}",
  (endpoint) => {
    acess.acessInicialization(endpoint);
  }
);
When(
  "For validado que so os campos price_sign, currency, rating, category podem ter o valor null",
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
  "For validado os campos tag_list e product_colors devem ser listado mostrando o valores que contem",
  () => {
    let newResponse = JSON.parse(sessionStorage.getItem("JSONGet"));
    for (newResponse of newResponse) {
      let tagList = newResponse.tag_list.length;
      let productType = newResponse.product_type.length;
      console.log(`O id: ${newResponse.id} contem ${tagList} itens na tag_list e contem ${productType} no product_colors`)
    }
  }
);
And(
  "For validado que o campo rating tiver o valor {int} deve ser informado",
  (numberZero) => {
    let newResponse = JSON.parse(sessionStorage.getItem("JSONGet"));
    for (newResponse of newResponse) {
      let rating = newResponse.rating;
      if (rating === numberZero) {
        throw new Error(`O id: ${newResponse.id} tem o rating igual a ${rating}, e nao pode ter o valor igual a zero`)
      }
    }
  }
);
And("For validado o campo category nao pode conter o valor {word}", (valueCategory) => {
  let newResponse = JSON.parse(sessionStorage.getItem("JSONGet"));
  for (newResponse of newResponse) {
    let category = newResponse.category;
    if (category === valueCategory) {
      throw new Error(`O id: ${newResponse.id} tem o category com o valor ${category}, e nao pode conter o valor invalid`)
    }
  }
});
And(
  "For validado se o campo currency se igual a {int} o campo rating precisa esta igual ou acima de {float} nao pode ultrapassar {int}",
  (numberCurrency, numberRatingFloat, numberRatingInt) => {
    let newResponse = JSON.parse(sessionStorage.getItem("JSONGet"));
    for (newResponse of newResponse) {
      let currency = newResponse.currency;
      let currenctInt = parseInt(currency)
      let rating = newResponse.rating;
      let ratingFloat = parseFloat(rating)
      if (currenctInt === numberCurrency) {
        if (ratingFloat < numberRatingFloat || ratingFloat > numberRatingInt) {
            throw new Error(`O id: ${newResponse.id} esta inrregular, pois o campo rating esta com o valor ${ratingFloat}, e deve ser igual a 9.5 ou acima e nao pode ultapassar 10`)
        }
      }
    }
  }
);
Then(
  "Sera validado tag_list e product_colors nao pode ter o valor maior que {word}",
  (numberTagList) => {
    let newResponse = JSON.parse(sessionStorage.getItem("JSONGet"));
    for (newResponse of newResponse){
        let tagList = newResponse.tag_list.length
        let productColor = newResponse.product_colors.length
        if(tagList > numberTagList){
            throw new Error(`O id: ${newResponse.id} tem o campo tag_list com o valor maior que 10, e o valor atual do campo e ${tagList}`)
        }
        if(productColor > numberTagList){
            throw new Error(`O id: ${newResponse.id} tem o campo product_colors com o valor maior que 10, e o valor atual do campo e ${productColor}`)
        }
    }
  }
);
