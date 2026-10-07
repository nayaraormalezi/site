(function () {
  const SEARCH_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>`;
  const CLOSE_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`;
  const MENU_ICON = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`;

  function headerHTML() {
    return `
      <div class="search-backdrop" data-search-backdrop></div>
      <header class="site-header">
        <div class="container header-inner">
          <div class="header-left">
            <a class="logo" href="index.html" aria-label="CAIXA Consórcio">
              <img src="assets/img/logo.svg" alt="CAIXA Consórcio" width="97" height="45" />
            </a>

            <nav class="nav-main" aria-label="Principal">
              <div class="nav-item" data-nav-dropdown="produtos">
                <button
                  type="button"
                  class="nav-toggle"
                  data-nav-toggle
                  aria-expanded="false"
                  aria-controls="mega-produtos"
                >
                  Produtos <span class="chev" aria-hidden="true">▾</span>
                </button>
              </div>
              <div class="nav-item" data-nav-dropdown="conteudos">
                <button
                  type="button"
                  class="nav-toggle"
                  data-nav-toggle
                  aria-expanded="false"
                  aria-controls="mega-conteudos"
                >
                  Conteúdos <span class="chev" aria-hidden="true">▾</span>
                </button>
              </div>
            </nav>
          </div>

          <div class="header-center">
            <div class="search" data-search>
              <label class="search-field" aria-label="Buscar no site">
                ${SEARCH_ICON}
                <input
                  type="search"
                  data-search-input
                  placeholder="Busque por um assunto sobre consórcio"
                  autocomplete="off"
                  aria-controls="mega-search"
                  aria-expanded="false"
                />
                <button type="button" class="search-clear" data-search-clear aria-label="Limpar busca">
                  ${CLOSE_ICON}
                </button>
              </label>
            </div>
          </div>

          <div class="header-actions">
            <button type="button" class="btn btn-outline btn-fale">Fale Conosco</button>
            <a class="btn btn-outline btn-cliente" href="https://www.caixaconsorcio.com.br/cliente">Já sou cliente</a>
            <a class="btn btn-secondary" href="https://autocompra.caixaconsorcio.com.br/consorcio/produtos" target="_blank" rel="noopener">Simular</a>
            <button type="button" class="btn-ghost-icon btn-menu" aria-label="Abrir menu">${MENU_ICON}</button>
          </div>
        </div>

        <div class="mega-menu" id="mega-produtos" data-mega="produtos" hidden>
          <div class="container">
            <div class="mega-menu__panel animated-gradient">
              <div class="mega-menu__grid">
                <div class="mega-menu__intro">
                  <h2>Produtos</h2>
                  <p>
                    Soluções da CAIXA Consórcio para planejar e conquistar o que é importante para você.
                    Descubra também outras opções da CAIXA Seguridade para diferentes momentos da sua vida.
                  </p>
                  <a
                    class="btn btn-outlined-light"
                    href="https://www.caixaseguridade.com.br/Paginas/default.aspx"
                    target="_blank"
                    rel="noopener"
                    >Conheça a CAIXA Seguridade</a
                  >
                </div>
                <div class="mega-menu__col">
                  <h3>Consórcios</h3>
                  <ul>
                    <li>
                      <a href="https://www.caixaconsorcio.com.br/consorcio-imobiliario">Consórcio Imobiliário</a>
                    </li>
                    <li>
                      <a href="https://www.caixaconsorcio.com.br/consorcio-de-veiculos-leves">Consórcio de Veículos Leves</a>
                    </li>
                    <li>
                      <a href="https://www.caixaconsorcio.com.br/consorcio-de-veiculos-pesados">Consórcio de Veículos Pesados</a>
                    </li>
                  </ul>
                </div>
                <div class="mega-menu__col mega-menu__col--wide">
                  <h3>Condições</h3>
                  <ul>
                    <li>
                      <a href="https://www.caixaconsorcio.com.br/parcela-reduzida">Parcela Reduzida</a>
                    </li>
                    <li>
                      <a href="https://www.caixaconsorcio.com.br/consorcio-da-gente">Consórcio da Gente</a>
                    </li>
                    <li>
                      <a href="https://www.caixaconsorcio.com.br/plano-flex">Plano Flex</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mega-menu mega-menu--conteudos" id="mega-conteudos" data-mega="conteudos" hidden>
          <div class="container">
            <div class="mega-menu__panel animated-gradient">
              <div class="mega-menu__grid mega-menu__grid--conteudos">
                <div class="mega-menu__intro">
                  <h2>Conteúdos</h2>
                  <p>
                    Explore conteúdos da CAIXA Consórcio com informações, dicas e orientações para ajudar você a planejar melhor suas conquistas.
                  </p>
                  <a class="btn btn-outlined-light" href="index.html">Ir para o início</a>
                </div>
                <div class="mega-menu__col">
                  <ul>
                    <li><a href="blog.html">Blog</a></li>
                    <li>
                      <a href="https://www.caixaconsorcio.com.br/educacao-financeira">Educação financeira</a>
                    </li>
                    <li>
                      <a href="https://www.caixaconsorcio.com.br/como-evitar-fraudes-no-consorcio">Como evitar fraudes</a>
                    </li>
                    <li>
                      <a href="https://www.caixaconsorcio.com.br/contemplacao">Como funciona a contemplação</a>
                    </li>
                    <li>
                      <a href="https://www.caixaconsorcio.com.br/sustentabilidade">Sustentabilidade</a>
                    </li>
                    <li>
                      <a
                        href="https://static.caixaconsorcio.com.br/DicionarioDoConsorcio/Dicion%C3%A1rio%20Cons%C3%B3rcio%20-%20CAIXA%20Cons%C3%B3rcio%20-%20Final.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Dicionário do Consórcio (PDF)</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mega-menu mega-menu--search" id="mega-search" data-search-dropdown hidden>
          <div class="container">
            <div class="mega-menu__panel animated-gradient">
              <div class="mega-menu__grid mega-menu__grid--search">
                <div class="mega-menu__intro">
                  <h2>Busca</h2>
                  <p>
                    Encontre conteúdos da Central de Ajuda e do Blog da CAIXA Consórcio para tirar dúvidas e planejar melhor.
                  </p>
                  <div class="search-destinations">
                    <a class="btn btn-outlined-light" href="central-de-ajuda.html">
                      Central de Ajuda
                      <span aria-hidden="true">→</span>
                    </a>
                    <a class="btn btn-outlined-light" href="blog.html">
                      Blog
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
                <div class="mega-menu__col mega-menu__col--wide search-mega-results">
                  <div class="search-panel-head">
                    <p data-search-count></p>
                    <a data-search-see-all class="search-see-all" href="busca.html" hidden>
                      Ver todos
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                  <div
                    class="search-results"
                    data-search-results
                    id="search-panel"
                    role="listbox"
                    aria-label="Sugestões de busca"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  function footerHTML() {
    return `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-top">
            <div class="footer-grid">
              <div class="footer-col">
                <h3>Institucional</h3>
                <ul>
                  <li><a href="https://www.caixaconsorcio.com.br/sobre">CAIXA Consórcio</a></li>
                  <li><a href="https://www.caixaseguridade.com.br/Paginas/QuemSomos.aspx">CAIXA Seguridade</a></li>
                  <li><a href="https://www.caixa.gov.br/sobre-a-caixa/apresentacao/Paginas/default.aspx">Caixa Econômica Federal</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h3>Nossos Produtos</h3>
                <ul>
                  <li><a href="https://www.caixaconsorcio.com.br/consorcio-imobiliario">Consórcio Imobiliário</a></li>
                  <li><a href="https://www.caixaconsorcio.com.br/consorcio-de-veiculos-leves">Consórcio de Veículos Leves</a></li>
                  <li><a href="https://www.caixaconsorcio.com.br/consorcio-de-veiculos-pesados">Consórcio de Veículos Pesados</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h3>Explore</h3>
                <ul>
                  <li><a href="blog.html">Blog CAIXA Consórcio</a></li>
                  <li><a href="https://www.caixaconsorcio.com.br/educacao-financeira">Educação Financeira</a></li>
                  <li><a href="https://www.caixaconsorcio.com.br/como-evitar-fraudes-no-consorcio">Segurança</a></li>
                  <li><a href="https://www.caixaconsorcio.com.br/sustentabilidade">Sustentabilidade</a></li>
                  <li><a href="https://www.caixaconsorcio.com.br/relatorio-de-transparencia-e-igualdade-salarial">Relatório de Transparência e Igualdade Salarial</a></li>
                  <li><a href="#">Trabalhe conosco</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h3>Ajuda</h3>
                <ul>
                  <li><a href="#">Atendimento em Libras</a></li>
                  <li><a href="central-de-ajuda.html">Central de Ajuda</a></li>
                  <li><a href="#">Canais de Atendimento</a></li>
                  <li><a href="#">Canal de Denúncia</a></li>
                  <li><a href="https://www.caixaconsorcio.com.br/portal-de-privacidade">Portal de Privacidade</a></li>
                  <li><a href="#">Código de Conduta e Ética</a></li>
                  <li><a href="#">Relações com Investidores</a></li>
                </ul>
              </div>
            </div>
            <div class="footer-logos">
              <img src="https://static.caixaconsorcio.com.br/ConsorcioDigital/assets/logo_consorcio_300946ff3f_4ae5810a60.svg" alt="CAIXA Consórcio" width="63" height="38" />
              <img src="https://static.caixaconsorcio.com.br/ConsorcioDigital/assets/logo_seguridade_7ee379ed65_23f8fdf97a.svg" alt="CAIXA Seguridade" width="84" height="38" />
            </div>
          </div>
          <div class="footer-bottom">
            <div class="footer-copy">
              <p>
                <strong>CAIXA Consórcio</strong><br /><br />
                CNPJ 40.011.095/0002-44<br />
                Alameda Xingu, 350, 11º Andar.<br />
                Barueri/SP, CEP: 06455-030
              </p>
            </div>
            <div class="footer-social">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/company/caixaconsorcio" target="_blank" rel="noopener" aria-label="LinkedIn">
                    <img src="https://static.caixaconsorcio.com.br/ConsorcioDigital/assets/linkedin_d7720e680f_dee64a83f0.svg" alt="" width="24" height="24" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/caixaconsorcio.com.br/" target="_blank" rel="noopener" aria-label="Instagram">
                    <img src="https://static.caixaconsorcio.com.br/ConsorcioDigital/assets/instagram_f9705ddce3_99ba50c8e7.svg" alt="" width="24" height="24" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCCRR3ZckSjv7GbgooSuGL8w" target="_blank" rel="noopener" aria-label="Youtube">
                    <img src="https://static.caixaconsorcio.com.br/ConsorcioDigital/assets/youtube_495ba660ca_e5d128be7f.svg" alt="" width="24" height="24" />
                  </a>
                </li>
              </ul>
              <p>
                <a class="footer-partner" href="https://orbital.company/?utm_source=reference&amp;utm_medium=footer&amp;utm_campaign=caixa-consorcio" target="_blank" rel="noopener">
                  Em parceria com a <strong>Orbital</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  function initNavDropdowns() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const items = [...header.querySelectorAll("[data-nav-dropdown]")];

    function closeAll() {
      items.forEach((item) => {
        const toggle = item.querySelector("[data-nav-toggle]");
        const mega = header.querySelector(`[data-mega="${item.dataset.navDropdown}"]`);
        item.classList.remove("is-open");
        toggle?.setAttribute("aria-expanded", "false");
        if (mega) {
          mega.hidden = true;
          mega.classList.remove("is-open");
        }
      });
      header.classList.remove("is-mega-open");
    }

    function closeSearch() {
      const searchRoot = document.querySelector("[data-search]");
      const searchDropdown = header.querySelector("[data-search-dropdown]");
      const searchInput = searchRoot?.querySelector("[data-search-input]");
      searchRoot?.classList.remove("is-open");
      header.classList.remove("is-search-open");
      document.querySelector("[data-search-backdrop]")?.classList.remove("is-visible");
      if (searchDropdown) {
        searchDropdown.hidden = true;
        searchDropdown.classList.remove("is-open");
      }
      searchInput?.setAttribute("aria-expanded", "false");
    }

    function openItem(item) {
      const toggle = item.querySelector("[data-nav-toggle]");
      const mega = header.querySelector(`[data-mega="${item.dataset.navDropdown}"]`);
      closeAll();
      closeSearch();
      item.classList.add("is-open");
      toggle?.setAttribute("aria-expanded", "true");
      if (mega) {
        mega.hidden = false;
        // force reflow so CSS transition runs from closed state
        void mega.offsetWidth;
        mega.classList.add("is-open");
      }
      header.classList.add("is-mega-open");
    }

    items.forEach((item) => {
      const toggle = item.querySelector("[data-nav-toggle]");
      if (!toggle) return;
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (item.classList.contains("is-open")) closeAll();
        else openItem(item);
      });
    });

    document.addEventListener("click", (e) => {
      if (header.contains(e.target)) return;
      closeAll();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeAll();
    });
  }

  function mount() {
    const headerMount = document.querySelector("[data-mount-header]");
    const footerMount = document.querySelector("[data-mount-footer]");
    if (headerMount) headerMount.outerHTML = headerHTML();
    if (footerMount) footerMount.outerHTML = footerHTML();
    initNavDropdowns();
  }

  mount();
})();
