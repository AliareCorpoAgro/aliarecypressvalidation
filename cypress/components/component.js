export class InicializationAcess{
    acessIniciatilation(endpoint){
        return cy.request("GET", endpoint).should((response) =>{
            sessionStorage.setItem("JSONGet", JSON.stringify(response.body))
        })
    }
}
