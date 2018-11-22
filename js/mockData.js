const speakers = [
  {
    image: 'assets/images/speakers/02_Tais-Araujo.png',
    name: 'Taís Araújo',
    speakerFunction: 'Atriz',
    description: `
      Taís Araújo é atriz, apresentadora e jornalista carioca. Versátil, atua em televisão, cinema e teatro e foi a primeira atriz
      negra a protagonizar uma telenovela brasileira. Atualmente protagoniza a terceira temporada de Mr. Brau, da TV Globo,
      segue em turnê pelo Brasil com a peça “O Topo da Montanha”, e apresenta o programa Saia Justa, no canal GNT. A atriz
      é um ícone do empoderamento negro e da militância por igualdade racial.`,
  },
  {
    image: 'assets/images/speakers/17_Clovis-de-Barros-Filho.png',
    name: 'Clóvis de Barros Filho',
    speakerFunction: 'Professor doutor e escritor',
    description: `Clóvis de Barros Filho, professor, doutor e livre-docente pela ECAUSP, teve suas aulas e palestras sobre ética ouvidas por
    milhões de pessoas em todo Brasil, além de países como Espanha, França, Uruguai, México, Argentina e Portugal. Atua
    no mundo corporativo desde 2005 por meio do Espaço Ética, atendendo empresas dos mais diversos portes e ramos de
    negócios.`,
  },
  {
    image: 'assets/images/speakers/23_Heloisa-Schurmann.png',
    name: 'Heloísa Schurmann',
    speakerFunction: 'Educadora e escritora',
    description: `Professora de Inglês formada pela New York University com especialização em pedagogia, educou os quatro filhos nas duas expedições
    de volta ao mundo da Família Schurmann. Pesquisadora, escritora, autora de três best sellers nacionais, desenvolveu
    o Programa Pedagógico da expedição Magalhães Global Adventure, intitulado “Educação na Aventura”, que foi acompanhado
    por mais de 2 milhões de alunos no Brasil e nos EUA.`,
  },
  {
    image: 'assets/images/speakers/11_Lucas-Silveira.png',
    name: 'Lucas Silveira',
    speakerFunction: 'Músico e compositor',
    description: 'Lucas Silveira é músico, cantor, compositor, instrumentista e produtor musical. Ele é vocalista da banda Fresno.',
  },
  {
    image: 'assets/images/speakers/10_Marcos-Piangers.png',
    name: 'Marcos Piangers',
    speakerFunction: 'Jornalista e escritor',
    description: `Marcos Piangers é jornalista, comunicador do programa Pretinho Básico, da Rádio Atlântida, e assina colunas no Zero Hora
    e no caderno Nós, do Diário Catarinense. Seu livro “O Papai é Pop” vendeu mais de 60 mil exemplares. Sua página
    no Facebook fala sobre todas as bênçãos e frustrações de ser pai e como aproveitar da melhor forma cada dia com
    os filhos.`,
  },
  {
    image: 'assets/images/speakers/21_Ana-Cardoso.png',
    name: 'Ana Cardoso',
    speakerFunction: 'Jornalista e escritora',
    description: `Ana Cardoso é jornalista e mestre em sociologia política. Trabalhou com esportes radicais na Rádio Atlântida por seis anos,
    fez pesquisa em assentamentos do MST e está profundamente envolvida com grupos feministas e assuntos de família
    em Porto Alegre, onde vive com o marido, o também jornalista Marcos Piangers, e duas filhas.`,
  },
  {
    image: 'assets/images/speakers/03_Rodrigo-Mendes.png',
    name: 'Rodrigo Hübner Mendes',
    speakerFunction: 'Empreendedor social',
    description: `Rodrigo Hübner Mendes dedica-se a garantir que toda pessoa com deficiência tenha acesso à educação de qualidade na escola
    comum. Professor e pesquisador, membro da rede de empreendedores sociais Ashoka e Young Global Leaders (Fórum Econômico
    Mundial), fundou o Instituto Rodrigo Mendes (rm. org.br), que desenvolve programas de pesquisa, formação continuada
    e controle social na área da educação inclusiva.`,
  },
  {
    image: 'assets/images/speakers/05_Palavra-Cantada.png',
    name: 'Palavra cantada (Paulo Tatit e Sandra Peres)',
    speakerFunction: 'Dupla Musical',
    description: `Dupla musical formada por Sandra Peres e Paulo Tatit. Palavra Cantada cria canções e encanta as crianças brasileiras há 23
    anos. Já atingiu mais de um milhão de pessoas com seus shows e vendeu mais de 5 milhões de CDs, além de ter contribuído
    para a formação de grande número de educadores por meio da coleção didática Brincadeiras Musicais e Brincadeirinhas
    Musicais e da distribuição de kits educacionais.`,
  },
  {
    name: 'Dominic Barter',
    speakerFunction: 'Especialista em educação não violenta',
    description: `O inglês Dominic Barter preside o conselho do Centro Internacional de Comunicação Não Violenta. Radicado no Brasil há 23
    anos, dedica-se a projetos que aplicam os Círculos Restaurativos, processo de resposta comunitária ao conflito nascido
    nos morros do Rio de Janeiro e utilizado por diversos grupos e instituições, dentre os quais nosso sistema de justiça.`,
  },
  {
    name: 'Karen Jonz',
    speakerFunction: 'Skatista profissional',
    description: `Karen Jonz, atleta profissional e tetracampeã mundial de skate vertical, também é empreendedora, compositora, artista e mãe
    da Sky. Ganhou a primeira medalha de ouro pelo Brasil nos X Games.`,
  },
  {
    name: 'Stephanie Ribeiro',
    speakerFunction: 'Arquiteta e escritora',
    description: `Stephanie Ribeiro é formada em Arquitetura e Urbanismo pela PUC de Campinas, ativista feminista negra e escritora. Também
    é colunista da revista Marie Claire e publicará seu primeiro livro pela Companhia das Letras em breve.`,
  },
  {
    name: 'Tiê',
    speakerFunction: 'Cantora',
    description: `Tiê é formada em Relações Públicas na FAAP e estudou canto em Nova Iorque. É cantora e compositora e gravou seu primeiro
    álbum em 2009 com a participação de Toquinho e vários artistas independentes. Tiê tem três discos lançados pela
    Warner Music.`,
  },
  {
    name: 'Alessandro Marimpietri',
    speakerFunction: 'Psicólogo',
    description: `Alessandro Marimpietri é psicólogo, pesquisador e professor universitário. Atua no âmbito da educação, psicologia e psicanálise,
    abordando as principais demandas com que se deparam os jovens, pais e educadores da nossa sociedade.`,
  },
  {
    name: 'Diana Boccara & Leo Longo',
    speakerFunction: 'Ela é roteirista e ele é diretor de TV',
    description: `Diana Boccara, roteirista e produtora de TV, criou, com o diretor de TV Leo Longo, o projeto independente e colaborativo
    Around the World in 80 Music Videos, com o qual deram a volta ao mundo para rodar videoclipes com bandas de rock
    em 22 países, resultando na primeira série global de videoclipes.`,
  },
  {
    name: 'Santa Jam Vó Alberta',
    speakerFunction: 'Grupo musical',
    description: `A Santa Jam Vó Alberta é mais que uma banda, é uma reunião de estudo e interpretação da música regional, passeando do folk
    ao baião, do blues à violada, da música cigana ao jazz tradicional. No epicentro de suas experiências, o lema é
    a busca incessante pela conexão das pessoas por meio da música, a liberdade de poder fazer o som para alimentar
    a alma.`,
  },
  {
    name: 'Mark Van Loo',
    speakerFunction: 'Coreógrafo',
    description: `Graduado em educação física e esportes, é terapeuta corporal e personal trainer. Ator formado pela Braapa, coreógrafo, dançarino
    e professor especialista em danças urbanas. Diretor e fundador da Bombelêla. Apresentador e mestre de cerimônias.`,
  },
  {
    name: 'Ana Clara Nunes',
    speakerFunction: 'Estudante',
    description: 'Ana Clara Nunes, 14 anos, estudante, foi selecionada para o Projeto Transformar 2017. Ana Clara mora em Curitiba.',
  },
  {
    name: 'Anamari Souza',
    speakerFunction: 'Poeta',
    description: `Anamari escreve desde os 15 anos, é apaixonada por educação e está em dúvida entre estudar filosofia e pedagogia. Publicou
    uma poesia falada nas redes sociais que repercutiu amplamente, sendo divulgada pela Rede Globo em uma campanha nacional
    pelo Respeito.`,
  },
  {
    name: 'Billy De Assis',
    speakerFunction: 'Pedagogo',
    description: `Billy de Assis é pedagogo, psicopedagogo e especialista em deficiência intelectual, trabalhando nessa área com jovens e adultos
    no CIEJA Campo Limpo, em São Paulo. Acima de tudo, considera-se um agente multiplicador de energia positiva. Seu
    reconhecimento na área de educação inclui os prêmios Paulo Freire, Construindo a Nação, Educação em DH, Professor
    Destaque e Darcy Ribeiro, entre outros.`,
  },
  {
    name: 'Joyce Fernandes (Preta-Rara)',
    speakerFunction: 'Rapper',
    description: `Joyce Fernandes, conhecida como Preta Rara, é rapper, turbanista, professora de história, modelo Plus Size, poetisa e proprietária
    da marca “Audácia Afro Moda”. Atua e milita em movimentos negros e feministas e criou o movimento #EuEmpregadaDoméstica`,
  },
  {
    name: 'Braz Nogueira',
    speakerFunction: 'Educador',
    description: `Braz Nogueira foi professor de escola pública por 19 anos, diretor da Escola EMEF Presidente Campos Salles por mais vinte
    e diretor regional de educação do Ipiranga por 1 ano e 8 meses. Construiu um projeto de integração entre a escola
    e a comunidade que virou referência. A escola foi escolhida em 2001 para o lançamento do Projeto Escola Aberta da
    Cidade de São Paulo.`,
  },
  {
    name: 'Caio Ferreira',
    speakerFunction: 'Ilusionista',
    description: `Caio Ferreira é especialista em manipulação, uma categoria de efeitos mágicos que envolvem apenas as habilidades manuais
    do artista. Premiado e reconhecido internacionalmente como um dos melhores do segmento na América Latina, sua principal
    marca é a interpretação de clássicos da mágica com acompanhamento de música erudita.`,
  },
  {
    name: 'Ciência em Show',
    speakerFunction: 'Cientistas e empreendedores',
    description: `Os professores Wilson Namen, Gerson Santos e Daniel Angelo criaram o Ciência em Show e, junto com a pedagoga e especialista
    em tecnologia, Ana Ralston, trabalham para levar o ensino da ciência e da tecnologia de forma lúdica, em formato
    de show e videoaulas, para projetos na TV, internet, editoras, espaços públicos e instituições de ensino.`,
  },
  {
    name: 'Claudia Siqueira',
    speakerFunction: 'Historiadora e educadora',
    description: `Claudia Siqueira, diretora do Instituto Sidarta, é historiadora, pedagoga e consultora educacional. Atua há mais de 30 anos
    em educação, tendo como foco de pesquisa o estudo da primeira infância. Já apresentou projetos de educação em várias
    regiões do Brasil, Japão, EUA, América Latina e Europa.`,
  },
  {
    name: 'Débora Pessoa',
    speakerFunction: 'Estudante',
    description: `Débora Pessoa, 18 anos, ex-aluna da EEM Ronaldo Caminha Barbosa de Cascavel (CE), estudante de farmácia no CEBRAC, representou
    o Nordeste no Projeto Transformar, venceu a Feira Regional e Estadual de Ciências e Cultura promovida pela Seduc,
    foi premiada em mais de 10 eventos científicos nacionais e internacionais. Foi uma das vencedoras do “Desafio Criativos
    da Escola 2016”.`,
  },
  {
    name: 'Ferréz',
    speakerFunction: 'Escritor',
    description: `Ferréz é o nome artístico de Reginaldo Ferreira da Silva, escritor, rapper, romancista, contista, poeta e empreendedor. Ferréz
    é ligado à corrente considerada literatura marginal por ser desenvolvida na periferia de São Paulo e tratar de temas
    relacionados a esse universo. Seu livro “Capão Pecado” já foi traduzido para o inglês, alemão, espanhol e italiano.`,
  },
  {
    name: 'Giuliano Chiaradia',
    speakerFunction: 'Publicitário',
    description: `Giuliano Chiaradia, Master Class em Inovação Digital pela escola sueca Hyper Island, é ex-diretor e autor na Rede Globo de
    Televisão e criativo da MTV/Nickelodeon na América Latina. Fundador do coletivo Set Experimental, idealizou o projeto
    #Artmobile, inovação social que ensina jovens ao redor do mundo a fazer arte com o telefone celular.`,
  },
  {
    name: 'Lourdes Atié',
    speakerFunction: 'Socióloga',
    description: `Lourdes Atié, socióloga com pós-graduação em educação na Faculdade Latino-Americana de Ciências Sociais (FLACSO), na Argentina,
    trabalha com educação e comunicação e produz conteúdos para editoras. Edita a revista Pátio e é consultora da Faber-Castell,
    onde trabalha, principalmente, na capacitação de professores.`,
  },
  {
    name: 'Mariana Breim',
    speakerFunction: 'Pedagoga',
    description: `Mariana Breim é pedagoga, formadora de educadores e atua há 15 anos como autora de programas de formação continuada para
    redes municipais de ensino no Brasil. Dirige o Instituto Toca há 5 anos para promover a educação sistêmica, o desenvolvimento
    integral e a alfabetização ecológica de adultos e crianças por meio de uma escola experimental, parcerias com escolas
    públicas, cursos e vivências.`,
  },
  {
    name: 'Teko Porã',
    speakerFunction: 'Banda',
    description: `Banda de músicos de rua formada por Pablo Nomás (violão), Kinda Assis (viola), Bia Rezende (voz) e Caio Gregory (bandolim).
    A banda Teko Porã faz música de estilo MPB Cigana e costuma tocar nos corredores e vagões do metrô de São Paulo.`,
  },
  {
    name: 'Mayara Silva de Souza',
    speakerFunction: 'Advogada',
    description: `Bacharel em Direito pela Universidade São Judas Tadeu, ativista social, poeta, membro do Coletivo Poetas do Tietê e do projeto
    Asas Abertas. É mentora do Plano de Menina, projeto social de empoderamento de meninas da comunidade criado pela
    jornalista Viviane Duarte.`,
  },
  {
    name: 'Ricardo Geromel',
    speakerFunction: 'Empreendedor',
    description: `Ricardo Geromel é formado em gestão empresarial. Foi sócio do clube Fort Lauderdale Strikers. Ricardo é diretor de relações
    com a comunidade do clube de futebol San Francisco Deltas, na cidade de San Francisco, nos Estados Unidos.`,
  },
  {
    name: 'Rodrigo Geribello',
    speakerFunction: 'Empreendedor',
    description: `Rodrigo Geribello é empresário, explicador profissional, músico e sonoplasta. Formado pela FGV, há 18 anos ajuda as pessoas
    a se explicarem de forma simples e elegante. Estuda piano clássico há 30 anos e hoje se dedica à Abre Aspas (empresa
    especializada em Explicações Profissionais), bem como à música e ao teatro, onde usa suas habilidades de reproduzir
    efeitos sonoros com a boca.`,
  },
  {
    name: 'Vanessa Negravat',
    speakerFunction: 'Música',
    description: `Vanessa Negravat é soprano, bacharel em música com habilitação em canto erudito pela Universidade Cruzeiro do Sul. Formada
    no Coro Acadêmico da Osesp, participou de diversos corais como Coralusp, Cantafro, com Estevão Maya, Madrigal Cantovivo
    com Joaquim Paulo do Espírito Santo e o Coral Jovem do Estado de São Paulo. Em parceria especial para o TEDxSãoPaulo
    com Fefe Camilo (percussão) e Alice Oliveira (harpa).`,
  },
  {
    name: 'Carlos (Kiko) Fairbairn',
    speakerFunction: 'Educador',
    description: `Carlos Fairbairn é formado em administração e pósgraduado em gestão ambiental pela UFRJ. É fotógrafo e sua obra chegou a
    ilustrar três vezes a seção “fotos do dia” da página da Nasa na internet. Venceu o concurso “Fotógrafo de Astronomia
    do Ano” organizado pelo Observatório Real de Greenwich.`,
  },
  {
    name: 'Ana Holanda',
    speakerFunction: 'Jornalista',
    description: `Ana Holanda, jornalista pela PUC-SP, atua há 20 anos no mercado de revistas e é editora-chefe da revista Vida Simples, além
    de assinar a coluna Comida de Alma, sobre gastronomia afetiva, na revista Máxima. Ana criou o projeto Minha Mãe
    Fazia no Facebook, no qual relaciona memórias afetivas com comidinhas do dia a dia.`,
  },
  {
    name: 'Mustache e os Apaches',
    speakerFunction: 'Banda',
    description: `Banda formada pelos gaúchos Pedro Pastoriz, Tomás Oliveira , Axel Flag, Jack Rubens e pelo mineiro Lumineiro. A banda lançou
    os álbuns: Mustache & os Apaches, Chuva Ácida (2014) e Time is Monkey (2015).`,
  },
  {
    name: 'Os Escolhidos',
    speakerFunction: 'Banda',
    description: `O grupo Os Escolhidos nasceu em 2014 e é formado por refugiados e imigrantes da República Democrática do Congo. Eles cantam
    diferentes gêneros, como rumba congolesa, zouk, world music e outros ritmos tradicionais de seu país. São poliglotas
    e cantam em lingala, kikongo, swahili, inglês, francês e português.`,
  },
  {
    name: 'Luiz Eduardo Anelli',
    speakerFunction: 'Doutor e professor',
    description: `Luiz Eduardo Anelli é paleontólogo, escritor e professor no Instituto de Geociências da USP. Formado na Universidade Estadual
    de Londrina, pós-graduado pelo Instituto de Geociências da USP, obteve o título de mestre em 1994. No mesmo ano,
    ingressou no doutorado, realizando análises cladísticas de invertebrados do Carbonífero. Fez pósdoutorado em 2009
    pela UNESP. Foi o idealizador e curador da exposição “Dinos na Oca e Outros Animais Pré-Históricos em 2006.`,
  },
];
const aboutInfos = [
  {
    title: 'Sobre o TED',
    text: 'É uma organização sem ﬁns lucrativos com o propósito de promover ideias que merecem ser espalhadas. TED começou com uma conferência de quatro dias na Califórnia há mais de 30 anos e cresceu para apoiar ideias que mudam o mundo. Saiba mais no site TED.com e siga TED no Twitter, @TEDTalks, ou facebook.com/TED.',
    image: 'assets/images/about/speaker01.png',
  },
  {
    title: 'Sobre o TEDx',
    text: 'No espírito de “ideias que merecem ser espalhadas”, o TEDx é um programa de eventos locais organizados de maneira independente, que reúne pessoas para compartilhar experiências como a de uma conferência TED. Em um evento TEDx, há uma combinação de vídeos de TEDTalks e palestrantes, para gerar discussões profundas e conexões em grupos locais. Esses eventos locais e organizados de maneira independente levam a marca TEDx, onde x = evento TED organizado de maneira independente.',
    image: 'assets/images/about/speaker03.png',
  },
  {
    title: 'Sobre o TEDx SãoPaulo',
    text: 'No espírito de “ideias que merecem ser espalhadas”, o TEDx é um programa de eventos locais organizados de maneira independente, que reúne pessoas para compartilhar experiências como a de uma conferência TED. Em um evento TEDx, há uma combinação de vídeos de TEDTalks e palestrantes, para gerar discussões profundas e conexões em grupos locais. Esses eventos locais e organizados de maneira independente levam a marca TEDx, onde x = evento TED organizado de maneira independente.',
    image: 'assets/images/about/speaker02.png',
  },
];
export {
  speakers,
  aboutInfos,
};
