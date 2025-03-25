// ==UserScript==
// @name         YouTube - URL Playtime Keeper
// @namespace    https://github.com/ChemaZapiens/dev/tree/main/random/userscript
// @version      1.0
// @description  Updates the browser URL with the current timestamp every 30 seconds so playback resumes where you left if you restart the browser, 
// @description  bookmark the video, use The Greater Discarder, etc.
// @description  You can also quickly copy the URL or modify the time (&t=1m30s)
// @author       Chema Zapiens
// @match        *://www.youtube.com/watch*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}m${secs}s`;
    }

    function updateUrlWithTimestamp() {
        const player = document.querySelector('video');
        if (!player) return;

        const currentTime = Math.floor(player.currentTime);
        const formattedTime = formatTime(currentTime);
        const url = new URL(window.location.href);

        if (url.searchParams.get('t') !== formattedTime) {
            url.searchParams.set('t', formattedTime);
            window.history.replaceState(null, '', url.toString());
        }
    }

    setInterval(updateUrlWithTimestamp, 30000);
})();
