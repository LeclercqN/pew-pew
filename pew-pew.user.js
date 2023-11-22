// ==UserScript==
// @name         OUI
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

var a = new Audio('https://filebin.net/8rybsgwxxwjz25g8/pew.mp3');
var b = new Audio('https://www.myinstants.com/media/sounds/headshot_1.mp3');
    var i = 0;
document.body.addEventListener("mousedown", () => {a.pause();a.currentTime = 0; i++; a.play();if (i >3) {b.play(); i=0;}});
})();
