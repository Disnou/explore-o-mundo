const dadosMundiais = {
  "Stonehenge": {
    foto: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Stonehenge%2C_Condado_de_Wiltshire%2C_Inglaterra%2C_2014-08-12%2C_DD_12.JPG",
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
    foto: "grandemuralha.jpg",
    populacao: "21,5 milhões (Pequim)",
    historia: "Estrutura militar com mais de 21.000 km, construída ao longo de várias dinastias para proteger o império de invasões.",
    costumes: "Servir chá quente para os hóspedes como sinal de respeito e praticar Tai Chi Chuan ao amanhecer."
  },
  "Pelourinho": {
    foto: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Largo_do_Pelourinho_-_Salvador.JPG",
    populacao: "2,4 milhões (Salvador)",
    historia: "Centro Histórico de Salvador, famoso por suas casas coloniais coloridas. Foi o coração da primeira capital do Brasil.",
    costumes: "Comer acarajé fresco servido pelas baianas e curtir o som dos tambores do Olodum nas terças-feiras."
  },
  "Pirâmides de Gizé": {
    foto: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800",
    populacao: "9 milhões (Cairo)",
    historia: "As únicas sobreviventes das Sete Maravilhas do Mundo Antigo, construídas como tumbas para os faraós há mais de 4.500 anos.",
    costumes: "A cultura local egípcia é fortemente ligada aos bazares de especiarias e ao chá de hibisco, servido em negociações."
  },
  "Taj Mahal": {
    foto: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
    populacao: "1,5 milhão (Agra)",
    historia: "Um imenso mausoléu de mármore branco construído em 1632 pelo imperador Shah Jahan em memória de sua esposa favorita.",
    costumes: "O respeito rigoroso aos templos, retirando os sapatos antes de entrar, e a rica culinária baseada em curry e pão naan."
  },
  "Estátua da Liberdade": {
    foto: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?w=800",
    populacao: "8,4 milhões (Nova York)",
    historia: "Presente da França aos EUA em 1886, tornou-se o maior símbolo de liberdade e esperança para milhões de imigrantes.",
    costumes: "A vida acelerada de Nova York, o clássico pedaço de pizza dobrado ao meio e os passeios de domingo no Central Park."
  },
  "Monte Fuji": {
    foto: "https://upload.wikimedia.org/wikipedia/commons/6/60/Mount_Fuji_from_Lake_Shoji_%2815443819010%29.jpg",
    populacao: "Área de preservação",
    historia: "A montanha mais alta do Japão é um vulcão ativo (adormecido desde 1707) e um local sagrado que inspirou séculos de arte.",
    costumes: "Escalar a montanha à noite para ver o 'Goraiko' (o nascer do sol no topo) é uma jornada espiritual para os japoneses."
  },
  "Acrópole de Atenas": {
    foto: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=800",
    populacao: "3,1 milhões (Atenas)",
    historia: "A cidadela antiga mais famosa do mundo, coroada pelo Parthenon, símbolo do surgimento da democracia na Grécia Antiga.",
    costumes: "Refeições longas em tabernas locais, quebrando pratos em comemorações e o alto consumo de azeite e queijo feta."
  },
  "Petra": {
    foto: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800",
    populacao: "Patrimônio arqueológico",
    historia: "A 'Cidade Rosa' da Jordânia foi esculpida diretamente nas paredes de arenito pelos Nabateus há mais de 2.000 anos.",
    costumes: "A hospitalidade beduína é lendária, onde convidados são recebidos com café temperado com cardamomo em tendas no deserto."
  },
  "Chichén Itzá": {
    foto: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800",
    populacao: "Patrimônio arqueológico",
    historia: "Uma das cidades mais importantes da civilização Maia no México, famosa pela pirâmide de Kukulcán, que serve como calendário de pedra.",
    costumes: "Durante os equinócios, as sombras formam uma serpente descendo a pirâmide, atraindo multidões que celebram a herança Maia."
  },
  "Angkor Wat": {
    foto: "https://www.worldhistory.org/uploads/images/11887.jpg",
    populacao: "Patrimônio no Camboja",
    historia: "O maior monumento religioso do mundo, originalmente construído no século XII como um templo hindu antes de se tornar budista.",
    costumes: "Monges budistas em vestes açafrão caminham pelo complexo ao amanhecer para receber oferendas da população local."
  },
  "Sagrada Família": {
    foto: "https://upload.wikimedia.org/wikipedia/commons/8/85/Barcelona-02-Sagrada_Familia-1983-gje.jpg",
    populacao: "1,6 milhão (Barcelona)",
    historia: "A obra-prima inacabada de Antoni Gaudí. A construção desta basílica monumental começou em 1882 e continua sendo financiada por doações.",
    costumes: "O estilo de vida catalão, as tapas ao entardecer e a profunda valorização da arquitetura modernista que define a cidade."
  },
  "Burj Khalifa": {
    foto: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800",
    populacao: "3,3 milhões (Dubai)",
    historia: "O arranha-céu mais alto do mundo, com 828 metros. É um símbolo da rápida transformação de Dubai em um polo global moderno.",
    costumes: "Uma mistura de tradições islâmicas (como o Ramadã) com o estilo de vida hiper-luxuoso e multicultural de expatriados."
  },
  "Sydney Opera House": {
    foto: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800",
    populacao: "5,3 milhões (Sydney)",
    historia: "Inaugurada em 1973, suas conchas brancas icônicas mudaram a arquitetura do século XX e o horizonte da Austrália.",
    costumes: "Cultura altamente focada no surfe, churrascos na praia (BBQ) e forte respeito aos povos aborígines originais."
  },
  "Cataratas do Iguaçu": {
    foto: "https://images.unsplash.com/photo-1548625149-fc4607a96811?w=800",
    populacao: "250.000 (Foz do Iguaçu)",
    historia: "O maior conjunto de quedas d'água do mundo, formado por 275 cachoeiras na fronteira entre Brasil e Argentina.",
    costumes: "O consumo diário de chimarrão e tereré, e a integração multicultural única entre brasileiros, argentinos e paraguaios na Tríplice Fronteira."
  },
  "Grand Canyon": {
    foto: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?w=800",
    populacao: "Área de preservação",
    historia: "Um desfiladeiro colossal escavado pelo Rio Colorado ao longo de milhões de anos no estado do Arizona, EUA.",
    costumes: "O ecoturismo forte e as tradições preservadas das tribos nativo-americanas, como os Navajo, que habitam a região há séculos."
  },
  "Big Ben": {
    foto: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Big_Ben%2C_Londres%2C_Inglaterra%2C_2014-08-11%2C_DD_199.JPG",
    populacao: "9 milhões (Londres)",
    historia: "O apelido do gigantesco sino do relógio do Palácio de Westminster, um ícone de resiliência britânica desde o século XIX.",
    costumes: "A pontualidade britânica, o chá das cinco e a movimentação incessante em pubs centenários após o horário de trabalho."
  },
  "Alhambra": {
    foto: "https://mundodele.com/en/wp-content/uploads/2025/10/Visit-Planning-Alhambra.webp",
    populacao: "230.000 (Granada)",
    historia: "Complexo de palácios e fortalezas na Espanha, é a joia máxima da arquitetura islâmica deixada pela dinastia Nasrida.",
    costumes: "A tradição andaluza do Flamenco, tocado em cavernas nas colinas, e o costume de servir tapas gratuitas junto com as bebidas."
  },
  "Ilha de Páscoa": {
    foto: "https://aventurasnahistoria.com.br/wp-content/uploads/2025/10/GettyImages-1218560484.jpg",
    populacao: "7.700",
    historia: "Um dos lugares mais isolados do mundo (Chile), famoso pelas quase 1.000 gigantescas estátuas de pedra chamadas Moai.",
    costumes: "A preservação profunda da cultura Rapa Nui, com festivais anuais de dança polinésia e o culto ao Homem-Pássaro."
  },
  "Salar de Uyuni": {
    foto: "https://upload.wikimedia.org/wikipedia/commons/6/64/Salar_de_Uyuni%2C_Bolivia%2C_2016-02-04%2C_DD_10-12_HDR.JPG",
    populacao: "Área extrema (Bolívia)",
    historia: "O maior e mais alto deserto de sal do mundo, formado pela transformação de lagos pré-históricos.",
    costumes: "Na época das chuvas, o deserto vira um espelho d'água gigante, refletindo o céu. O uso de lhamas e roupas coloridas de lã de alpaca é marcante."
  },
  "Lençóis Maranhenses": {
    foto: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Len%C3%A7%C3%B3is_Maranhenses_-_VI.jpg",
    populacao: "Área de preservação",
    historia: "Um espetáculo natural no nordeste brasileiro, formado por dunas de areia branca gigantes entrecortadas por lagoas de água da chuva.",
    costumes: "A culinária à base de peixes e a hospitalidade do povo maranhense, com forte herança das festas de Bumba Meu Boi."
  },
  "Jericoacoara": {
    foto: "https://images.unsplash.com/photo-1590523286786-fb713b194fb8?w=800",
    populacao: "Aprox. 20.000",
    historia: "Antiga vila de pescadores no Ceará que se tornou um dos destinos turísticos mais cobiçados do mundo, famosa por suas dunas e lagoas cristalinas.",
    costumes: "Subir a Duna do Pôr do Sol no fim da tarde e caminhar pelas ruas de areia, onde a circulação de carros comuns é proibida."
  },
  "Porto das Dunas (Beach Park)": {
    foto: "https://images.unsplash.com/photo-1583321500900-82807e458f3c?w=800",
    populacao: "Área turística (Aquiraz)",
    historia: "Praia cearense que abriga um dos maiores complexos aquáticos da América Latina, atraindo milhares de turistas em busca de lazer e adrenalina.",
    costumes: "Aproveitar as piscinas de ondas e toboáguas gigantes durante o dia e curtir a culinária litorânea nas barracas de praia."
  },
  "Canoa Quebrada": {
    foto: "https://images.unsplash.com/photo-1620300958173-0d3215239a5f?w=800",
    populacao: "Aprox. 4.000",
    historia: "Descoberta por hippies nos anos 70, esta praia no Ceará é mundialmente famosa por suas falésias avermelhadas e a marca da lua e estrela esculpida nelas.",
    costumes: "Passear de buggy pelas dunas, voar de parapente aproveitando os ventos fortes e curtir a vida noturna na rua principal, conhecida como 'Broadway'."
  },
  "Fernando de Noronha": {
    foto: "https://images.unsplash.com/photo-1588665971439-d8905380d3bb?w=800",
    populacao: "Aprox. 3.100",
    historia: "Arquipélago vulcânico brasileiro, declarado Patrimônio Natural da Humanidade pela UNESCO, abrigando algumas das praias mais bonitas do país.",
    costumes: "A prática intensa de mergulho para observar tartarugas e golfinhos, aliada a um forte controle de preservação ambiental."
  },
  "Santorini": {
    foto: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800",
    populacao: "15.500",
    historia: "Ilha grega formada após uma erupção vulcânica devastadora no século XVI a.C., famosa hoje por suas casas brancas com cúpulas azuis.",
    costumes: "Apreciar o lendário pôr do sol na vila de Oia e degustar o vinho local cultivado em solo vulcânico."
  },
  "Kyoto": {
    foto: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
    populacao: "1,45 milhão",
    historia: "Antiga capital imperial do Japão por mais de mil anos, preserva milhares de templos budistas clássicos, santuários xintoístas e jardins tradicionais.",
    costumes: "Participar da cerimônia do chá e caminhar pelo bairro de Gion, onde ainda é possível ver gueixas mantendo tradições seculares."
  },
  "Veneza": {
    foto: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800",
    populacao: "260.000",
    historia: "Construída sobre mais de 100 pequenas ilhas em uma lagoa no Mar Adriático, a cidade italiana não tem estradas, apenas canais.",
    costumes: "Navegar de gôndola pelos canais estreitos e participar do luxuoso e histórico Carnaval de Veneza, usando máscaras elaboradas."
  },
  "Yellowstone": {
    foto: "https://images.unsplash.com/photo-1549488344-c71542f7d383?w=800",
    populacao: "Parque Nacional (EUA)",
    historia: "O primeiro parque nacional do mundo, criado em 1872, famoso por sua vida selvagem e características geotérmicas impressionantes, como o gêiser Old Faithful.",
    costumes: "Acampar, observar ursos e bisões em seu habitat natural e caminhar pelas passarelas de madeira ao redor das fontes termais coloridas."
  },
  "Capadócia": {
    foto: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=800",
    populacao: "Região histórica (Turquia)",
    historia: "Famosa por suas 'chaminés de fada' (formações rochosas em formato de cone) e cidades subterrâneas escavadas por povos antigos para se protegerem de invasões.",
    costumes: "O clássico passeio de balão de ar quente ao amanhecer, enchendo o céu de cores sobre a paisagem árida."
  },
  "Banff": {
    foto: "https://images.unsplash.com/photo-1580835492471-a06806c9a3d4?w=800",
    populacao: "Parque Nacional (Canadá)",
    historia: "Localizado nas Montanhas Rochosas canadenses, o parque é mundialmente famoso por seus lagos glaciais de um azul turquesa impressionante, como o Lake Louise.",
    costumes: "Praticar esportes de inverno em estações de esqui de classe mundial e fazer trilhas em meio a florestas repletas de alces e ursos."
  },
  "Ilhas Maldivas": {
    foto: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
    populacao: "540.000",
    historia: "Nação tropical no Oceano Índico composta por 26 atóis em formato de anel, conhecidos internacionalmente pelo turismo de luxo e bangalôs sobre a água.",
    costumes: "Desfrutar da alta gastronomia nos resorts e mergulhar em recifes de corais habitados por raias-manta e tubarões-baleia."
  },
  "Bora Bora": {
    foto: "https://images.unsplash.com/photo-1583344605988-1d2ce8a0fc2e?w=800",
    populacao: "10.600",
    historia: "Pequena ilha na Polinésia Francesa, vulcânica e cercada por uma barreira de recifes, que serviu como base militar dos EUA na Segunda Guerra Mundial.",
    costumes: "Hospedar-se em bangalôs sobre palafitas na lagoa azul, passear de canoa polinésia e usar colares de flores frescas (Lei)."
  },
  "Amsterdã": {
    foto: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800",
    populacao: "820.000",
    historia: "A capital da Holanda começou como uma vila de pescadores no século XII e se tornou um dos portos mais importantes do mundo na Era de Ouro Holandesa.",
    costumes: "Usar a bicicleta como principal meio de transporte, explorar museus de arte (como o Van Gogh) e navegar pelos canais históricos."
  },
  "Tromsø (Aurora Boreal)": {
    foto: "https://images.unsplash.com/photo-1531366936310-6cb1c8704285?w=800",
    populacao: "77.000",
    historia: "Conhecida como a 'Capital do Ártico', esta cidade norueguesa é o principal ponto de partida para expedições polares e observação do céu noturno.",
    costumes: "Fazer caçadas noturnas guiadas para ver as Luzes do Norte e passear em trenós puxados por cães da raça Husky."
  },
  "Cinque Terre": {
    foto: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cb8e?w=800",
    populacao: "4.000 (juntando as 5 vilas)",
    historia: "Um conjunto de cinco antigas vilas de pescadores cravadas em penhascos íngremes na Riviera Italiana, ligadas por trilhas estreitas.",
    costumes: "Caminhar pela 'Trilha Azul' entre as vilas, saborear o molho pesto original da região e beber vinhos produzidos em vinhedos verticais."
  },
  "Ouro Preto": {
    foto: "https://images.unsplash.com/photo-1621617426189-9b48c6b3e944?w=800",
    populacao: "74.000",
    historia: "Ex-capital de Minas Gerais, foi o principal palco da corrida do ouro no Brasil e da Inconfidência Mineira. Obras de Aleijadinho adornam a cidade.",
    costumes: "A forte vida universitária nas Repúblicas Estudantis e as procissões religiosas com tapetes de serragem na Semana Santa."
  },
  "Chapada Diamantina": {
    foto: "https://images.unsplash.com/photo-1589578131580-b2b91dbdb374?w=800",
    populacao: "Parque Nacional (Bahia)",
    historia: "Uma região de serras que foi um grande centro de extração de diamantes no século XIX, hoje convertida em paraíso do ecoturismo no Brasil.",
    costumes: "Fazer trilhas longas pelo Vale do Pati, tomar banho em cachoeiras exuberantes e visitar grutas com águas cristalinas."
  },
  "Deserto do Saara (Merzouga)": {
    foto: "https://images.unsplash.com/photo-1526401666795-356c9a3da2f1?w=800",
    populacao: "Vila (Marrocos)",
    historia: "Merzouga é a principal porta de entrada no Marrocos para as gigantescas dunas de Erg Chebbi, formadas pelos ventos no maior deserto quente do mundo.",
    costumes: "Atravessar as dunas em camelos ao pôr do sol, dormir em acampamentos berberes sob as estrelas e ouvir música tradicional ao redor da fogueira."
  },
  "Central Park": {
    foto: "https://images.unsplash.com/photo-1522083111301-4c126581458e?w=800",
    populacao: "Parque Urbano (Nova York)",
    historia: "Um oásis verde de 843 acres no coração de Manhattan, projetado no século XIX para dar aos nova-iorquinos um refúgio da cidade industrializada.",
    costumes: "Fazer piqueniques no Sheep Meadow, patinar no gelo no inverno e assistir a apresentações de músicos independentes pelos caminhos do parque."
  },
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

