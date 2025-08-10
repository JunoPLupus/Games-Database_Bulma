// scripts/stylize.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("[stylize] inicializando...");

  function applyColors(bg, text, paletteName) {
    try {
      document.documentElement.style.setProperty('--site-bg', bg);
      document.documentElement.style.setProperty('--site-text', text);
      document.body.style.setProperty('background-color', bg, 'important');
      document.body.style.setProperty('color', text, 'important');
      localStorage.setItem("site-bg", bg);
      localStorage.setItem("site-text", text);
      if (paletteName) localStorage.setItem("site-palette-name", paletteName);

      const cs = getComputedStyle(document.body);
      console.log("[stylize] aplicação de cores:", { bg, text, computedBackground: cs.backgroundColor, computedColor: cs.color });
    } catch (err) {
      console.error("[stylize] erro applyColors:", err);
    }
  }

  function applyFontSize(size) {
    try {
      document.documentElement.style.setProperty('--site-font-size', size);
      document.documentElement.style.setProperty('font-size', size, 'important');
      localStorage.setItem("site-font", size);
      console.log("[stylize] font setado:", size);
    } catch (err) {
      console.error("[stylize] erro applyFontSize:", err);
    }
  }

  const customBgInput = document.getElementById("custom-bg");
  const customTextInput = document.getElementById("custom-text");

  const savedBg = localStorage.getItem("site-bg");
  const savedText = localStorage.getItem("site-text");
  const savedPalette = localStorage.getItem("site-palette-name");
  const savedFont = localStorage.getItem("site-font");

  if (savedBg && customBgInput) customBgInput.value = savedBg;
  if (savedText && customTextInput) customTextInput.value = savedText;

  // marcar botão salvo
  if (savedPalette) {
    document.querySelectorAll('#color-palettes .button').forEach(b => {
      b.classList.toggle('is-primary', b.dataset.name === savedPalette);
    });
  }
  if (savedFont) {
    document.querySelectorAll('[data-font]').forEach(b => {
      b.classList.toggle('is-primary', b.dataset.font === savedFont);
    });
  }

  // paletas
  document.querySelectorAll("#color-palettes button").forEach(btn => {
    btn.addEventListener("click", () => {
      const data = btn.dataset.color;
      if (!data) return console.warn("[stylize] botão sem data-color");
      const parts = data.split(",");
      const bg = parts[0].trim();
      const text = (parts[1] || "#000000").trim();
      const name = btn.dataset.name || btn.textContent.trim().toLowerCase();
      applyColors(bg, text, name);
      document.querySelectorAll('#color-palettes .button').forEach(b => b.classList.remove('is-primary'));
      btn.classList.add('is-primary');
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
      const size = btn.dataset.font;
      applyFontSize(size);
      document.querySelectorAll('[data-font]').forEach(b => b.classList.remove('is-primary'));
      btn.classList.add('is-primary');
    });
  });
});
