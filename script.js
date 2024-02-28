const imagens = {
  'Titã Fundador': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3-j4wghSTm9BCVt6AvRcOyIlSqYCBcFgRNQ&usqp=CAU',
  'Titã Mandíbula': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0dzgUVvqQBBhovl7vTRlWhmpfGA_mW_ucRg&usqp=CAU',
  'Titã Encouraçado': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6SAwmeKJSEYOggAA9lJQ-x_QnmQmMPMsOw&usqp=CAU',
  'Titã Colossal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0uaA63utQk2KYRrEjcO3PE2l2eSrGcS6wXg&usqp=CAU',
  'Titã Fêmea': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRKbgeCzaJrH20tMcFAPqGnfKT_GYMJLGzg&usqp=CAU',
  'Titã Bestial': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFJ-OyvMyQVD5sTskwyuJjB7c2BHFX5XZ7g&usqp=CAU',
  'Titã Martelo de Guerra': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vv3cv9NBs1H0c_73W65GdmkXfIoz09Y6cg&usqp=CAU',
  'Titã Quadrúpede': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvdQLTvXPPlfAxTjMFhuTyI_sW4GG8oAsa2g&usqp=CAU',
  'Titã de atack': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRluRx_Zyz_jRel6nzT6VjynB0LRzWp4KVrDg&usqp=CAU'
};

const titans = {
  'Titã Fundador': 'Possui o poder de controlar outros titãs e alterar as memórias das pessoas. É considerado o titã mais poderoso.',
  'Titã Mandíbula': 'Tem uma mandíbula extremamente forte e pode facilmente quebrar aço. Também pode se regenerar rapidamente.',
  'Titã Encouraçado': 'Possui uma camada espessa de pele que o protege de ataques físicos e de fogo. É muito resistente.',
  'Titã Colossal': 'É extremamente alto (60 metros) e pode liberar um grande fluxo de calor ao se transformar. É capaz de causar grandes danos com seus ataques.',
  'Titã Fêmea': 'Tem habilidades de combate e regeneração semelhantes às dos outros titãs, mas é única em seu gênero. Pode se transformar em uma forma que se assemelha a uma mulher.',
  'Titã Bestial': 'Pode controlar outros titãs e usá-los para atacar. Tem um olfato muito aguçado e pode se comunicar com outros titãs.',
  'Titã Martelo de Guerra': 'Tem habilidades de combate corpo a corpo muito poderosas, incluindo a capacidade de lançar poderosas ondas de choque através do solo. Pode ser usado como arma pelos humanos.',
  'Titã Quadrúpede': 'Tem quatro patas e é muito rápido e ágil. Pode se mover em terrenos difíceis e é muito difícil de capturar.',
  'Titã de atack': 'É um titã humanoide que pode se mover rapidamente e tem habilidades de regeneração poderosas. É um dos titãs mais comuns e é frequentemente usado para o combate.'
};



const imagemResultado = document.getElementById("imagem-resultado");

function exibirMensagem() {
  const resultado = document.getElementById("resultado").innerHTML;
  imagemResultado.src = imagens[resultado];
}

function fecharMensagem() {
  const dialogo = document.getElementById("dialogo");
  dialogo.style.display = "none"; 
}

function calcularResultado() {
  let pontos = 0;
  const resposta1 = document.querySelector('input[name="pergunta1"]:checked').value;
  const resposta2 = document.querySelector('input[name="pergunta2"]:checked').value;
  const resposta3 = document.querySelector('input[name="pergunta3"]:checked').value;
  const resposta4 = document.querySelector('input[name="pergunta4"]:checked').value;
  const resposta5 = document.querySelector('input[name="pergunta5"]:checked').value;
  const resposta6 = document.querySelector('input[name="pergunta6"]:checked').value;
  const resposta7 = document.querySelector('input[name="pergunta7"]:checked').value;
  const resposta8 = document.querySelector('input[name="pergunta8"]:checked').value;
  const resposta9 = document.querySelector('input[name="pergunta9"]:checked').value;
  const resposta10 = document.querySelector('input[name="pergunta10"]:checked').value;
  pontos = parseInt(resposta1) + parseInt(resposta2) + parseInt(resposta3) + parseInt(resposta4) + parseInt(resposta5) + parseInt(resposta6) + parseInt(resposta7) + parseInt(resposta8) + parseInt(resposta9) + parseInt(resposta10);

  let resultado = '';
  if (pontos >= 10 && pontos <= 12) {
    resultado = 'Titã Fundador';
  } else if (pontos >= 12 && pontos <= 14) {
    resultado = 'Titã Mandíbula';
  } else if (pontos >= 14 && pontos <= 16) {
    resultado = 'Titã Encouraçado';
  } else if (pontos >= 16 && pontos <= 18) {
    resultado = 'Titã Colossal';
  } else if (pontos >= 18 && pontos <= 20) {
    resultado = 'Titã Fêmea';
  } else if (pontos >= 20 && pontos <= 22) {
    resultado = 'Titã Bestial';
  } else if (pontos >= 22 && pontos <= 24) {
    resultado = 'Titã Martelo de Guerra';
  } else if (pontos >= 24 && pontos <= 26) {
    resultado = 'Titã Quadrúpede';
  } else {
    resultado = 'Titã de atack';
  }

  const resultadoTexto = document.getElementById("resultado");
  resultadoTexto.innerHTML = "Você é uma pessoa um tanto excêntrica e de objetivos duvidosos. Você, caso fosse um dos personagens do anime a receber um titã, com certeza seria o "+resultado+" este titã "+ titans[resultado];

  const dialogo = document.getElementById("dialogo");
  const imagemResultado = document.getElementById("imagemResultado");
  imagemResultado.src = imagens[resultado];

  dialogo.style.display = "block"; // exibe o diálogo com o resultado
}

