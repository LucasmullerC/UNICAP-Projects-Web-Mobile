const nomes = ["João", "Maria", "Ana", "José", "Marcos", "Cristina"];
let pessoas = [];

const listaNomes = document.getElementById("nomes");
const inputNome = document.getElementById("nome");
const btInserir = document.getElementById("btInserir");
const btProx = document.getElementById("btProx");
const btBack = document.getElementById("btBack");
let cont = 1;
function carregarPessoas() {
  fetch("https://swapi.dev/api/people/?page=1")
    .then(response => response.json())
    .then(dados => {
      pessoas = dados.results;
      criarListaPessoas();
    })
    .catch(e => {
      console.log("Erro", e);
    });
}

function criarListaPessoas() {
  listaNomes.type = "I";
  listaNomes.innerHTML = "";
  pessoas.forEach(pessoa => {
    const newLi = document.createElement("li");
    const newText = document.createTextNode(`${pessoa.name} - ${pessoa.gender}`);
    newLi.appendChild(newText);
    listaNomes.appendChild(newLi);
  });
}
function nextPessoa() {
  cont++;
  fetch("https://swapi.dev/api/people/?page="+cont)
    .then(response => response.json())
    .then(dados => {
      pessoas = dados.results;
      criarListaPessoas();
    })
    .catch(e => {
      console.log("Erro", e);
    });
}
function backPessoa() {
  cont--;
  if (cont < 1) {
    cont = 1;
  }
  fetch("https://swapi.dev/api/people/?page="+cont)
    .then(response => response.json())
    .then(dados => {
      pessoas = dados.results;
      criarListaPessoas();
    })
    .catch(e => {
      console.log("Erro", e);
    });
}

function inserirNome() {
  let nome = inputNome.value.trim();
  if (!nome) {
    alert("Digite um nome!");
    return;
  }
  nomes.push(nome);
  inputNome.value = "";
  inputNome.focus();
  criarLista2();
}

function criarLista1() {
  listaNomes.type = "A";
  listaNomes.innerHTML = "";
  nomes.forEach(nome => {
    listaNomes.innerHTML += `<li>${nome}</li>`;
  });
}

function criarLista2() {
  listaNomes.type = "I";
  listaNomes.innerHTML = "";
  nomes.forEach(nome => {
    const newLi = document.createElement("li");
    const newText = document.createTextNode(`${nome}!`);
    newLi.appendChild(newText);
    listaNomes.appendChild(newLi);
  });
}

btInserir.onclick=inserirNome;
btProx.onclick=nextPessoa;
btBack.onclick=backPessoa;
carregarPessoas();

