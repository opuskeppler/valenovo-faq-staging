(() => {
  const green = '#2e4033';
  const gold = '#b78a58';
  const cores = [
    'M29 11 42 29 29 47 16 29Z M21 37l16-16',
    'M14 18l12-6 9 6 10-6v28l-10 6-9-6-12 6z M26 12v28m9-28v28',
    'M29 11l13 18-13 18-13-18z M22 36l14-14',
    'M14 44V15m0 29h31 M18 37l9-8 7 3 11-16',
    'M15 15h28M15 43h28M21 15v28m8-28v28m8-28v28',
    'M14 40c3-20 19-23 30-22 M37 12l8 6-8 6',
    'M16 29l25-12M16 29l25 12',
    'M16 16h26v26H16zM29 16v26M16 29h26',
    'M15 29l27-14M15 29l27 14',
    'M17 17h24v17H28l-8 8v-8h-3zM23 25h12',
    'M15 35a15 15 0 0 1 18-20M13 41a23 23 0 0 0 32-27',
    'M10 29a19 10 0 1 0 38 0 19 10 0 1 0-38 0'
  ];
  const extras = [
    (n) => `<circle cx="29" cy="29" r="23" class="faint"/><circle cx="29" cy="29" r="3" class="gold fill"/>`,
    (n) => `<path d="M7 ${45 - n % 6}c14 1 16-27 42-31" class="gold"/><path d="m42 9 7 5-7 7"/><circle cx="8" cy="${45 - n % 6}" r="3" class="gold fill"/>`,
    (n) => `<rect x="8" y="8" width="42" height="42" class="faint"/><path d="M9 29h10m20 0h10M29 9v10m0 20v10" class="gold"/>`
  ];
  document.querySelectorAll('.icon-lab article').forEach((row, area) => {
    row.querySelectorAll('.mark').forEach((mark, option) => {
      if (option > 2) { mark.remove(); return; }
      const n = area * 5 + option;
      mark.innerHTML = `<svg viewBox="0 0 58 58" role="img" aria-label="Opção ${'ABC'[option]}"><g fill="none" stroke="${green}" stroke-width="1.55" stroke-linecap="square" stroke-linejoin="miter">${extras[option](n)}<path d="${cores[area]}"/></g></svg>`;
    });
  });
})();
