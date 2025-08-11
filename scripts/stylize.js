document.addEventListener("DOMContentLoaded", () => {
    function applyColors(bg, text) {
          // Atualiza as variáveis CSS no :root
          document.documentElement.style.setProperty('--bg-color', bg);
          document.documentElement.style.setProperty('--text-color', text);

          // Também aplica direto no body para garantir a mudança imediata
          document.body.style.backgroundColor = bg;
          document.body.style.color = text;

          // Salva no localStorage
          localStorage.setItem("site-bg", bg);
          localStorage.setItem("site-text", text);
    }

    function applyFontSize(size) {
          document.body.style.fontSize = size;
          localStorage.setItem("site-font", size);
    }

    // Carrega valores salvos ao entrar na página
    const savedBg = localStorage.getItem("site-bg");
    const savedText = localStorage.getItem("site-text");
    const savedFont = localStorage.getItem("site-font");

    if (savedBg && savedText) applyColors(savedBg, savedText);
    if (savedFont) applyFontSize(savedFont);

    // Eventos para paletas pré-definidas
    document.querySelectorAll("#color-palettes button").forEach(btn => {
          btn.addEventListener("click", () => {
                const [bg, text] = btn.dataset.color.split(",");
                applyColors(bg, text);
          });
    });

    // Evento paleta customizada
    document.getElementById("apply-custom").addEventListener("click", () => {
          const bg = document.getElementById("custom-bg").value;
          const text = document.getElementById("custom-text").value;
          applyColors(bg, text);
    });

    // Evento para tamanho da fonte
    document.querySelectorAll("[data-font]").forEach(btn => {
          btn.addEventListener("click", () => {
                applyFontSize(btn.dataset.font);
          });
    });

    // Exibir aviso Cookies
    const banner = document.getElementById("cookie-banner");
    if (banner && !localStorage.getItem("cookiesAccepted")) {
          banner.style.display = "block";
          document.getElementById("accept-cookies").addEventListener("click", () => {
                localStorage.setItem("cookiesAccepted", "true");
                banner.style.display = "none";
          });
    }
});
