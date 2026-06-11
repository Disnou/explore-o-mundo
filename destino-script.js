// O seu banco de dados local com as informações detalhadas
const dadosMundiais = {
  "Stonehenge": {
    foto: "./pixnio-3648x2736.jpg", // Usa a sua foto local salvada na pasta
    populacao: "Aprox. 40.000 (Wiltshire)",
    historia: "Stonehenge é um monumento megalítico da Idade do Bronze, localizado na Inglaterra. Composto por pedras que pesam até 25 toneladas, sua construção começou há mais de 5.000 anos. Teorias apontam que servia como templo religioso, cemitério ou observatório astronómico.",
    costumes: "Até hoje, milhares de pessoas, incluindo grupos de druidas modernos, viajam para o local para celebrar o Solstício de Verão e de Inverno, observando o alinhamento perfeito do sol com as rochas gigantes."
  },
  "Torre Eiffel": {
    foto: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    populacao: "2,1 milhões (Paris)",
    historia: "Construída por Gustave Eiffel para a Exposição Universal de 1889 em Paris, a torre de ferro deveria ser temporária e demolida após 20 anos. No entanto, sua utilidade como antena de rádio salvou a estrutura, tornando-se o maior símbolo da França.",
    costumes: "Os parisienses têm o forte costume de fazer piqueniques no gramado do Campo de Marte, logo abaixo da torre, durante as tardes de verão. À noite, a torre pisca de hora em hora, iluminando a rotina da cidade."
  },
  "Machu Picchu": {
    foto: "https://images.unsplash.com/photo-1509216242873-7786f446f465?w=800",
    populacao: "Área protegida (Sem moradores fixos)",
    historia: "Conhecida como a 'Cidade Perdida dos Incas', foi construída no século XV a 2.430 metros de altitude, no Peru. Servia como palácio real ou santuário religioso e foi abandonada quando o império foi conquistado pelos espanhóis, sendo redescoberta apenas em 1911.",
    costumes: "A cultura andina local mantém forte respeito à 'Pachamama' (Mãe Terra). Guias e moradores locais costumam fazer pequenas oferendas com folhas de coca antes de subir as montanhas sagradas."
  }
};

// 1. Captura o parâmetro enviado na URL (ex: destino.html?local=Stonehenge)
const params = new URLSearchParams(window.location.search);
const localSorteado = params.get('local');

// 2. Se o local existir na nossa lista, insere os dados no HTML
if (localSorteado && dadosMundiais[localSorteado]) {
  const dados = dadosMundiais[localSorteado];
  
  document.getElementById('titulo-lugar').innerText = localSorteado;
  document.getElementById('foto-lugar').src = dados.foto;
  document.getElementById('populacao').innerText = dados.populacao;
  document.getElementById('historia').innerText = dados.historia;
  document.getElementById('costumes').innerText = dados.costumes;
} else {
  // Caso ocorra algum erro ou o destino sorteado não tenha dados cadastrados
  document.getElementById('titulo-lugar').innerText = localSorteado || "Erro";
  document.getElementById('populacao').innerText = "Não disponível";
  document.getElementById('historia').innerText = "Destino sorteado com sucesso! Adicione as informações dele no objeto 'dadosMundiais' no seu ficheiro 'destino-script.js'.";
  document.getElementById('costumes').innerText = "Não disponível";
  document.getElementById('foto-lugar').src = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800";
}