// ==UserScript==
// @name         GLS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com
// @grant        none
// ==/UserScript==


// index added to iterate over steps
var index = 0;


// function to find the coordinates of given element
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

// function to remove Tooltip
function removeTooltip() {
    $('div.tooltip').remove();
};

// adding function to create tooltip
function createTooltip(selector, content, deltaLeft, deltaTop) {

    const stepsArray = [{
            "selector": "hplogo",
            "content": "<p>Welcome to <em><strong>Google</strong></em>!</p>\n",
            "deltaLeft": 0,
            "deltaTop": -15
        },
        {
            "selector": "a.gb_g",
            "content": "<p>Click <strong>Images</strong> to go to images section</p>\n",
            "deltaLeft": 0,
            "deltaTop": 20
        },
        {
            "selector": "div.SDkEP",
            "content": "<p>Enter a search query here and click ENTER!</p>\n",
            "deltaLeft": 50,
            "deltaTop": 45
        },
        {
            "selector": "SIvCob",
            "content": "<p>Click here to <b>search</b></p>\n",
            "deltaLeft": 120,
            "deltaTop": -30
        }
    ];

    const tooltipCss = {
        "margin": "8px",
        "padding": "10px",
        "border": "1px solid black",
        "background-color": "black",
        "position": "absolute",
        "color": "white",
        "z-index": 5,
        "border-radius": "5px"
    };

    $('<div id="hola" class="tooltip"><button class="closeButton">x</button><br>' + content + '\n</div>')
        .appendTo('body');
    $(".tooltip").css(tooltipCss);

    let coor;
    if (selector === 'a.gb_g' || selector === 'div.SDkEP')
        coor = getOffset(document.querySelector(selector))
    else
        coor = getOffset(document.getElementById(selector))

    var d = document.getElementById('hola')
    d.style.position = "absolute";
    d.style.left = coor.left + deltaLeft + 'px';
    d.style.top = coor.top + deltaTop + 'px';

}


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


        // creating stepsArray iterate over steps
        const stepsArray = [{
                "selector": "hplogo",
                "content": "<p>Welcome to <em><strong>Google</strong></em>!</p>\n",
                "deltaLeft": 0,
                "deltaTop": -15
            },
            {
                "selector": "a.gb_g",
                "content": "<p>Click <strong>Images</strong> to go to images section</p>\n",
                "deltaLeft": 0,
                "deltaTop": 20
            },
            {
                "selector": "div.SDkEP",
                "content": "<p>Enter a search query here and click ENTER!</p>\n",
                "deltaLeft": 50,
                "deltaTop": 45
            },
            {
                "selector": "SIvCob",
                "content": "<p>Click here to <b>search</b></p>\n",
                "deltaLeft": 120,
                "deltaTop": -30
            }
        ];
    }


    // function called to create Tooltip
    createTooltip(stepsArray[index].selector, stepsArray[index].content, stepsArray[index].deltaLeft, stepsArray[index].deltaTop);

})();