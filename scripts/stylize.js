document.addEventListener("DOMContentLoaded", () => {
  function applyColors(bg, text, paletteName) {
    // atualizar variáveis e inline (com prioridade)
    document.documentElement.style.setProperty('--site-bg', bg);
    document.documentElement.style.setProperty('--site-text', text);
    document.body.style.setProperty('background-color', bg, 'important');
    document.body.style.setProperty('color', text, 'important');

    // salvar
    localStorage.setItem("site-bg", bg);
    localStorage.setItem("site-text", text);
    if (paletteName) localStorage.setItem("site-palette-name", paletteName);
  }

  function applyFontSize(size) {
    document.documentElement.style.setProperty('font-size', size);
    localStorage.setItem("site-font", size);
  }

  // elementos
  const customBgInput = document.getElementById("custom-bg");
  const customTextInput = document.getElementById("custom-text");
  const savedBg = localStorage.getItem("site-bg");
  const savedText = localStorage.getItem("site-text");
  const savedPalette = localStorage.getItem("site-palette-name");
  const savedFont = localStorage.getItem("site-font");

  if (savedBg && customBgInput) customBgInput.value = savedBg;
  if (savedText && customTextInput) customTextInput.value = savedText;

  // marcar botão da paleta salvo
  if (savedPalette) {
    document.querySelectorAll('#color-palettes .button').forEach(b => {
      b.classList.toggle('is-primary', b.dataset.name === savedPalette);
    });
  }

  // marcar botão do tamanho de fonte salvo
  if (savedFont) {
    document.querySelectorAll('#font-buttons .button, [data-font]').forEach(b => {
      b.classList.toggle('is-primary', b.dataset.font === savedFont);
    });
  }

  // handlers paletas
  document.querySelectorAll("#color-palettes button").forEach(btn => {
    btn.addEventListener("click", () => {
      const [bg, text] = btn.dataset.color.split(",");
      const name = btn.dataset.name || btn.textContent.trim().toLowerCase();
      applyColors(bg.trim(), text.trim(), name);

      // UI visual
      document.querySelectorAll('#color-palettes .button').forEach(b => b.classList.remove('is-primary'));
      btn.classList.add('is-primary');

      if (customBgInput) customBgInput.value = bg.trim();
      if (customTextInput) customTextInput.value = text.trim();
    });
  });

  // custom
  const applyCustomBtn = document.getElementById("apply-custom");
  if (applyCustomBtn) {
    applyCustomBtn.addEventListener("click", () => {
      const bg = (customBgInput && customBgInput.value) || "#ffffff";
      const text = (customTextInput && customTextInput.value) || "#000000";
      applyColors(bg, text, "custom");
      document.querySelectorAll('#color-palettes .button').forEach(b => b.classList.remove('is-primary'));
    });
  }

  // fontes
  document.querySelectorAll("[data-font]").forEach(btn => {
    btn.addEventListener("click", () => {
      applyFontSize(btn.dataset.font);
      document.querySelectorAll('[data-font]').forEach(b => b.classList.remove('is-primary'));
      btn.classList.add('is-primary');
    });
  });
});
