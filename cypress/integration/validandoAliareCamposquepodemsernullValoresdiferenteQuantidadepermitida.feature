Feature: validar que apenas os campos price_sign, currency, rating, category, pode ser null, o valores dos campos tem que ser igual ao informado e pedido

    Scenario: validando que apenas os campos price_sign, currency, rating, category, pode ser null, o valores dos campos tem que ser igual ao informado e pedido
    Given Que seja efetuado um GET no endpoint da mockableThree http://demo7018197.mockable.io/
    When For validado que so os campos price_sign, currency, rating, category podem ter o valor null
    And For validado os campos tag_list e product_colors devem ser listado mostrando o valores que contem
    And For validado que o campo rating tiver o valor zero deve ser informado
    And For validado o campo category nao pode conter o valor invalid
    And For validado se o campo currency se igual a 1000 o campo rating precisa esta igual ou acima de 9.5 nao pode ultrapassar 10
    Then Sera validado tag_list e product_colors nao pode ter o valor maior que 10
