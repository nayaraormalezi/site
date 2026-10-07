/**
 * Conteúdo indexável da simulação — espelha temas reais do site CAIXA Consórcio
 * (Central de Ajuda + Blog + páginas institucionais).
 */
window.SITE_CONTENT = [
  // —— Central de Ajuda ——
  {
    id: "ajuda-como-funciona",
    type: "ajuda",
    title: "Como funciona o consórcio?",
    excerpt:
      "O consórcio funciona como uma poupança programada em grupo. Você escolhe o valor da carta e o prazo, e concorre todo mês por sorteio ou lance.",
    body:
      "O consórcio funciona como uma poupança programada em grupo. Quando você contrata, escolhe o valor da carta de crédito (exemplo: R$300 mil para um apartamento) e o prazo (exemplo: 150 meses). Sua parcela mensal é calculada dividindo o valor total pelo número de meses, mais a taxa de administração e fundo de reserva. Todo mês acontece uma assembleia onde os participantes são contemplados de duas formas: sorteio (onde a apuração da cota sorteada é realizada mensalmente com base no resultado da Loteria Federal anterior à data da assembleia) ou lance (quem oferece maior valor antecipado). Quando você é contemplado, recebe uma carta de crédito no valor contratado e pode comprar seu bem. Importante: você continua pagando as parcelas normalmente até o final do contrato. O consórcio não tem juros, apenas taxa de administração (diluída em todas as parcelas do contrato), o que gera economia significativa comparado a financiamentos tradicionais. É uma forma segura, regulada pelo Banco Central e que exige planejamento, mas compensa pela economia.",
    url: "ajuda.html?id=ajuda-como-funciona",
    category: "Todas as dúvidas",
    tags: ["consórcio", "como funciona", "assembleia", "carta"],
  },
  {
    id: "ajuda-quem-pode",
    type: "ajuda",
    title: "Quem pode fazer consórcio?",
    excerpt:
      "Qualquer pessoa física maior de 18 anos ou pessoa jurídica pode contratar. Não é necessário ter conta na CAIXA.",
    body:
      "Qualquer pessoa física maior de 18 anos ou pessoa jurídica pode contratar um consórcio. Não é necessário ter conta na CAIXA ou ser correntista. Para participar, basta ter CPF ou CNPJ regular, comprovante de renda e residência. Durante a contratação não há análise de crédito, mas quando você for contemplado, será necessário estar com o nome limpo para receber a carta de crédito.",
    category: "Todas as dúvidas",
    url: "ajuda.html?id=ajuda-quem-pode",
    tags: ["elegibilidade", "cpf", "cnpj", "contratação"],
  },
  {
    id: "ajuda-consorcio-vs-financiamento",
    type: "ajuda",
    title: "Qual a diferença entre consórcio e financiamento?",
    excerpt:
      "No consórcio você não paga juros, só taxa de administração. No financiamento há juros mensais que encarecem o bem.",
    body:
      "No consórcio você não paga juros, só taxa de administração. No financiamento há juros mensais que encarecem muito o bem. O consórcio é mais econômico no longo prazo, pois a taxa de administração é diluída ao longo de todo o contrato.",
    category: "Todas as dúvidas",
    url: "ajuda.html?id=ajuda-consorcio-vs-financiamento",
    tags: ["juros", "taxa", "comparação"],
  },
  {
    id: "ajuda-contemplacao",
    type: "ajuda",
    title: "Quanto tempo demora para ser contemplado?",
    excerpt:
      "Você pode ser sorteado no primeiro mês ou acelerar com lances. Em média, entre 18 e 36 meses, variando por grupo.",
    body:
      "Depende! Você pode ser sorteado logo no primeiro mês ou dar lances para acelerar. Em média, clientes são contemplados entre 18 e 36 meses, mas isso varia por grupo. A contemplação acontece por sorteio ou por lance nas assembleias mensais.",
    category: "Todas as dúvidas",
    url: "ajuda.html?id=ajuda-contemplacao",
    tags: ["sorteio", "lance", "assembleia", "prazo"],
  },
  {
    id: "ajuda-fgts",
    type: "ajuda",
    title: "Posso usar meu FGTS no consórcio?",
    excerpt:
      "Sim, no consórcio imobiliário: para lances, amortizar ou liquidar saldo e complementar a carta de crédito.",
    body:
      "Sim! Para consórcio imobiliário, você pode usar seu FGTS para dar lances, amortizar ou liquidar saldo devedor e complementar o valor da carta de crédito, conforme as regras do fundo e da CAIXA Consórcio.",
    category: "Todas as dúvidas",
    url: "ajuda.html?id=ajuda-fgts",
    tags: ["fgts", "imobiliário", "lance"],
  },
  {
    id: "ajuda-imovel-planta",
    type: "ajuda",
    title: "Posso comprar imóvel na planta com o consórcio?",
    excerpt:
      "Sim, se a construtora aceitar e houver garantia complementar com imóvel urbano livre de ônus.",
    body:
      "Sim, se a construtora aceitar e houver garantia complementar com imóvel urbano livre de ônus.",
    category: "Todas as dúvidas",
    url: "ajuda.html?id=ajuda-imovel-planta",
    tags: ["imóvel", "planta", "garantia"],
  },
  {
    id: "ajuda-reforma",
    type: "ajuda",
    title: "Posso usar o consórcio para reforma ou construção?",
    excerpt:
      "Sim. A carta pode ser usada para construir ou reformar. É necessário documentação e projeto aprovado.",
    body:
      "Sim. A carta pode ser usada para construir ou reformar. É necessário documentação e projeto aprovado.",
    category: "Todas as dúvidas",
    url: "ajuda.html?id=ajuda-reforma",
    tags: ["reforma", "construção", "imobiliário"],
  },
  {
    id: "ajuda-terreno",
    type: "ajuda",
    title: "Posso comprar terreno com consórcio?",
    excerpt:
      "Sim, terreno urbano. Para terreno rural, é preciso apresentar imóvel urbano como garantia complementar.",
    body:
      "Sim, terreno urbano. Para terreno rural, é preciso apresentar imóvel urbano como garantia complementar.",
    category: "Todas as dúvidas",
    url: "ajuda.html?id=ajuda-terreno",
    tags: ["terreno", "rural", "urbano"],
  },
  {
    id: "ajuda-vistoria-imovel",
    type: "ajuda",
    title: "Como funciona a vistoria do consórcio imobiliário?",
    excerpt:
      "A vistoria confirma se o bem atende aos critérios da CAIXA Consórcio e pode ser aceito como garantia.",
    body:
      "A vistoria confirma se o bem atende aos critérios da CAIXA Consórcio e pode ser aceito como garantia.",
    category: "Todas as dúvidas",
    url: "ajuda.html?id=ajuda-vistoria-imovel",
    tags: ["vistoria", "garantia", "documentação"],
  },
  {
    id: "ajuda-liberacao-credito",
    type: "ajuda",
    title: "Quanto tempo leva para liberar o crédito após a contemplação?",
    excerpt:
      "Em média, de 30 a 45 dias após o envio completo da documentação e aprovação da vistoria.",
    body:
      "Em média, de 30 a 45 dias após o envio completo da documentação e aprovação da vistoria.",
    category: "Todas as dúvidas",
    url: "ajuda.html?id=ajuda-liberacao-credito",
    tags: ["crédito", "contemplação", "prazo"],
  },
  {
    id: "ajuda-carro-usado",
    type: "ajuda",
    title: "Posso comprar carro usado no consórcio?",
    excerpt:
      "Sim. Veículos com até 8 anos de fabricação, de qualquer marca ou modelo, sujeitos às regras de aceitação.",
    body:
      "Sim. Veículos com até 8 anos de fabricação, de qualquer marca ou modelo, sujeitos às regras de aceitação.",
    category: "Todas as dúvidas",
    url: "ajuda.html?id=ajuda-carro-usado",
    tags: ["veículos", "usado", "8 anos"],
  },
  {
    id: "ajuda-vistoria-veiculo",
    type: "ajuda",
    title: "Como funciona a vistoria do veículo?",
    excerpt:
      "Após a contemplação, o veículo passa por vistoria em empresa credenciada. O processo leva de 3 a 7 dias.",
    body:
      "Após a contemplação, o veículo passa por vistoria em empresa credenciada. O processo leva de 3 a 7 dias.",
    category: "Todas as dúvidas",
    url: "ajuda.html?id=ajuda-vistoria-veiculo",
    tags: ["vistoria", "veículos", "documentação"],
  },
  {
    id: "ajuda-renda-minima",
    type: "ajuda",
    title: "Qual a renda mínima para consórcio de carro ou moto?",
    excerpt:
      "O ideal é que a parcela não ultrapasse 30% da renda mensal ou faturamento anual comprovados.",
    body:
      "O ideal é que a parcela não ultrapasse 30% da renda mensal ou faturamento anual comprovados.",
    category: "Todas as dúvidas",
    url: "ajuda.html?id=ajuda-renda-minima",
    tags: ["renda", "parcela", "veículos"],
  },
  {
    id: "ajuda-transferir-cota",
    type: "ajuda",
    title: "Posso vender ou transferir minha cota?",
    excerpt:
      "Sim. Você pode transferir a cota a qualquer momento, desde que o novo titular seja aprovado pela CAIXA.",
    body:
      "Sim. Você pode transferir a cota a qualquer momento, desde que o novo titular seja aprovado pela CAIXA.",
    category: "Todas as dúvidas",
    url: "ajuda.html?id=ajuda-transferir-cota",
    tags: ["cota", "transferência", "venda"],
  },
  {
    id: "ajuda-parcela-reduzida",
    type: "ajuda",
    title: "O que é a Parcela Reduzida?",
    excerpt:
      "Opção de pagar 30% a menos na parcela por um período (ou até a contemplação). Ideal para aliviar o orçamento.",
    body:
      "Opção de pagar 30% a menos na parcela por um período (ou até a contemplação). Ideal para aliviar o orçamento.",
    category: "Todas as dúvidas",
    url: "ajuda.html?id=ajuda-parcela-reduzida",
    tags: ["parcela reduzida", "desconto", "orçamento"],
  },
  {
    id: "ajuda-fraudes",
    type: "ajuda",
    title: "Como se proteger de fraudes no consórcio?",
    excerpt:
      "A CAIXA não solicita Pix ou pagamentos extraordinários. Boletos oficiais iniciam com 10499 na linha digitável.",
    body:
      "A CAIXA não solicita Pix ou pagamentos extraordinários. Boletos oficiais iniciam com 10499 na linha digitável.",
    category: "Todas as dúvidas",
    url: "ajuda.html?id=ajuda-fraudes",
    tags: ["fraude", "golpe", "boleto", "segurança"],
  },
  {
    id: "ajuda-assembleia",
    type: "ajuda",
    title: "O que acontece na assembleia mensal?",
    excerpt:
      "Na assembleia ocorrem sorteios e análise de lances, definindo as cotas contempladas do grupo.",
    body:
      "Na assembleia ocorrem sorteios e análise de lances, definindo as cotas contempladas do grupo.",
    category: "Todas as dúvidas",
    url: "ajuda.html?id=ajuda-assembleia",
    tags: ["assembleia", "sorteio", "lance"],
  },
  {
    id: "ajuda-boleto",
    type: "ajuda",
    title: "Como emitir ou pagar meu boleto?",
    excerpt:
      "Acesse a Área do Cliente para emitir boletos. Confira sempre o cedente XS5 ADMª DE CONSÓRCIO S/A.",
    body:
      "Acesse a Área do Cliente para emitir boletos. Confira sempre o cedente XS5 ADMª DE CONSÓRCIO S/A.",
    category: "Todas as dúvidas",
    url: "ajuda.html?id=ajuda-boleto",
    tags: ["boleto", "pagamento", "área do cliente"],
  },
  {
    id: "ajuda-lance",
    type: "ajuda",
    title: "Como funciona o lance no consórcio?",
    excerpt:
      "O lance é uma oferta antecipada de parcelas para aumentar suas chances de contemplação na assembleia.",
    body:
      "O lance é uma oferta antecipada de parcelas para aumentar suas chances de contemplação na assembleia.",
    category: "Todas as dúvidas",
    url: "ajuda.html?id=ajuda-lance",
    tags: ["lance", "contemplação", "assembleia"],
  },

  // —— Blog ——
  {
    id: "blog-pessoa-juridica",
    type: "blog",
    title: "Consórcio para pessoa jurídica: como funciona sem comprometer o caixa da empresa?",
    excerpt:
      "Toda empresa, em algum momento, precisa de um bem de valor alto. Um caminhão, uma sala comercial, uma máquina nova. Nesse momento, a primeira ideia costuma ser buscar crédito bancário.",
    url: "artigo.html?id=blog-pessoa-juridica",
    tags: ["pessoa jurídica", "empresa", "caixa", "planejamento"],
    category: "Consórcio",
    image: "https://static.caixaconsorcio.com.br/ConsorcioDigital/assets/consorcio_para_pessoa_juridica_como_funciona_sem_comprometer_o_caixa_da_empresa_1700x670_75d9906f56.jpg",
    date: "6 out 2026",
    author: "CAIXA Consórcio",
    categories: ["Consórcio", "Finanças"],
    intro:
      "Toda empresa, em algum momento, precisa de um bem de valor alto. Um caminhão, uma sala comercial, uma máquina nova. Nesse momento, a primeira ideia costuma ser buscar crédito bancário. Existe, porém, um caminho que permite crescer sem comprometer o limite já aprovado no banco: o consórcio para pessoa jurídica.",
    sections: [
      {
        heading: "Por que o consórcio não é dívida bancária",
        paragraphs: [
          "Aqui está a diferença central. O consórcio não é um empréstimo e não entra como dívida no balanço da empresa antes da contemplação.",
          "Consequentemente, ele não consome o limite de crédito já aprovado pelo banco. Ou seja, a empresa mantém sua capacidade de negociação intacta para outras necessidades, como capital de giro.",
          "Além disso, não existe cobrança de juros. A empresa paga apenas uma taxa de administração e fundo de reserva, definida em contrato desde o início.",
          "Essa característica torna o consórcio uma ferramenta de planejamento, não de endividamento.",
        ],
      },
      {
        heading: "Quem pode contratar o consórcio para pessoa jurídica?",
        paragraphs: [
          "Qualquer empresa pode participar, independentemente do tamanho. MEI, microempresa, empresa de médio porte, todos se enquadram, cada um em qualquer regime tributário.",
          "Na prática, esse processo segue critérios claros. Por exemplo, no consórcio de veículos leves e pesados, a documentação de pessoa jurídica costuma incluir CNPJ atualizado e contrato social.",
          "Além disso, é preciso comprovar o faturamento, seja por balanço patrimonial/DRE, balancete ou pela declaração do Simples Nacional, conforme o regime da empresa.",
          "Ou seja, é um processo já estruturado, com regras claras.",
          "Entre os usos mais comuns estão a renovação de frota, a compra de máquinas e equipamentos, e a aquisição de imóveis comerciais como salas, galpões ou pontos de venda, conforme regra de aceitação da administradora.",
          "Portanto, o consórcio PJ atende tanto operação quanto expansão.",
        ],
      },
      {
        heading: "E o impacto no fluxo de caixa?",
        paragraphs: [
          "Diferente de comprar à vista, o consórcio distribui o valor do bem em parcelas ao longo de vários meses. Assim, a empresa não precisa esvaziar o caixa para adquirir um bem importante.",
          "Diferente do financiamento, também não existe entrada obrigatória e a análise de crédito ocorre no momento da adesão e contemplação, quando o crédito é efetivamente liberado.",
          "Esse enquadramento varia conforme o regime tributário adotado e a finalidade do bem. Por isso, o ideal é confirmar com o contador da empresa como essa despesa deve ser lançada em cada caso.",
        ],
      },
      {
        heading: "Um caminho mais consciente para crescer",
        paragraphs: [
          "No fim, o consórcio não resolve tudo. Para uma emergência de caixa, ele não é a ferramenta certa.",
          "Mas para quem planeja a médio prazo, faz sentido. A empresa cresce sem pagar juros e sem mexer no limite que já tem no banco.",
          "Quer saber como impulsionar o crescimento do seu negócio? Conheça as linhas disponíveis da CAIXA Consórcio e entenda todas as suas possibilidades.",
        ],
      },
    ],
  },
  {
    id: "blog-investimento-imoveis-2026",
    type: "blog",
    title: "Consórcio para investimento em imóveis: vale a pena em 2026?",
    excerpt:
      "Consórcio imobiliário pode ser o caminho mais barato para investir. Compare com financiamento e veja quando vale a pena.",
    url: "artigo.html?id=blog-investimento-imoveis-2026",
    image: "https://static.caixaconsorcio.com.br/ConsorcioDigital/assets/consorcio_para_pessoa_juridica_como_funciona_sem_comprometer_o_caixa_da_empresa_1700x670_75d9906f56.jpg",
    date: "6 out 2026",
    author: "CAIXA Consórcio",
    categories: ["Imobiliário"],
    intro: "Consórcio imobiliário pode ser o caminho mais barato para investir. Compare com financiamento e veja quando vale a pena.",
    sections: [
      {
        heading: "O que você precisa saber",
        paragraphs: [
          "Consórcio imobiliário pode ser o caminho mais barato para investir. Compare com financiamento e veja quando vale a pena.",
          "Neste conteúdo, a CAIXA Consórcio explica os pontos principais para você planejar com mais segurança e escolher a melhor estratégia para o seu momento.",
        ],
      },
      {
        heading: "Como o consórcio pode ajudar",
        paragraphs: [
          "Com parcelas planejadas e sem juros, o consórcio permite organizar o orçamento e conquistar o bem com previsibilidade. A contemplação ocorre por sorteio ou lance nas assembleias mensais.",
          "Antes de contratar, simule valores, compare prazos e confira as regras do grupo e da modalidade escolhida.",
        ],
      },
    ],
    tags: ["imobiliário", "investimento", "2026"],
    category: "Imobiliário",
  },
  {
    id: "blog-fraudes",
    type: "blog",
    title: "Orientações para não cair em fraudes no consórcio",
    excerpt:
      "Identifique golpes, analise propostas com cuidado e proteja seu dinheiro ao planejar suas conquistas.",
    url: "artigo.html?id=blog-fraudes",
    image: "https://static.caixaconsorcio.com.br/ConsorcioDigital/assets/consorcio_ou_entrada_em_imovel_qual_estrategia_faz_mais_sentido_1700x670_9fd967a526.jpg",
    date: "2 out 2026",
    author: "CAIXA Consórcio",
    categories: ["Consórcio"],
    intro: "Identifique golpes, analise propostas com cuidado e proteja seu dinheiro ao planejar suas conquistas.",
    sections: [
      {
        heading: "O que você precisa saber",
        paragraphs: [
          "Identifique golpes, analise propostas com cuidado e proteja seu dinheiro ao planejar suas conquistas.",
          "Neste conteúdo, a CAIXA Consórcio explica os pontos principais para você planejar com mais segurança e escolher a melhor estratégia para o seu momento.",
        ],
      },
      {
        heading: "Como o consórcio pode ajudar",
        paragraphs: [
          "Com parcelas planejadas e sem juros, o consórcio permite organizar o orçamento e conquistar o bem com previsibilidade. A contemplação ocorre por sorteio ou lance nas assembleias mensais.",
          "Antes de contratar, simule valores, compare prazos e confira as regras do grupo e da modalidade escolhida.",
        ],
      },
    ],
    tags: ["segurança", "fraude", "dicas"],
    category: "Consórcio",
  },
  {
    id: "blog-canais-oficiais",
    type: "blog",
    title: "Conheça os Canais Oficiais da CAIXA Consórcio",
    excerpt:
      "Saiba quais são os canais oficiais de atendimento e comunicação para evitar intermediários fraudulentos.",
    url: "artigo.html?id=blog-canais-oficiais",
    image: "https://static.caixaconsorcio.com.br/ConsorcioDigital/assets/Como_sair_do_aluguel_com_consorcio_imobiliario_passo_a_passo_completo_1700x670_725d3fe912.jpg",
    date: "28 set 2026",
    author: "CAIXA Consórcio",
    categories: ["Canais"],
    intro: "Saiba quais são os canais oficiais de atendimento e comunicação para evitar intermediários fraudulentos.",
    sections: [
      {
        heading: "O que você precisa saber",
        paragraphs: [
          "Saiba quais são os canais oficiais de atendimento e comunicação para evitar intermediários fraudulentos.",
          "Neste conteúdo, a CAIXA Consórcio explica os pontos principais para você planejar com mais segurança e escolher a melhor estratégia para o seu momento.",
        ],
      },
      {
        heading: "Como o consórcio pode ajudar",
        paragraphs: [
          "Com parcelas planejadas e sem juros, o consórcio permite organizar o orçamento e conquistar o bem com previsibilidade. A contemplação ocorre por sorteio ou lance nas assembleias mensais.",
          "Antes de contratar, simule valores, compare prazos e confira as regras do grupo e da modalidade escolhida.",
        ],
      },
    ],
    tags: ["canais", "atendimento", "segurança"],
    category: "Canais",
  },
  {
    id: "blog-razoes-imobiliario",
    type: "blog",
    title: "Consórcio Imobiliário: razões para contratar",
    excerpt:
      "Entenda como o consórcio facilita a compra programada de imóveis sem juros e com planejamento.",
    url: "artigo.html?id=blog-razoes-imobiliario",
    image: "https://static.caixaconsorcio.com.br/ConsorcioDigital/assets/consorcio_tem_juros_1700x670_4db853656f.jpg",
    date: "22 set 2026",
    author: "CAIXA Consórcio",
    categories: ["Imobiliário"],
    intro: "Entenda como o consórcio facilita a compra programada de imóveis sem juros e com planejamento.",
    sections: [
      {
        heading: "O que você precisa saber",
        paragraphs: [
          "Entenda como o consórcio facilita a compra programada de imóveis sem juros e com planejamento.",
          "Neste conteúdo, a CAIXA Consórcio explica os pontos principais para você planejar com mais segurança e escolher a melhor estratégia para o seu momento.",
        ],
      },
      {
        heading: "Como o consórcio pode ajudar",
        paragraphs: [
          "Com parcelas planejadas e sem juros, o consórcio permite organizar o orçamento e conquistar o bem com previsibilidade. A contemplação ocorre por sorteio ou lance nas assembleias mensais.",
          "Antes de contratar, simule valores, compare prazos e confira as regras do grupo e da modalidade escolhida.",
        ],
      },
    ],
    tags: ["imobiliário", "vantagens"],
    category: "Imobiliário",
  },
  {
    id: "blog-fgts",
    type: "blog",
    title: "Posso usar o FGTS no Consórcio? Saiba como",
    excerpt:
      "Guia prático sobre uso do FGTS para lances, amortização e complementação da carta imobiliária.",
    url: "artigo.html?id=blog-fgts",
    image: "https://static.caixaconsorcio.com.br/ConsorcioDigital/assets/consorcio_agro_opcao_para_comprar_maquinas_agricolas_cb1557ef64.jpg",
    date: "15 set 2026",
    author: "CAIXA Consórcio",
    categories: ["Imobiliário"],
    intro: "Guia prático sobre uso do FGTS para lances, amortização e complementação da carta imobiliária.",
    sections: [
      {
        heading: "O que você precisa saber",
        paragraphs: [
          "Guia prático sobre uso do FGTS para lances, amortização e complementação da carta imobiliária.",
          "Neste conteúdo, a CAIXA Consórcio explica os pontos principais para você planejar com mais segurança e escolher a melhor estratégia para o seu momento.",
        ],
      },
      {
        heading: "Como o consórcio pode ajudar",
        paragraphs: [
          "Com parcelas planejadas e sem juros, o consórcio permite organizar o orçamento e conquistar o bem com previsibilidade. A contemplação ocorre por sorteio ou lance nas assembleias mensais.",
          "Antes de contratar, simule valores, compare prazos e confira as regras do grupo e da modalidade escolhida.",
        ],
      },
    ],
    tags: ["fgts", "imobiliário"],
    category: "Imobiliário",
  },
  {
    id: "blog-casa-consorcio",
    type: "blog",
    title: "Vantagens de comprar uma casa com consórcio",
    excerpt:
      "Por que o consórcio é visto como investimento seguro para sair do aluguel ou ampliar o patrimônio.",
    url: "artigo.html?id=blog-casa-consorcio",
    image: "https://static.caixaconsorcio.com.br/ConsorcioDigital/assets/consorcio_para_pessoa_juridica_como_funciona_sem_comprometer_o_caixa_da_empresa_1700x670_75d9906f56.jpg",
    date: "8 set 2026",
    author: "CAIXA Consórcio",
    categories: ["Imobiliário"],
    intro: "Por que o consórcio é visto como investimento seguro para sair do aluguel ou ampliar o patrimônio.",
    sections: [
      {
        heading: "O que você precisa saber",
        paragraphs: [
          "Por que o consórcio é visto como investimento seguro para sair do aluguel ou ampliar o patrimônio.",
          "Neste conteúdo, a CAIXA Consórcio explica os pontos principais para você planejar com mais segurança e escolher a melhor estratégia para o seu momento.",
        ],
      },
      {
        heading: "Como o consórcio pode ajudar",
        paragraphs: [
          "Com parcelas planejadas e sem juros, o consórcio permite organizar o orçamento e conquistar o bem com previsibilidade. A contemplação ocorre por sorteio ou lance nas assembleias mensais.",
          "Antes de contratar, simule valores, compare prazos e confira as regras do grupo e da modalidade escolhida.",
        ],
      },
    ],
    tags: ["casa", "imobiliário", "vantagens"],
    category: "Imobiliário",
  },
  {
    id: "blog-carro-consorcio",
    type: "blog",
    title: "Vale a pena comprar carro com consórcio?",
    excerpt:
      "Compare custos, prazos e flexibilidade do consórcio de veículos leves frente ao financiamento tradicional.",
    url: "artigo.html?id=blog-carro-consorcio",
    image: "https://static.caixaconsorcio.com.br/ConsorcioDigital/assets/consorcio_ou_entrada_em_imovel_qual_estrategia_faz_mais_sentido_1700x670_9fd967a526.jpg",
    date: "1 set 2026",
    author: "CAIXA Consórcio",
    categories: ["Veículos Leves"],
    intro: "Compare custos, prazos e flexibilidade do consórcio de veículos leves frente ao financiamento tradicional.",
    sections: [
      {
        heading: "O que você precisa saber",
        paragraphs: [
          "Compare custos, prazos e flexibilidade do consórcio de veículos leves frente ao financiamento tradicional.",
          "Neste conteúdo, a CAIXA Consórcio explica os pontos principais para você planejar com mais segurança e escolher a melhor estratégia para o seu momento.",
        ],
      },
      {
        heading: "Como o consórcio pode ajudar",
        paragraphs: [
          "Com parcelas planejadas e sem juros, o consórcio permite organizar o orçamento e conquistar o bem com previsibilidade. A contemplação ocorre por sorteio ou lance nas assembleias mensais.",
          "Antes de contratar, simule valores, compare prazos e confira as regras do grupo e da modalidade escolhida.",
        ],
      },
    ],
    tags: ["carro", "veículos", "comparação"],
    category: "Veículos Leves",
  },
  {
    id: "blog-parcela-reduzida-leves",
    type: "blog",
    title: "Parcela Reduzida de Veículos Leves da CAIXA Consórcio",
    excerpt:
      "Como funciona a redução de 30% na parcela e para quem essa modalidade faz mais sentido.",
    url: "artigo.html?id=blog-parcela-reduzida-leves",
    image: "https://static.caixaconsorcio.com.br/ConsorcioDigital/assets/Como_sair_do_aluguel_com_consorcio_imobiliario_passo_a_passo_completo_1700x670_725d3fe912.jpg",
    date: "25 ago 2026",
    author: "CAIXA Consórcio",
    categories: ["Veículos Leves"],
    intro: "Como funciona a redução de 30% na parcela e para quem essa modalidade faz mais sentido.",
    sections: [
      {
        heading: "O que você precisa saber",
        paragraphs: [
          "Como funciona a redução de 30% na parcela e para quem essa modalidade faz mais sentido.",
          "Neste conteúdo, a CAIXA Consórcio explica os pontos principais para você planejar com mais segurança e escolher a melhor estratégia para o seu momento.",
        ],
      },
      {
        heading: "Como o consórcio pode ajudar",
        paragraphs: [
          "Com parcelas planejadas e sem juros, o consórcio permite organizar o orçamento e conquistar o bem com previsibilidade. A contemplação ocorre por sorteio ou lance nas assembleias mensais.",
          "Antes de contratar, simule valores, compare prazos e confira as regras do grupo e da modalidade escolhida.",
        ],
      },
    ],
    tags: ["parcela reduzida", "veículos"],
    category: "Veículos Leves",
  },
  {
    id: "blog-carro-eletrico",
    type: "blog",
    title: "Carro elétrico: conheça as vantagens de comprar um",
    excerpt:
      "Tendências, economia e como o consórcio pode ajudar na aquisição de um veículo elétrico.",
    url: "artigo.html?id=blog-carro-eletrico",
    image: "https://static.caixaconsorcio.com.br/ConsorcioDigital/assets/consorcio_tem_juros_1700x670_4db853656f.jpg",
    date: "18 ago 2026",
    author: "CAIXA Consórcio",
    categories: ["Veículos Leves"],
    intro: "Tendências, economia e como o consórcio pode ajudar na aquisição de um veículo elétrico.",
    sections: [
      {
        heading: "O que você precisa saber",
        paragraphs: [
          "Tendências, economia e como o consórcio pode ajudar na aquisição de um veículo elétrico.",
          "Neste conteúdo, a CAIXA Consórcio explica os pontos principais para você planejar com mais segurança e escolher a melhor estratégia para o seu momento.",
        ],
      },
      {
        heading: "Como o consórcio pode ajudar",
        paragraphs: [
          "Com parcelas planejadas e sem juros, o consórcio permite organizar o orçamento e conquistar o bem com previsibilidade. A contemplação ocorre por sorteio ou lance nas assembleias mensais.",
          "Antes de contratar, simule valores, compare prazos e confira as regras do grupo e da modalidade escolhida.",
        ],
      },
    ],
    tags: ["elétrico", "sustentabilidade", "veículos"],
    category: "Veículos Leves",
  },
  {
    id: "blog-educacao-financeira",
    type: "blog",
    title: "Educação financeira: planeje sua conquista com o consórcio",
    excerpt:
      "Dicas práticas para encaixar a parcela no orçamento e escolher o prazo certo para o seu objetivo.",
    url: "artigo.html?id=blog-educacao-financeira",
    image: "https://static.caixaconsorcio.com.br/ConsorcioDigital/assets/consorcio_agro_opcao_para_comprar_maquinas_agricolas_cb1557ef64.jpg",
    date: "10 ago 2026",
    author: "CAIXA Consórcio",
    categories: ["Educação financeira"],
    intro: "Dicas práticas para encaixar a parcela no orçamento e escolher o prazo certo para o seu objetivo.",
    sections: [
      {
        heading: "O que você precisa saber",
        paragraphs: [
          "Dicas práticas para encaixar a parcela no orçamento e escolher o prazo certo para o seu objetivo.",
          "Neste conteúdo, a CAIXA Consórcio explica os pontos principais para você planejar com mais segurança e escolher a melhor estratégia para o seu momento.",
        ],
      },
      {
        heading: "Como o consórcio pode ajudar",
        paragraphs: [
          "Com parcelas planejadas e sem juros, o consórcio permite organizar o orçamento e conquistar o bem com previsibilidade. A contemplação ocorre por sorteio ou lance nas assembleias mensais.",
          "Antes de contratar, simule valores, compare prazos e confira as regras do grupo e da modalidade escolhida.",
        ],
      },
    ],
    tags: ["educação financeira", "planejamento", "orçamento"],
    category: "Educação financeira",
  },
  {
    id: "blog-como-funciona",
    type: "blog",
    title: "Como funciona o consórcio: do simular à assembleia",
    excerpt:
      "Passo a passo: simulação, contratação, grupo, assembleia e contemplação por sorteio ou lance.",
    url: "artigo.html?id=blog-como-funciona",
    image: "https://static.caixaconsorcio.com.br/ConsorcioDigital/assets/consorcio_para_pessoa_juridica_como_funciona_sem_comprometer_o_caixa_da_empresa_1700x670_75d9906f56.jpg",
    date: "4 ago 2026",
    author: "CAIXA Consórcio",
    categories: ["Consórcio"],
    intro: "Passo a passo: simulação, contratação, grupo, assembleia e contemplação por sorteio ou lance.",
    sections: [
      {
        heading: "O que você precisa saber",
        paragraphs: [
          "Passo a passo: simulação, contratação, grupo, assembleia e contemplação por sorteio ou lance.",
          "Neste conteúdo, a CAIXA Consórcio explica os pontos principais para você planejar com mais segurança e escolher a melhor estratégia para o seu momento.",
        ],
      },
      {
        heading: "Como o consórcio pode ajudar",
        paragraphs: [
          "Com parcelas planejadas e sem juros, o consórcio permite organizar o orçamento e conquistar o bem com previsibilidade. A contemplação ocorre por sorteio ou lance nas assembleias mensais.",
          "Antes de contratar, simule valores, compare prazos e confira as regras do grupo e da modalidade escolhida.",
        ],
      },
    ],
    tags: ["passo a passo", "simulação", "assembleia"],
    category: "Consórcio",
  },
  {
    id: "blog-consorcio-da-gente",
    type: "blog",
    title: "Consórcio da Gente: condições para renda até R$ 7 mil",
    excerpt:
      "Cartas com condições diferenciadas para pessoa física e pequenos empreendedores.",
    url: "artigo.html?id=blog-consorcio-da-gente",
    image: "https://static.caixaconsorcio.com.br/ConsorcioDigital/assets/consorcio_ou_entrada_em_imovel_qual_estrategia_faz_mais_sentido_1700x670_9fd967a526.jpg",
    date: "28 jul 2026",
    author: "CAIXA Consórcio",
    categories: ["Consórcio"],
    intro: "Cartas com condições diferenciadas para pessoa física e pequenos empreendedores.",
    sections: [
      {
        heading: "O que você precisa saber",
        paragraphs: [
          "Cartas com condições diferenciadas para pessoa física e pequenos empreendedores.",
          "Neste conteúdo, a CAIXA Consórcio explica os pontos principais para você planejar com mais segurança e escolher a melhor estratégia para o seu momento.",
        ],
      },
      {
        heading: "Como o consórcio pode ajudar",
        paragraphs: [
          "Com parcelas planejadas e sem juros, o consórcio permite organizar o orçamento e conquistar o bem com previsibilidade. A contemplação ocorre por sorteio ou lance nas assembleias mensais.",
          "Antes de contratar, simule valores, compare prazos e confira as regras do grupo e da modalidade escolhida.",
        ],
      },
    ],
    tags: ["consórcio da gente", "renda", "inclusão"],
    category: "Consórcio",
  },

  // —— Páginas / produtos (também indexáveis) ——
  {
    id: "pagina-imobiliario",
    type: "produto",
    title: "Consórcio Imobiliário",
    excerpt:
      "Parcelas a partir de R$ 276, em até 200 meses. Imóveis, terrenos, reforma, construção e quitação.",
    url: "index.html#produtos",
    tags: ["imobiliário", "produto", "simular"],
  },
  {
    id: "pagina-veiculos-leves",
    type: "produto",
    title: "Consórcio de Veículos Leves",
    excerpt:
      "Parcelas a partir de R$ 231, em até 80 meses. Carro ou moto, novo ou usado com até 8 anos.",
    url: "index.html#produtos",
    tags: ["veículos", "carro", "moto", "produto"],
  },
  {
    id: "pagina-veiculos-pesados",
    type: "produto",
    title: "Consórcio de Veículos Pesados",
    excerpt:
      "Parcelas a partir de R$ 2.360, em até 100 meses. Caminhão, ônibus, trator e máquinas agrícolas.",
    url: "index.html#produtos",
    tags: ["pesados", "caminhão", "produto"],
  },
];

window.TYPE_LABELS = {
  ajuda: "Central de Ajuda",
  blog: "Blog",
  produto: "Produtos",
};
