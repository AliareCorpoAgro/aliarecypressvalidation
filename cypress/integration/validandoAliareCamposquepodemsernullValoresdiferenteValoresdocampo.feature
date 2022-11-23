Feature: validar que so os campos price_sign, currency, rating, category podem ser null, quantidade dentro do campo, e o campo product_type  nao pode ter o valor diferente

    Scenario: Validando que so os campos price_sign, currency, rating, category podem ser null, quantidade dentro do campo, e o campo product_type  nao pode ter o valor diferente
    Given Que seja efetuado um get no endpoint da mockableTwo http://demo7063957.mockable.io/
    When For validado que so os campos price_sign currency rating category podem ter o valor null
    And For validado a quantidade dentro do campo product_color pois so podem ter 20 itens
    And For validado a quantidade dentro do campo tag_list pos so e permitido 10 itens
    Then Sera validado o campo product_type nao pode ter o valor em analise