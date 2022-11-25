export class InicializationAcess{
    acessInicialization(endpoint){
        return cy.request("GET", endpoint).should((response) =>{
            sessionStorage.setItem("JSONGet", JSON.stringify(response.body))
        })
    }
}
