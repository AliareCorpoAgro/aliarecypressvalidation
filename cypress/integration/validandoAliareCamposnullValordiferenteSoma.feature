Feature: Validar que nem um campo seja null, valores nao seja diferente do surgerido, soma do campo 

    Scenario: Validando que nem um campo seja null. valores nao pode ser diferente do surgerido, e soma do campo
    Given Que seja efetuado um GET no endpoint http://demo3675470.mockable.io/
    When For validado que nenhum campo seja NULL
    And For validado que o campo tipo enterprises_buy nao pode ter o valor diferente de VENDA ou NEGOCIO
    And For validado o campo tipo de enterprises_buy_agro nao pode ter o valor diferente de AGRO e AFRE
    And For validado a soma total dos campo base_contratual
    Then Sera validado que o campo type nao pode ter o valor diferente de "contrato anual"