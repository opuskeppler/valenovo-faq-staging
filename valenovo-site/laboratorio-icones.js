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
    (n) => `<circle cx="29" cy="29" r="${23 - n % 5}" class="faint"/>`,
    (n) => `<path d="M9 ${44 - n % 5}c12 0 15-25 39-29" class="faint"/><circle cx="10" cy="${44 - n % 5}" r="2" class="gold fill"/>`,
    (n) => `<rect x="${8 + n % 3}" y="${8 + n % 3}" width="${42 - n % 5}" height="${42 - n % 5}" rx="${n % 2 ? 0 : 20}" class="faint"/>`,
    (n) => `<path d="M10 29h8m22 0h8M29 10v8m0 22v8" class="gold"/>`,
    (n) => `<circle cx="${13 + n % 5}" cy="15" r="2" class="gold fill"/><circle cx="${45 - n % 5}" cy="43" r="2" class="gold fill"/><path d="M${13 + n % 5} 15 ${45 - n % 5} 43" class="faint"/>`
  ];
  document.querySelectorAll('.icon-lab article').forEach((row, area) => {
    row.querySelectorAll('.mark').forEach((mark, option) => {
      const n = area * 5 + option;
      mark.innerHTML = `<svg viewBox="0 0 58 58" role="img" aria-label="Opção ${'ABCDE'[option]}"><g fill="none" stroke="${green}" stroke-width="1.35" stroke-linecap="square" stroke-linejoin="miter">${extras[option](n)}<path d="${cores[area]}"/>${option % 2 ? '' : '<circle cx="29" cy="29" r="3" class="gold fill"/>'}</g></svg>`;
    });
  });
})();
