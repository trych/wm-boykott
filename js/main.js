const keywords = [
  'WM',
  'WM-Auftakt',
  'WM-Premiere',
  'Weltmeisterschaft',
  'Fußball-WM',
  'Fußball-Weltmeisterschaft',
  'FIFA',
  'Katar',
  'Qatar',
  'Katars',
  'Qatars',
  'Katarer',
  'Qatarer',
  'Infantino',
  'Nationalmannschaft',
  'DFB-Elf'
];

const regexPattern = '(^|\\W)(' + keywords.join('|') + ')($|\\W)';
const regex = new RegExp(regexPattern);

function searchAndHide(selectors, regex) {

  const nodes = document.querySelectorAll(selectors.join(','));
  nodes.forEach(node => {
    const found = node.innerText.match(regex);

    if(found) {
      node.classList.add('wm-boycott');
    }
  });

}
