const bt1 = document.getElementById("btn1");
const bt2 = document.getElementById("btn2");
const bt3 = document.getElementById("btn3");
const pg1 = document.getElementById("pg1");
const pg2 = document.getElementById("pg2");
const pg3 = document.getElementById("pg3");
const corpo = document.getElementById("corpo");
var atual = 1;

function NextPage(bot) {
  if (atual != bot) {
    switch (atual) {
      case 1:
        pg1.style.display = "none";
        break;
      case 2:
        pg2.style.display = "none";
        break;
      case 3:
        pg3.style.display = "none";
        break;
    }
    switch (bot) {
      case 1:
        corpo.style.backgroundColor = "#485461";
        pg1.style.display = "block";
        atual = 1;
        break;
      case 2:
        corpo.style.backgroundColor = "#051937";
        pg2.style.display = "block";
        atual = 2;
        break;
      case 3:
        corpo.style.backgroundColor = "#4c4177";
        pg3.style.display = "block";
        atual = 3;
        break;
    }
  }
}
