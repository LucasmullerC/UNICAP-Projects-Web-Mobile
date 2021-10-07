const Resultado = document.getElementById("resultado");
function CarregarTextS(lat,long) {
    fetch("https://text-similarity-calculator.p.rapidapi.com/stringcalculator.php?ftext="+lat+"&stext="+long+"", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "text-similarity-calculator.p.rapidapi.com",
            "x-rapidapi-key": "0781853661msh9a6850b90d5da32p104d9ajsnf3d14e714ca2"
        }
    })
    .then(response => response.json())
    .then(dados => {
        Resultado.innerHTML= dados.percentage+"% de similaridade!";
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
}