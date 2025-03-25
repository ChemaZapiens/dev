// ==UserScript==
// @name            Coursera - Place transcript next to video
// @description		  Places the video transcript next to the video, so you can watch both simultaneously
// @version         01
// @namespace		    https://github.com/ChemaZapiens/dev/tree/main/random/userscript
// @author          Chema Zapiens
// @license      GPL 3.0
// @include         https://*coursera.org/learn/*
// @grant           GM_addStyle
// ==/UserScript==

GM_addStyle(`
.rc-VideoItemWithHighlighting {
    margin: 0 auto;
    padding: 0 36px;
    max-width: none;
    width: 100%;
}

.rc-VideoMiniPlayer {
    width: 60%;
    float: left;
}

.rc-ItemNavigation .item-page-content {
    width: unset;
}

.rc-VideoItemWithHighlighting .rc-VideoTranscriptToolbar {
    margin: 6px 12px;
}

.rc-VideoHighlightingManager {
    max-height: 600px;
    overflow: auto;
    width: 38%;
    float: right;
}
.rc-VideoItemWithHighlighting .rc-Transcript {
    padding-right: 12px;
}

.rc-Paragraph .timestamp {
    margin-left: -5px;
}
`);
