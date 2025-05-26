const Key = "aff9ce78850fb8cbd6022112a7847c9e" 

function cliqueiNoBotao() { 

    const cidade = document.querySelector(".input-cidade").value
    
    buscarCidade(cidade)
}

async function buscarCidade(cidade) { // função de buscar o nome da cidade no servidor, no caso o nome da cidade que foi digitado no input pelo usúario.

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${Key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

    colocardadosNaTela(dados)
}

function colocardadosNaTela(dados) {
    
   document.querySelector(".cidade").innerHTML = dados.name
   document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) +"°C"
   document.querySelector(".previsao").innerHTML = dados.weather[0].description
   document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
   document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}