import { CoolSlider } from './CoolSlider.js';

const imagesLinks = [
  'img/dragon_fly_jaws_69221_1920x1080.jpg',
  'img/girl_hat_bw_132197_1920x1080.jpg',
  ];

const imagesLinks2 = [
  'img/light_beam_1326875_1920x1080.jpg',
  'img/treble_clef_musical_notes_multicolored_121263_1920x1080.jpg',
]

new CoolSlider({
  sliderId: 'dragonSlide',
  imageList: imagesLinks,
});

new CoolSlider({
  sliderId: 'light',
  imageList: imagesLinks2,
});