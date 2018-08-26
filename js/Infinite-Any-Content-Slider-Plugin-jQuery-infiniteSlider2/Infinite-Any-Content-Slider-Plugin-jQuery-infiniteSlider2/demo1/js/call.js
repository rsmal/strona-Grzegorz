;jQuery(document).ready(function($) {
  $('#infinite-slider2').infiniteSlider2({
    // general settings
    width: 100,
    height: 'auto',
    arrows: true,
    toggles: true,
    labels: true,

    // slide background settings
    slideBackgroundColor: [
      '#5eabe7',
      '#cca27e',
      '#7e4c39',
      '#83595e',
      '#2e2432'
    ],
    slideBackgroundImage: [],

    // arrow settings
    arrowWidth: 32,
    arrowHeight: 76,
    arrowMargin: 20,
    arrowBackgroundColor: '',
    arrowBackgroundImageRight: '',
    arrowBackgroundImageLeft: '',
    arrowFill: 'white',
    arrowOpacity: 0.4,
    arrowAnimate: true,

    // toggle settings
    toggleShape: 'circle',
    toggleWidth: 16,
    toggleHeight: 16,
    toggleGutter: 8,
    toggleOpacity: 1,
    toggleColor: '',
    toggleActiveColor: '',
    toggleBorder: '3px solid rgba(255, 255, 255, 0.4)',
    toggleActiveBorder: '3px solid white',
    toggleMargin: 30,
    toggleAnimate: true,

    // label settings
    slideLabelWidth: 74,
    slideLabelHeight: 74,
    slideLabelBorderWidth: 3,
    slideLabelBorderStyle: 'solid',
    slideLabelBorderColor: 'rgba(255, 255, 255, 0.4)',
    slideActiveLabelBorderColor: 'white',
    slideLabelBackgroundColor: [
      '#5eabe7',
      '#cca27e',
      '#7e4c39',
      '#83595e',
      '#2e2432'
    ],
    slideLabelImage: [],

    // advanced settings
    autoplay: true,
    slideInterval: 6000,
    slideDuration: 600,
    cursor: 'pointer'
  });
});
