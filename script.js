// ATENÇÃO: Para isso funcionar perfeitamente, você precisará adicionar o link
// do destino-script.js lá no seu index.html, antes deste script!

// Copia automaticamente todos os nomes dos lugares que você cadastrou no outro arquivo
const destinos = [
  "Stonehenge", "Torre Eiffel", "Machu Picchu", "Cristo Redentor", "Coliseu", 
  "Grande Muralha da China", "Pelourinho", "Pirâmides de Gizé", "Taj Mahal", 
  "Estátua da Liberdade", "Monte Fuji", "Acrópole de Atenas", "Petra", 
  "Chichén Itzá", "Angkor Wat", "Sagrada Família", "Burj Khalifa", 
  "Sydney Opera House", "Cataratas do Iguaçu", "Grand Canyon", "Big Ben", 
  "Alhambra", "Ilha de Páscoa", "Salar de Uyuni", "Lençóis Maranhenses"
];

function sortearDestino() {
  const indiceAleatorio = Math.floor(Math.random() * destinos.length);
  const destinoSorteado = destinos[indiceAleatorio];
  window.location.href = `destino.html?local=${encodeURIComponent(destinoSorteado)}`;
}