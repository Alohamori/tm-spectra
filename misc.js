const $E = (tag, props={}, ch=[]) => ch.reduce((e,c) => (e.appendChild(c),e),Object.assign(document.createElement(tag),props));
let sbox, spectra;

const update = si => {
  const eps = si > 4 ? 10 : [6,5,5,8,8][si];
  spectra.replaceChildren();
  for (let e = 1; e <= eps; ++e)
    spectra.appendChild($E('img', {src: `spectra/${String(si + 1).padStart(2, '0')}${String(e).padStart(2, '0')}.png`}));
};

window.addEventListener('DOMContentLoaded', () => {
  spectra = document.getElementById('spectra');
  sbox = document.getElementById('series');
  sbox.onchange = e => update(e.target.selectedIndex);
  update(0);

  for (let i = 1; i <= 15; ++i)
    sbox.appendChild($E('option', {innerText: `Series ${i}`}));
});
