import './användarens-egen-sida.js';

import { initMemberPage } from './användarens-egen-sida.js';

// Kör bara om rätt sida
if (document.querySelector('.member-page')) {
  initMemberPage();
}
