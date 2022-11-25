const selectors = [
  '.teaser',
  '.teaser--small',
  '.teaser-xs',
  '.eilmeldung'
]

searchAndHide(selectors, regex);


// find the teaser group with the link to the WM subpage
const link = document.querySelector('a.trenner__link[href="https://www.sportschau.de/fussball/fifa-wm-2022"]');

if(link) {
  const parentTeaserGroup = link.closest('.teasergroup');

  if(parentTeaserGroup) {

    let sibling = parentTeaserGroup.nextElementSibling;

    while(sibling.classList.contains('teasergroup--docked')) {
      // hide sibling
      sibling.classList.add('wm-boycott');

      sibling = sibling.nextElementSibling;
    }

    parentTeaserGroup.classList.add('wm-boycott');
  }

}
