const selectors = [
  'article',
  'div[data-component="SwiperBar"] .swiper-slide',
  '.swiper-wrapper .swiper-slide',
  'div[data-area^="block>podlove"]',
  'div[data-component="AudioPlayerPlaceholderOmny"]',
  'div[data-area="block>margin_column_top"] li',
  'div[data-area="block>shortnews:nachrichten_in_kürze"] li',
  'div[data-breakingnews]',
];

searchAndHide(selectors, regex);
