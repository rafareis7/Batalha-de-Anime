var carta1 = {
  nome: "Sasuke",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzlwfx3q0NqsacR7YenG9C3dOIxi0TTJfiA&usqp=CAU",
  atributos: {
    força: 9,
    def: 5,
    magia: 9,
    velo: 10,
    intel: 6
  }
};
var carta2 = {
  nome: "Naruto",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DHJjqzhfzRJbjcVwViLjuwbJkkXAgQq12w&usqp=CAU",
  atributos: {
    força: 9,
    def: 8,
    magia: 9,
    velo: 10,
    intel: 4
  }
};
var carta3 = {
  nome: "Killua",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDuyCCHoSOlh892UX7RYD1couo8hcre-g0Q&usqp=CAU",
  atributos: {
    força: 7,
    def: 2,
    magia: 9,
    velo: 8,
    intel: 7
  }
};
var carta4 = {
  nome: "Gon",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd6h8G44TVMgaxVut7y7nIOd-hj2_i4nCS3g&usqp=CAU",
  atributos: {
    força: 8,
    def: 9,
    magia: 6,
    velo: 6,
    intel: 4
  }
};
var carta5 = {
  nome: "Goku",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhuPoqpgEcvb0eZjT2AHZyetZ4C0f4gEOlg&usqp=CAU",
  atributos: {
    força: 10,
    def: 7,
    magia: 10,
    velo: 10,
    intel: 3
  }
};
var carta6 = {
  nome: "Vegeta",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2vu0FsjeZ7rTzpC-R54Gsmjnmxb3lY0lLhg&usqp=CAU",
  atributos: {
    força: 9,
    def: 4,
    magia: 10,
    velo: 7,
    intel: 4
  }
};
var carta7 = {
  nome: "Freeza",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJYo75w8Bl7NKrGSGYLZPQ-iFRqc33mjVGA&usqp=CAU",
  atributos: {
    força: 7,
    def: 4,
    magia: 9,
    velo: 6,
    intel: 5
  }
};
var carta8 = {
  nome: "Madara",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_YCKhAj9XLHP7bcNnSRQlFi6sWhIzS8F3w&usqp=CAU",
  atributos: {
    força: 10,
    def: 8,
    magia: 10,
    velo: 9,
    intel: 6
  }
};
var carta9 = {
  nome: "Hisoka",
  imagem:
    "https://1.bp.blogspot.com/-KTsoX__dhp4/YTIq1gNYqeI/AAAAAAAAFgs/QLUt7dXTo3IdijbalIjOeHh7wk95lHWigCLcBGAsYHQ/s1373/Hisoka.jpg",
  atributos: {
    força: 7,
    def: 2,
    magia: 10,
    velo: 6,
    intel: 10
  }
};
var carta10 = {
  nome: "Levi",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukU03CR-3jFDrq7yEPsfQKO-nMlSL8XmRGQ&usqp=CAU",
  atributos: {
    força: 10,
    def: 5,
    magia: 0,
    velo: 8,
    intel: 6
  }
};
var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10
];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 10);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 10);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 10);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class= 'resultado-final'> Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class= 'resultado-final'> Perdeu </p>";
  } else {
    htmlResultado = "<p class= 'resultado-final'> Empatou </p>";
  }
  divResultado.innerHTML = htmlResultado;
  console.log(cartaMaquina);

  exibirCartaMaquina();
  document.getElementById("btnJogar").disabled = true;
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  //como funciona aquele aspas + com a escrita do CSS
  var moldura =
    '<img src = "https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id= 'opcoes' class= 'carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      cartaJogador.atributos[atributo];
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  //como funciona aquele aspas + com a escrita do CSS
  var moldura =
    '<img src = "https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id= 'opcoes' class= 'carta-status2'>";

  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}