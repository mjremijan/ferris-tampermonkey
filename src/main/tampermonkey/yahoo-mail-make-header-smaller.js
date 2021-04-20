// ==UserScript==
// @name         Yahoo! mail make header smaller
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  The Yahoo! mail header takes up a lot of unecessary space and that's annoying. This script removes unnecessary header items and reduces the overal header height.
// @author       mjremijan@yahoo.com
// @match        https://mail.yahoo.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(
        function(){
            var x;

            try {
                // hide
                x = document.getElementsByClassName("_yb_1apb7 _yb_1h0mk");
                x[0].style.display = 'none';
            } catch (error) {
                console.log(error.message);
            }

            try {
                // height
                x = document.getElementsByClassName("H_3n1j3");
                x[0].style.height = '70px';
            } catch (error) {
                console.log(error.message);
            }

            try {
                // height
                x = document.getElementById("ybar-inner-wrap");
                x.style.height = '70px';
            } catch (error) {
                console.log(error.message);
            }

            try {
                // height
                x = document.getElementById("ybar");
                x.style.height = '70px';
            } catch (error) {
                console.log(error.message);
            }

        }
        ,5000
    );

})();

