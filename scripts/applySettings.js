document.addEventListener("DOMContentLoaded", () => {
    // Função para aplicar as cores no CSS e no body
    function applyColors(bg, text) {
      document.documentElement.style.setProperty('--bg-color', bg);
      document.documentElement.style.setProperty('--text-color', text);
      document.body.style.backgroundColor = bg;
      document.body.style.color = text;
    }

    // Função para aplicar tamanho da fonte
    function applyFontSize(size) {
      document.body.style.fontSize = size;
    }

    // Pega as configurações salvas no localStorage
    const savedBg = localStorage.getItem("site-bg");
    const savedText = localStorage.getItem("site-text");
    const savedFont = localStorage.getItem("site-font");

    // Aplica as configurações caso existam
    if (savedBg && savedText) {
      applyColors(savedBg, savedText);
    }
    if (savedFont) {
      applyFontSize(savedFont);
    }
});
