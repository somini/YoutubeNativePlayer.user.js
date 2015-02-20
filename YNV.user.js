// ==UserScript==
// @name        Youtube Native Video Player
// @namespace   somini
// @description Watch youtube videos on your browser's native player.
// @include     https://www.youtube.com/watch*
// @version     2.3
// @grant       none
// ==/UserScript==

document.addEventListener("DOMContentLoaded", function() {
  vid = document.getElementsByTagName('video')[0]; //There's a single video
  if (vid.src) { // is not null
    document.body.className = ''; document.body.style = 'overflow-y: hidden;';
    document.body.innerHTML = '<video width="100%" height="100%" controls style="background: black" src="'+vid.src+'" />';
  }
});
