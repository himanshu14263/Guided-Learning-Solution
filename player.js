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


    window.onload = function() {

        // getting steps data from given end point
        var u = 'https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=__5szm2kaj&refresh=true&env=dev&type=startPanel&vars%5Btype%5D=startPanel&sid=none&_=1582203987867'

        $.ajax({
            type: "GET",
            dataType: "jsonp",
            headers: { "X-My-Custom-Header": "some value" },
            url: u
        }).done(function(data) {
            console.log(data);
        });
    }

})();