// ==UserScript==
// @name         GLS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // code to insert jquery in this file.
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);


})();