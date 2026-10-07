(function () {
  const content = window.SITE_CONTENT || [];
  const labels = window.TYPE_LABELS || {};

  const ICONS = {
    ajuda: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.5-3 4"/><path d="M12 17h.01"/></svg>`,
    blog: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    produto: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
  };

  function normalize(str) {
    return (str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function highlight(text, query) {
    if (!query) return text;
    const nText = text;
    const nQuery = normalize(query);
    const nFull = normalize(text);
    const idx = nFull.indexOf(nQuery);
    if (idx === -1) return text;
    return (
      nText.slice(0, idx) +
      "<mark>" +
      nText.slice(idx, idx + query.length) +
      "</mark>" +
      nText.slice(idx + query.length)
    );
  }

  function scoreItem(item, q) {
    if (!q) return 0;
    const nq = normalize(q);
    const title = normalize(item.title);
    const excerpt = normalize(item.excerpt);
    const tags = normalize((item.tags || []).join(" "));
    let score = 0;
    if (title === nq) score += 100;
    if (title.startsWith(nq)) score += 60;
    if (title.includes(nq)) score += 40;
    if (tags.includes(nq)) score += 25;
    if (excerpt.includes(nq)) score += 15;
    nq.split(/\s+/).forEach((word) => {
      if (word.length < 2) return;
      if (title.includes(word)) score += 8;
      if (excerpt.includes(word)) score += 3;
    });
    return score;
  }

  function search(query, typeFilter) {
    const q = (query || "").trim();
    if (!q) return [];
    return content
      .map((item) => ({ item, score: scoreItem(item, q) }))
      .filter(({ item, score }) => score > 0 && (!typeFilter || typeFilter === "all" || item.type === typeFilter))
      .sort((a, b) => b.score - a.score)
      .map(({ item }) => item);
  }

  function groupByType(items) {
    const order = ["ajuda", "blog", "produto"];
    const groups = {};
    items.forEach((item) => {
      groups[item.type] = groups[item.type] || [];
      groups[item.type].push(item);
    });
    return order
      .filter((t) => groups[t]?.length)
      .map((t) => ({ type: t, label: labels[t] || t, items: groups[t] }));
  }

  function renderDropdownResults(container, items, query) {
    if (!items.length) {
      container.innerHTML = `
        <div class="search-empty">
          <strong>Nenhum resultado para “${escapeHtml(query)}”</strong>
          Tente termos como FGTS, parcela, fraude ou contemplação.
        </div>`;
      return;
    }

    const GROUP_URLS = {
      ajuda: "central-de-ajuda.html",
      blog: "blog.html",
      produto: "index.html",
    };

    const groups = groupByType(items.slice(0, 8));
    container.innerHTML = groups
      .map(
        (group) => `
        <div class="search-group">
          <a class="search-group-label" href="${GROUP_URLS[group.type] || "#"}">${group.label}</a>
          ${group.items
            .map(
              (item, i) => `
            <a class="search-item" href="${item.url}" data-index="${i}" data-id="${item.id}">
              <span class="search-item-icon">${ICONS[item.type] || ICONS.ajuda}</span>
              <span>
                <p class="search-item-title">${highlight(escapeHtml(item.title), query)}</p>
                <p class="search-item-excerpt">${escapeHtml(item.excerpt)}</p>
              </span>
            </a>`
            )
            .join("")}
        </div>`
      )
      .join("");
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function initHeaderSearch() {
    const root = document.querySelector("[data-search]");
    const header = document.querySelector(".site-header");
    const dropdown = document.querySelector("[data-search-dropdown]");
    if (!root || !dropdown) return;

    const input = root.querySelector("[data-search-input]");
    const panel = dropdown.querySelector("[data-search-results]");
    const clearBtn = root.querySelector("[data-search-clear]");
    const countEl = dropdown.querySelector("[data-search-count]");
    const seeAll = dropdown.querySelector("[data-search-see-all]");
    const backdrop = document.querySelector("[data-search-backdrop]");

    let activeIndex = -1;

    function closeMegas() {
      if (!header) return;
      header.querySelectorAll("[data-nav-dropdown]").forEach((item) => {
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

    function open() {
      closeMegas();
      root.classList.add("is-open");
      header?.classList.add("is-search-open");
      input?.setAttribute("aria-expanded", "true");
      dropdown.hidden = false;
      void dropdown.offsetWidth;
      dropdown.classList.add("is-open");
      backdrop?.classList.add("is-visible");
    }

    function close() {
      root.classList.remove("is-open");
      header?.classList.remove("is-search-open");
      input?.setAttribute("aria-expanded", "false");
      dropdown.classList.remove("is-open");
      dropdown.hidden = true;
      backdrop?.classList.remove("is-visible");
      activeIndex = -1;
    }

    function showIdleState() {
      panel.innerHTML = `
        <div class="search-empty">
          <strong>Busque no site</strong>
          Digite para encontrar conteúdos da Central de Ajuda e do Blog.
        </div>`;
      if (countEl) countEl.textContent = "Sugestões";
      if (seeAll) seeAll.hidden = true;
    }

    function update() {
      const q = input.value.trim();
      root.classList.toggle("has-query", q.length > 0);
      if (!q) {
        showIdleState();
        open();
        return;
      }

      const results = search(q, "all");
      if (countEl) {
        countEl.textContent =
          results.length === 1
            ? "1 resultado"
            : `${results.length} resultados`;
      }
      renderDropdownResults(panel, results, q);
      if (seeAll) {
        seeAll.hidden = results.length === 0;
        seeAll.href = `busca.html?q=${encodeURIComponent(q)}`;
      }
      open();
      activeIndex = -1;
    }

    function openFromField() {
      if (input.value.trim()) update();
      else {
        showIdleState();
        open();
      }
    }

    input.addEventListener("input", update);
    input.addEventListener("focus", openFromField);
    input.addEventListener("click", openFromField);

    clearBtn?.addEventListener("click", () => {
      input.value = "";
      input.focus();
      update();
    });

    backdrop?.addEventListener("click", close);

    root.addEventListener("mousedown", (e) => e.stopPropagation());
    dropdown.addEventListener("mousedown", (e) => e.stopPropagation());

    document.addEventListener("mousedown", (e) => {
      if (
        !root.contains(e.target) &&
        !dropdown.contains(e.target) &&
        !backdrop?.contains(e.target)
      ) {
        close();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        close();
        input.blur();
      }
      if (!root.classList.contains("is-open")) return;

      const items = [...panel.querySelectorAll(".search-item")];
      if (e.key === "ArrowDown") {
        e.preventDefault();
        activeIndex = Math.min(activeIndex + 1, items.length - 1);
        items.forEach((el, i) => el.classList.toggle("is-active", i === activeIndex));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        activeIndex = Math.max(activeIndex - 1, 0);
        items.forEach((el, i) => el.classList.toggle("is-active", i === activeIndex));
      }
      if (e.key === "Enter") {
        if (activeIndex >= 0 && items[activeIndex]) {
          e.preventDefault();
          window.location.href = items[activeIndex].href;
        } else if (input.value.trim()) {
          e.preventDefault();
          window.location.href = `busca.html?q=${encodeURIComponent(
            input.value.trim()
          )}`;
        }
      }
    });

    // Atalho "/" para focar a busca
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        input.focus();
      }
    });
  }

  function initResultsPage() {
    const page = document.querySelector("[data-results-page]");
    if (!page) return;

    const params = new URLSearchParams(window.location.search);
    const q = params.get("q") || "";
    let tipo = params.get("tipo") || "all";

    const input = document.querySelector("[data-search-input]");
    if (input) input.value = q;

    const titleEl = page.querySelector("[data-results-title]");
    const metaEl = page.querySelector("[data-results-meta]");
    const listEl = page.querySelector("[data-results-list]");
    const sideFilters = page.querySelectorAll("[data-side-filter]");

    function render() {
      const results = search(q, tipo);
      if (titleEl) {
        titleEl.innerHTML = q
          ? `Resultados para “${escapeHtml(q)}”`
          : "Buscar no site";
      }
      if (metaEl) {
        metaEl.textContent = q
          ? `${results.length} conteúdo${results.length === 1 ? "" : "s"} encontrado${
              results.length === 1 ? "" : "s"
            } na Central de Ajuda, Blog e Produtos`
          : "Digite um termo na busca do header para começar.";
      }

      sideFilters.forEach((btn) => {
        const t = btn.dataset.sideFilter;
        const count =
          t === "all"
            ? search(q, "all").length
            : search(q, t).length;
        btn.classList.toggle("is-active", t === tipo);
        const countSpan = btn.querySelector("span");
        if (countSpan) countSpan.textContent = String(count);
      });

      if (!listEl) return;
      if (!q) {
        listEl.innerHTML = `
          <div class="search-empty">
            <strong>Faça uma busca</strong>
            Experimente: FGTS, contemplação, fraude, parcela reduzida.
          </div>`;
        return;
      }
      if (!results.length) {
        listEl.innerHTML = `
          <div class="search-empty">
            <strong>Nenhum resultado</strong>
            Tente outras palavras ou remova o filtro de categoria.
          </div>`;
        return;
      }

      listEl.innerHTML = results
        .map(
          (item) => `
        <a class="result-card" href="${item.url}">
          <span class="result-type">${labels[item.type] || item.type}</span>
          <h2>${highlight(escapeHtml(item.title), q)}</h2>
          <p>${escapeHtml(item.excerpt)}</p>
        </a>`
        )
        .join("");
    }

    sideFilters.forEach((btn) => {
      btn.addEventListener("click", () => {
        tipo = btn.dataset.sideFilter;
        const url = new URL(window.location.href);
        if (tipo === "all") url.searchParams.delete("tipo");
        else url.searchParams.set("tipo", tipo);
        history.replaceState({}, "", url);
        render();
      });
    });

    render();
  }

  function initHeaderChrome() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initContentLists() {
    document.querySelectorAll("[data-content-list]").forEach((el) => {
      const type = el.dataset.contentList;
      const items = content.filter((c) => c.type === type);
      el.innerHTML = items
        .map(
          (item) => `
        <a class="content-card" href="${item.url}">
          <span class="badge">${item.category || labels[item.type]}</span>
          <span>
            <h2>${escapeHtml(item.title)}</h2>
            <p>${escapeHtml(item.excerpt)}</p>
          </span>
          <span class="chev" aria-hidden="true">→</span>
        </a>`
        )
        .join("");
    });
  }

  function initHelpArticle() {
    const root = document.querySelector("[data-help-article]");
    if (!root) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const item =
      content.find((c) => c.type === "ajuda" && c.id === id) ||
      content.find((c) => c.type === "ajuda");

    if (!item) {
      window.location.replace("central-de-ajuda.html");
      return;
    }

    const title = item.title;
    const category = item.category || "Todas as dúvidas";
    const body = item.body || item.excerpt || "";

    document.title = `${title} · CAIXA Consórcio`;

    const titleEl = root.querySelector("[data-help-title]");
    const bodyEl = root.querySelector("[data-help-body]");
    const crumbTitle = root.querySelector("[data-help-crumb-title]");
    const categoryEl = root.querySelector("[data-help-category]");

    if (titleEl) titleEl.textContent = title;
    if (crumbTitle) crumbTitle.textContent = title;
    if (categoryEl) categoryEl.textContent = category;
    if (bodyEl) {
      bodyEl.innerHTML = body
        .split(/\n+/)
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p) => `<p>${escapeHtml(p)}</p>`)
        .join("");
    }

    const back = root.querySelector(".help-article__back");
    if (back) {
      back.addEventListener("click", (e) => {
        if (window.history.length > 1) {
          e.preventDefault();
          window.history.back();
        }
      });
    }
  }

  function initBlogArticle() {
    const root = document.querySelector("[data-blog-article]");
    if (!root) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const posts = content.filter((c) => c.type === "blog");
    const item = posts.find((c) => c.id === id) || posts[0];

    if (!item) {
      window.location.replace("blog.html");
      return;
    }

    document.title = `${item.title} · CAIXA Consórcio`;

    const setText = (sel, value) => {
      const el = root.querySelector(sel);
      if (el) el.textContent = value || "";
    };

    setText("[data-blog-title]", item.title);
    setText("[data-blog-intro]", item.intro || item.excerpt || "");
    setText("[data-blog-crumb]", item.title);
    setText("[data-blog-date]", item.date || "");
    setText("[data-blog-author]", item.author || "CAIXA Consórcio");

    const tagsEl = root.querySelector("[data-blog-tags]");
    if (tagsEl) {
      const cats = item.categories || (item.category ? [item.category] : []);
      tagsEl.innerHTML = cats
        .map((c) => `<li>${escapeHtml(c)}</li>`)
        .join("");
    }

    const img = root.querySelector("[data-blog-image]");
    if (img) {
      if (item.image) {
        img.src = item.image;
        img.alt = item.title;
        img.hidden = false;
      } else {
        img.hidden = true;
      }
    }

    const bodyEl = root.querySelector("[data-blog-body]");
    if (bodyEl) {
      const sections = item.sections || [];
      if (sections.length) {
        bodyEl.innerHTML = sections
          .map(
            (section) => `
            <section class="blog-article__section">
              <h2>${escapeHtml(section.heading || "")}</h2>
              ${(section.paragraphs || [])
                .map((p) => `<p>${escapeHtml(p)}</p>`)
                .join("")}
            </section>`
          )
          .join("");
      } else {
        bodyEl.innerHTML = `<p>${escapeHtml(item.excerpt || "")}</p>`;
      }
    }

    const others = posts.filter((p) => p.id !== item.id);

    const sidebar = root.querySelector("[data-blog-sidebar]");
    if (sidebar) {
      sidebar.innerHTML = others
        .slice(0, 3)
        .map(
          (p) => `
          <a class="blog-side-card" href="${p.url}">
            <img src="${p.image || ""}" alt="" loading="lazy" />
            <div>
              <span class="blog-side-card__cat">${escapeHtml(
                (p.categories && p.categories[0]) || p.category || "Blog"
              )}</span>
              <strong>${escapeHtml(p.title)}</strong>
            </div>
          </a>`
        )
        .join("");
    }

    const recent = root.querySelector("[data-blog-recent]");
    if (recent) {
      recent.innerHTML = others
        .slice(0, 4)
        .map(
          (p) => `
          <a class="blog-recent-card" href="${p.url}">
            <div class="blog-recent-card__media">
              <span class="blog-recent-card__badge">${escapeHtml(
                (p.categories && p.categories[0]) || p.category || "Blog"
              )}</span>
              <img src="${p.image || ""}" alt="" loading="lazy" />
            </div>
            <h3>${escapeHtml(p.title)}</h3>
            <p>${escapeHtml(p.excerpt || "")}</p>
            <span class="blog-recent-card__link">Ler artigo completo →</span>
          </a>`
        )
        .join("");
    }

    const back = root.querySelector(".help-article__back");
    if (back) {
      back.addEventListener("click", (e) => {
        if (window.history.length > 1) {
          e.preventDefault();
          window.history.back();
        }
      });
    }
  }

  function boot() {
    initHeaderChrome();
    initHeaderSearch();
    initResultsPage();
    initContentLists();
    initHelpArticle();
    initBlogArticle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.CaixaSearch = { search, highlight };
})();
