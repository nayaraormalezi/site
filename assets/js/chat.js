(function () {
  const CLOSE_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`;
  const MIN_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 12h12"/></svg>`;
  const SEND_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>`;
  const BACK_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>`;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function widgetHTML() {
    return `
      <div class="chat-widget" data-chat-widget hidden>
        <div class="chat-panel" role="dialog" aria-label="Fale Conosco" aria-modal="false">
          <header class="chat-header">
            <div class="chat-header__brand">
              <img src="assets/img/logo-on-dark.svg" alt="CAIXA Consórcio" width="97" height="45" />
            </div>
            <div class="chat-header__actions">
              <button type="button" class="chat-icon-btn" data-chat-minimize aria-label="Minimizar">
                ${MIN_ICON}
              </button>
              <button type="button" class="chat-icon-btn" data-chat-close aria-label="Fechar">
                ${CLOSE_ICON}
              </button>
            </div>
          </header>

          <div class="chat-view is-active" data-chat-view="conversation">
            <div class="chat-messages" data-chat-messages></div>
            <form class="chat-composer" data-chat-form>
              <label class="visually-hidden" for="chat-input">Digite sua dúvida</label>
              <input
                id="chat-input"
                type="text"
                data-chat-input
                placeholder="Digite sua dúvida sobre consórcio…"
                autocomplete="off"
              />
              <button type="submit" class="chat-send" aria-label="Enviar">
                ${SEND_ICON}
              </button>
            </form>
          </div>

          <div class="chat-view" data-chat-view="specialist" hidden>
            <div class="chat-specialist">
              <button type="button" class="chat-back" data-chat-back>
                ${BACK_ICON}
                Voltar ao chat
              </button>
              <h2>Fale com a gente</h2>
              <p class="chat-specialist__hours">
                Nosso horário de atendimento é de segunda a sexta-feira, das 8h às 21h,
                e aos sábados das 9h às 16h (horário de Brasília), exceto feriados nacionais.
              </p>
              <p class="chat-specialist__privacy">
                Precisamos de alguns dados pessoais para identificar ou entrar em contato com você.
                Consulte nossa
                <a href="https://www.caixaconsorcio.com.br/politica-de-privacidade" target="_blank" rel="noopener"
                  >Política de Privacidade</a
                >.
              </p>
              <form class="chat-lead-form" data-chat-lead-form>
                <label>
                  <span>* Nome</span>
                  <input name="nome" type="text" required autocomplete="name" />
                </label>
                <label>
                  <span>* Email</span>
                  <input name="email" type="email" required autocomplete="email" />
                </label>
                <label>
                  <span>Documento</span>
                  <input name="documento" type="text" autocomplete="off" />
                </label>
                <label>
                  <span>* Telefone</span>
                  <input name="telefone" type="tel" required autocomplete="tel" />
                </label>
                <button type="submit" class="btn btn-primary chat-lead-submit">
                  Iniciar Atendimento
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function initChat() {
    if (document.querySelector("[data-chat-widget]")) return;

    const CHAT_ICON = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;

    document.body.insertAdjacentHTML("beforeend", widgetHTML());
    document.body.insertAdjacentHTML(
      "beforeend",
      `<button type="button" class="chat-launcher" data-chat-launcher aria-label="Fale Conosco">
        ${CHAT_ICON}
        <span>Fale Conosco</span>
      </button>`
    );

    const widget = document.querySelector("[data-chat-widget]");
    const launcher = document.querySelector("[data-chat-launcher]");
    const messagesEl = widget.querySelector("[data-chat-messages]");
    const form = widget.querySelector("[data-chat-form]");
    const input = widget.querySelector("[data-chat-input]");
    const convView = widget.querySelector('[data-chat-view="conversation"]');
    const specialistView = widget.querySelector('[data-chat-view="specialist"]');
    const leadForm = widget.querySelector("[data-chat-lead-form]");
    const openBtns = [
      ...document.querySelectorAll(".btn-fale"),
      launcher,
    ].filter(Boolean);

    let started = false;

    function showView(name) {
      convView.hidden = name !== "conversation";
      specialistView.hidden = name !== "specialist";
      convView.classList.toggle("is-active", name === "conversation");
      specialistView.classList.toggle("is-active", name === "specialist");
    }

    function scrollToBottom() {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function appendMessage(role, html) {
      const el = document.createElement("div");
      el.className = `chat-msg chat-msg--${role}`;
      el.innerHTML = html;
      messagesEl.appendChild(el);
      scrollToBottom();
      return el;
    }

    function specialistButton() {
      return `
        <div class="chat-handoff">
          <p>Não encontrou o que precisava?</p>
          <button type="button" class="btn btn-secondary chat-handoff-btn" data-chat-specialist>
            Fale com um especialista
          </button>
        </div>`;
    }

    function renderResults(items, query) {
      if (!items.length) {
        return `
          <p>Não encontrei conteúdos sobre “${escapeHtml(query)}” na Central de Ajuda e no Blog.</p>
          <p>Tente outras palavras, como FGTS, contemplação, parcela ou fraude — ou fale com um especialista.</p>
          ${specialistButton()}`;
      }

      const cards = items
        .slice(0, 4)
        .map(
          (item) => `
          <a class="chat-result" href="${item.url}">
            <span class="chat-result__type">${escapeHtml(
              (window.TYPE_LABELS && window.TYPE_LABELS[item.type]) || item.type
            )}</span>
            <strong>${escapeHtml(item.title)}</strong>
            <span>${escapeHtml(item.excerpt)}</span>
          </a>`
        )
        .join("");

      return `
        <p>Encontrei estes conteúdos que podem ajudar com “${escapeHtml(query)}”:</p>
        <div class="chat-results">${cards}</div>
        ${specialistButton()}`;
    }

    function welcome() {
      messagesEl.innerHTML = "";
      appendMessage(
        "bot",
        `<p>Olá! Sou o assistente da <strong>CAIXA Consórcio</strong>.</p>
         <p>Digite sua dúvida e eu busco respostas na Central de Ajuda e no Blog.</p>
         <p>Se preferir atendimento humano, use o botão abaixo.</p>
         ${specialistButton()}`
      );
      started = true;
    }

    function open() {
      widget.hidden = false;
      widget.classList.add("is-open");
      widget.classList.remove("is-minimized");
      document.body.classList.add("chat-open");
      showView("conversation");
      if (!started) welcome();
      setTimeout(() => input.focus(), 80);
    }

    function close() {
      widget.classList.remove("is-open");
      widget.hidden = true;
      document.body.classList.remove("chat-open");
    }

    function minimize() {
      widget.classList.toggle("is-minimized");
    }

    openBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        open();
      });
    });

    widget.querySelector("[data-chat-close]")?.addEventListener("click", close);
    widget.querySelector("[data-chat-minimize]")?.addEventListener("click", minimize);
    widget.querySelector("[data-chat-back]")?.addEventListener("click", () => {
      showView("conversation");
      scrollToBottom();
    });

    messagesEl.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-chat-specialist]");
      if (!btn) return;
      showView("specialist");
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = input.value.trim();
      if (!q) return;

      appendMessage("user", `<p>${escapeHtml(q)}</p>`);
      input.value = "";

      const typing = appendMessage(
        "bot",
        `<p class="chat-typing">Buscando nos conteúdos do site…</p>`
      );

      setTimeout(() => {
        const results =
          window.CaixaSearch && typeof window.CaixaSearch.search === "function"
            ? window.CaixaSearch.search(q, "all")
            : [];
        typing.innerHTML = renderResults(results, q);
        scrollToBottom();
      }, 350);
    });

    leadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(leadForm);
      const nome = String(data.get("nome") || "").trim();

      showView("conversation");
      appendMessage(
        "bot",
        `<p>Obrigado${nome ? `, <strong>${escapeHtml(nome)}</strong>` : ""}!</p>
         <p>Recebemos seus dados. Em horário de atendimento, um especialista entrará em contato.</p>
         <p>Enquanto isso, você também pode continuar buscando conteúdos aqui no chat.</p>`
      );
      leadForm.reset();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && widget.classList.contains("is-open")) close();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initChat);
  } else {
    initChat();
  }
})();
