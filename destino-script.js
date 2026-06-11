const dadosMundiais = {
  "Stonehenge": {
    foto: "./pixnio-3648x2736.jpg",
    populacao: "Aprox. 40.000 (Wiltshire)",
    historia: "Monumento megalítico da Idade do Bronze, localizado na Inglaterra. Composto por pedras de até 25 toneladas, sua construção começou há mais de 5.000 anos.",
    costumes: "Milhares de pessoas viajam para o local para celebrar os Solstícios, observando o alinhamento perfeito do sol com as rochas gigantes."
  },
  "Torre Eiffel": {
    foto: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    populacao: "2,1 milhões (Paris)",
    historia: "Construída para a Exposição Universal de 1889, deveria ser temporária. Sua utilidade como antena de rádio a salvou da demolição.",
    costumes: "Fazer piqueniques no Campo de Marte durante o verão e observar a torre piscar de hora em hora à noite."
  },
  "Machu Picchu": {
    foto: "https://images.unsplash.com/photo-1509216242873-7786f446f465?w=800",
    populacao: "Área protegida",
    historia: "A 'Cidade Perdida dos Incas' foi construída no século XV a 2.430 metros de altitude e redescoberta em 1911.",
    costumes: "Moradores locais fazem pequenas oferendas com folhas de coca em respeito à 'Pachamama' (Mãe Terra)."
  },
  "Cristo Redentor": {
    foto: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800",
    populacao: "6,2 milhões (Rio de Janeiro)",
    historia: "Inaugurado em 1931 no Morro do Corcovado, é a maior escultura Art Déco do mundo e uma das Novas Sete Maravilhas.",
    costumes: "Aplaudir o pôr do sol no Arpoador e praticar esportes ao ar livre pelas praias e lagoas da cidade."
  },
  "Coliseu": {
    foto: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
    populacao: "2,8 milhões (Roma)",
    historia: "Maior anfiteatro já construído, concluído no ano 80 d.C., era palco de combates de gladiadores para até 65.000 espectadores.",
    costumes: "A tradição da 'passeggiata' (caminhada de fim de tarde) e o café expresso tomado rapidamente no balcão."
  },
  "Grande Muralha da China": {
    foto: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800",
    populacao: "21,5 milhões (Pequim)",
    historia: "Estrutura militar com mais de 21.000 km, construída ao longo de várias dinastias para proteger o império de invasões.",
    costumes: "Servir chá quente para os hóspedes como sinal de respeito e praticar Tai Chi Chuan ao amanhecer."
  },
  "Pelourinho": {
    foto: "https://images.unsplash.com/photo-1599423300746-b62533397364?w=800",
    populacao: "2,4 milhões (Salvador)",
    historia: "Centro Histórico de Salvador, famoso por suas casas coloniais coloridas. Foi o coração da primeira capital do Brasil.",
    costumes: "Comer acarajé fresco servido pelas baianas e curtir o som dos tambores do Olodum nas terças-feiras."
  },
  "Pirâmides de Gizé": {
    foto: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    populacao: "9 milhões (Cairo)",
    historia: "As únicas sobreviventes das Sete Maravilhas do Mundo Antigo, construídas como tumbas para os faraós há mais de 4.500 anos.",
    costumes: "A cultura local egípcia é fortemente ligada aos bazares de especiarias e ao chá de hibisco, servido em negociações."
  },
  "Taj Mahal": {
    foto: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    populacao: "1,5 milhão (Agra)",
    historia: "Um imenso mausoléu de mármore branco construído em 1632 pelo imperador Shah Jahan em memória de sua esposa favorita.",
    costumes: "O respeito rigoroso aos templos, retirando os sapatos antes de entrar, e a rica culinária baseada em curry e pão naan."
  },
  "Estátua da Liberdade": {
    foto: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    populacao: "8,4 milhões (Nova York)",
    historia: "Presente da França aos EUA em 1886, tornou-se o maior símbolo de liberdade e esperança para milhões de imigrantes.",
    costumes: "A vida acelerada de Nova York, o clássico pedaço de pizza dobrado ao meio e os passeios de domingo no Central Park."
  },
  "Monte Fuji": {
    foto: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    populacao: "Área de preservação",
    historia: "A montanha mais alta do Japão é um vulcão ativo (adormecido desde 1707) e um local sagrado que inspirou séculos de arte.",
    costumes: "Escalar a montanha à noite para ver o 'Goraiko' (o nascer do sol no topo) é uma jornada espiritual para os japoneses."
  },
  "Acrópole de Atenas": {
    foto: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    populacao: "3,1 milhões (Atenas)",
    historia: "A cidadela antiga mais famosa do mundo, coroada pelo Parthenon, símbolo do surgimento da democracia na Grécia Antiga.",
    costumes: "Refeições longas em tabernas locais, quebrando pratos em comemorações e o alto consumo de azeite e queijo feta."
  },
  "Petra": {
    foto: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    populacao: "Patrimônio arqueológico",
    historia: "A 'Cidade Rosa' da Jordânia foi esculpida diretamente nas paredes de arenito pelos Nabateus há mais de 2.000 anos.",
    costumes: "A hospitalidade beduína é lendária, onde convidados são recebidos com café temperado com cardamomo em tendas no deserto."
  },
  "Chichén Itzá": {
    foto: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    populacao: "Patrimônio arqueológico",
    historia: "Uma das cidades mais importantes da civilização Maia no México, famosa pela pirâmide de Kukulcán, que serve como calendário de pedra.",
    costumes: "Durante os equinócios, as sombras formam uma serpente descendo a pirâmide, atraindo multidões que celebram a herança Maia."
  },
  "Angkor Wat": {
    foto: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    populacao: "Patrimônio no Camboja",
    historia: "O maior monumento religioso do mundo, originalmente construído no século XII como um templo hindu antes de se tornar budista.",
    costumes: "Monges budistas em vestes açafrão caminham pelo complexo ao amanhecer para receber oferendas da população local."
  },
  "Sagrada Família": {
    foto: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    populacao: "1,6 milhão (Barcelona)",
    historia: "A obra-prima inacabada de Antoni Gaudí. A construção desta basílica monumental começou em 1882 e continua sendo financiada por doações.",
    costumes: "O estilo de vida catalão, as tapas ao entardecer e a profunda valorização da arquitetura modernista que define a cidade."
  },
  "Burj Khalifa": {
    foto: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    populacao: "3,3 milhões (Dubai)",
    historia: "O arranha-céu mais alto do mundo, com 828 metros. É um símbolo da rápida transformação de Dubai em um polo global moderno.",
    costumes: "Uma mistura de tradições islâmicas (como o Ramadã) com o estilo de vida hiper-luxuoso e multicultural de expatriados."
  },
  "Sydney Opera House": {
    foto: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    populacao: "5,3 milhões (Sydney)",
    historia: "Inaugurada em 1973, suas conchas brancas icônicas mudaram a arquitetura do século XX e o horizonte da Austrália.",
    costumes: "Cultura altamente focada no surfe, churrascos na praia (BBQ) e forte respeito aos povos aborígines originais."
  },
  "Cataratas do Iguaçu": {
    foto: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    populacao: "250.000 (Foz do Iguaçu)",
    historia: "O maior conjunto de quedas d'água do mundo, formado por 275 cachoeiras na fronteira entre Brasil e Argentina.",
    costumes: "O consumo diário de chimarrão e tereré, e a integração multicultural única entre brasileiros, argentinos e paraguaios na Tríplice Fronteira."
  },
  "Grand Canyon": {
    foto: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    populacao: "Área de preservação",
    historia: "Um desfiladeiro colossal escavado pelo Rio Colorado ao longo de milhões de anos no estado do Arizona, EUA.",
    costumes: "O ecoturismo forte e as tradições preservadas das tribos nativo-americanas, como os Navajo, que habitam a região há séculos."
  },
  "Big Ben": {
    foto: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    populacao: "9 milhões (Londres)",
    historia: "O apelido do gigantesco sino do relógio do Palácio de Westminster, um ícone de resiliência britânica desde o século XIX.",
    costumes: "A pontualidade britânica, o chá das cinco e a movimentação incessante em pubs centenários após o horário de trabalho."
  },
  "Alhambra": {
    foto: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    populacao: "230.000 (Granada)",
    historia: "Complexo de palácios e fortalezas na Espanha, é a joia máxima da arquitetura islâmica deixada pela dinastia Nasrida.",
    costumes: "A tradição andaluza do Flamenco, tocado em cavernas nas colinas, e o costume de servir tapas gratuitas junto com as bebidas."
  },
  "Ilha de Páscoa": {
    foto: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    populacao: "7.700",
    historia: "Um dos lugares mais isolados do mundo (Chile), famoso pelas quase 1.000 gigantescas estátuas de pedra chamadas Moai.",
    costumes: "A preservação profunda da cultura Rapa Nui, com festivais anuais de dança polinésia e o culto ao Homem-Pássaro."
  },
  "Salar de Uyuni": {
    foto: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    populacao: "Área extrema (Bolívia)",
    historia: "O maior e mais alto deserto de sal do mundo, formado pela transformação de lagos pré-históricos.",
    costumes: "Na época das chuvas, o deserto vira um espelho d'água gigante, refletindo o céu. O uso de lhamas e roupas coloridas de lã de alpaca é marcante."
  },
  "Lençóis Maranhenses": {
    foto: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    populacao: "Área de preservação",
    historia: "Um espetáculo natural no nordeste brasileiro, formado por dunas de areia branca gigantes entrecortadas por lagoas de água da chuva.",
    costumes: "A culinária à base de peixes e a hospitalidade do povo maranhense, com forte herança das festas de Bumba Meu Boi."
  }
};

// 1. Captura o parâmetro enviado na URL
const params = new URLSearchParams(window.location.search);
const localSorteado = params.get('local');

// 2. Insere os dados no HTML
if (localSorteado && dadosMundiais[localSorteado]) {
  const dados = dadosMundiais[localSorteado];
  
  document.getElementById('titulo-lugar').innerText = localSorteado;
  document.getElementById('foto-lugar').src = dados.foto;
  document.getElementById('populacao').innerText = dados.populacao;
  document.getElementById('historia').innerText = dados.historia;
  document.getElementById('costumes').innerText = dados.costumes;
} else {
  document.getElementById('titulo-lugar').innerText = localSorteado || "Erro";
  document.getElementById('populacao').innerText = "Não disponível";
  document.getElementById('historia').innerText = "Destino sorteado com sucesso! Adicione as informações dele no arquivo 'destino-script.js'.";
  document.getElementById('costumes').innerText = "Não disponível";
  document.getElementById('foto-lugar').src = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800";
}