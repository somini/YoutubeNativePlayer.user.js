// ==UserScript==
// @name        Youtube Native Video Player
// @namespace   somini
// @description Watch youtube videos on your browser's native player.
// @include     https://www.youtube.com/watch*
// @version     2.0
// @grant       none
// ==/UserScript==

document.addEventListener("DOMContentLoaded", function() {
  vid = document.getElementsByTagName('video')[0]; //There's a single video
  if (vid) { // is not null
    document.body.innerHTML = '<video width="100%" height="100%" controls src="'+vid.src+'" />';
  }
});
