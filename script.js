// Lista de pontos turísticos cadastrados que podem ser sorteados
const destinos = [
  "Stonehenge",
  "Torre Eiffel",
  "Machu Picchu"
];

function sortearDestino() {
  // Escolhe um índice aleatório dentro do array 'destinos'
  const indiceAleatorio = Math.floor(Math.random() * destinos.length);
  const destinoSorteado = destinos[indiceAleatorio];
  
  // Envia o usuário para a página destino.html levando o nome do lugar na URL
  window.location.href = `destino.html?local=${encodeURIComponent(destinoSorteado)}`;
}