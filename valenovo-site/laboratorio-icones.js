(() => {
  const green = '#2e4033';
  const symbols = [
    ['<circle cx="29" cy="29" r="13"/><path d="m20 38 18-18" class="gold"/>', '<path d="M14 44 44 14"/><circle cx="14" cy="44" r="3" class="gold fill"/>', '<path d="M15 15h28v28H15zM15 29h28M29 15v28"/>'],
    ['<path d="M17 16v26m12-30v34m12-30v26"/><path d="m17 18 12-6 12 6" class="gold"/>', '<path d="M14 15v28M29 12v34M44 15v28"/><circle cx="29" cy="29" r="3" class="gold fill"/>', '<path d="M15 43 29 15l14 28"/><path d="M22 32h14" class="gold"/>'],
    ['<path d="m29 13 16 16-16 16-16-16Z"/><circle cx="29" cy="29" r="3" class="gold fill"/>', '<path d="M15 29h28"/><path d="m34 20 9 9-9 9" class="gold"/>', '<circle cx="29" cy="29" r="15"/><path d="M29 14v30" class="gold"/>'],
    ['<path d="M15 43V16m0 27h29"/><path d="m20 37 10-10 6 4 8-14" class="gold"/>', '<path d="M14 40h30"/><circle cx="20" cy="31" r="3"/><circle cx="29" cy="23" r="3" class="gold fill"/><circle cx="39" cy="16" r="3"/>', '<path d="M16 42 42 16"/><path d="M16 16v26h26" class="gold"/>'],
    ['<path d="M16 15h26M16 43h26"/><path d="M21 15v28m8-28v28m8-28v28" class="gold"/>', '<path d="M15 42V16h28v26Z"/><path d="M15 29h28" class="gold"/>', '<path d="M18 42V16m11 26V16m11 26V16"/><path d="M14 16h30" class="gold"/>'],
    ['<path d="M15 40c4-19 17-24 28-23"/><path d="m36 11 8 6-8 7" class="gold"/>', '<path d="M14 15c20 0 13 28 30 28"/><circle cx="14" cy="15" r="3" class="gold fill"/><circle cx="44" cy="43" r="3"/>', '<path d="M15 42 42 15"/><path d="M15 15h27v27" class="gold"/>'],
    ['<circle cx="17" cy="29" r="3"/><circle cx="41" cy="18" r="3" class="gold fill"/><circle cx="41" cy="40" r="3"/><path d="m20 28 18-9m-18 12 18 8"/>', '<circle cx="17" cy="29" r="3" class="gold fill"/><circle cx="41" cy="29" r="3"/><path d="M20 29h18"/>', '<path d="M16 16 42 42M42 16 16 42"/><circle cx="29" cy="29" r="3" class="gold fill"/>'],
    ['<path d="M16 16h26v26H16zM29 16v26M16 29h26"/><circle cx="29" cy="29" r="3" class="gold fill"/>', '<rect x="15" y="15" width="12" height="12"/><rect x="31" y="31" width="12" height="12" class="gold"/>', '<path d="M15 29h28M29 15v28"/><circle cx="29" cy="29" r="8"/>'],
    ['<circle cx="16" cy="29" r="3" class="gold fill"/><circle cx="42" cy="16" r="3"/><circle cx="42" cy="42" r="3"/><path d="m19 28 20-11m-20 13 20 11"/>', '<path d="M15 15v28m0-14h28"/><path d="m35 20 8 9-8 9" class="gold"/>', '<path d="M15 43 29 29 43 15"/><circle cx="15" cy="43" r="3"/><circle cx="29" cy="29" r="3" class="gold fill"/><circle cx="43" cy="15" r="3"/>'],
    ['<path d="M16 17h26v18H29l-9 8v-8h-4Z"/><path d="M22 26h14" class="gold"/>', '<path d="M15 29h28"/><circle cx="15" cy="29" r="3"/><circle cx="43" cy="29" r="3" class="gold fill"/>', '<path d="M16 16h26v26H16z"/><path d="M22 29h14" class="gold"/>'],
    ['<circle cx="29" cy="29" r="4" class="gold fill"/><path d="M17 37a15 15 0 0 1 18-20M13 43a23 23 0 0 0 32-28"/>', '<path d="M15 39c4-16 16-22 28-20"/><circle cx="15" cy="39" r="3" class="gold fill"/>', '<circle cx="29" cy="29" r="16"/><path d="M29 13v32M13 29h32" class="gold"/>'],
    ['<ellipse cx="29" cy="29" rx="18" ry="9"/><circle cx="29" cy="29" r="3" class="gold fill"/>', '<circle cx="29" cy="29" r="16"/><circle cx="29" cy="29" r="3" class="gold fill"/>', '<path d="M15 29h28M29 15v28"/><circle cx="29" cy="29" r="8" class="gold"/>']
  ];
  document.querySelectorAll('.icon-lab article').forEach((row, area) => row.querySelectorAll('.mark').forEach((mark, option) => {
    if (option > 2) { mark.remove(); return; }
    mark.innerHTML = `<svg viewBox="0 0 58 58" role="img" aria-label="Opção ${'ABC'[option]}"><g fill="none" stroke="${green}" stroke-width="1.4" stroke-linecap="square" stroke-linejoin="miter">${symbols[area][option]}</g></svg>`;
  }));
})();
