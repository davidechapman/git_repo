// ==UserScript==
// @name         StealthAd_Stripper
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Removes annoying popunder/over ad on thevideo.me
// @author       David Chapman
// @include      http*://thevideo.me/*
// @match        http*://thevideo.me/*
// @grant        GM_addStyle
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// ==/UserScript==

var adstrip_loop = setInterval(function() {  
    $(".flc-panel").remove();
}, 3000);