!function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)t.d(e,o,function(r){return n[r]}.bind(null,o));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=11)}([function(n,r,t){"use strict";var e,o=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},i=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}(),a=[];function c(n){for(var r=-1,t=0;t<a.length;t++)if(a[t].identifier===n){r=t;break}return r}function s(n,r){for(var t={},e=[],o=0;o<n.length;o++){var i=n[o],s=r.base?i[0]+r.base:i[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var p=c(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(f)):a.push({identifier:l,updater:b(f,r),references:1}),e.push(l)}return e}function d(n){var r=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var o=t.nc;o&&(e.nonce=o)}if(Object.keys(e).forEach((function(n){r.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var l,p=(l=[],function(n,r){return l[n]=r,l.filter(Boolean).join("\n")});function f(n,r,t,e){var o=t?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=p(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function u(n,r,t){var e=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var g=null,m=0;function b(n,r){var t,e,o;if(r.singleton){var i=m++;t=g||(g=d(r)),e=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=d(r),e=u.bind(null,t,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var t=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var e=0;e<t.length;e++){var o=c(t[e]);a[o].references--}for(var i=s(n,r),d=0;d<t.length;d++){var l=c(t[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},function(n,r,t){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=function(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var o=(a=e,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,s;return[t].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(n,t,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);e&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),r.push(s))}},r}},function(n,r,t){"use strict";n.exports=function(n,r){return r||(r={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,r,t){var e=t(0),o=t(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};e(o,i);n.exports=o.locals||{}},function(n,r,t){var e=t(1),o=t(2),i=t(5),a=t(6),c=t(7);r=e(!1);var s=o(i),d=o(a),l=o(c);r.push([n.i,".tip {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 9999;\r\n}\r\n\r\n.tip .tip-bg {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0.46;\r\n    background: #000000;\r\n}\r\n\r\n.tip.hide,\r\n.tip.hide .tip-bg {\r\n    width: 0;\r\n    height: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.tip .tip-box {\r\n    position: absolute;\r\n    max-width: 600px;\r\n    border-radius: 12px;\r\n    background-color: #333;\r\n    opacity: 0.7;\r\n    overflow: hidden;\r\n    transition: all 0.3s ease-in;\r\n}\r\n\r\n.tip.success .tip-box,\r\n.tip.warn .tip-box,\r\n.tip.error .tip-box,\r\n.tip.loading .tip-box {\r\n    min-width: 240px;\r\n    min-height: 234px;\r\n}\r\n\r\n.tip .tip-box.hide {\r\n    width: 0;\r\n    height: 0;\r\n    opacity: 0;\r\n}\r\n\r\n.tip .tip-content {\r\n    max-width: 600px;\r\n    border-radius: 17px;\r\n    overflow: hidden;\r\n}\r\n\r\n.tip .tip-icon {\r\n    margin: 52px auto 0 auto;\r\n    display: block;\r\n    width: 75px;\r\n    height: 75px;\r\n}\r\n\r\n.tip .tip-icon.success {\r\n    background: url("+s+") center center / 100% 100% no-repeat;\r\n}\r\n\r\n.tip .tip-icon.warn {\r\n    background: url("+d+") center center / 100% 100% no-repeat;\r\n}\r\n\r\n.tip .tip-icon.error {\r\n    background: url("+l+") center center / 100% 100% no-repeat;\r\n}\r\n\r\n.tip .loading {\r\n    position: relative;\r\n    margin: 52px auto 0 auto;\r\n    display: block;\r\n    width: 75px;\r\n    height: 75px;\r\n    transform-origin: 35px 35px;\r\n    -webkit-transform-origin: 35px 35px;\r\n    -webkit-animation: loading 1.5s steps(12) both infinite;\r\n    animation: loading 1.5s steps(12) both infinite;\r\n}\r\n\r\n.tip .loading em {\r\n    position: absolute;\r\n    left: 32px;\r\n    top: 0;\r\n    display: inline-block;\r\n    width: 6px;\r\n    height: 18px;\r\n    border-radius: 3px;\r\n    background-color: #858585;\r\n    transform-origin: 3px 35px;\r\n    -webkit-transform-origin: 3px 35px;\r\n}\r\n\r\n.tip .loading em:nth-child(1) {\r\n    transform: rotate(0deg);\r\n    -webkit-transform: rotate(0deg);\r\n    background-color: #c6c6c6;\r\n}\r\n\r\n.tip .loading em:nth-child(2) {\r\n    transform: rotate(30deg);\r\n    -webkit-transform: rotate(30deg);\r\n    background-color: #d6d6d6;\r\n}\r\n\r\n.tip .loading em:nth-child(3) {\r\n    transform: rotate(60deg);\r\n    -webkit-transform: rotate(60deg);\r\n    background-color: #e6e6e6;\r\n}\r\n\r\n.tip .loading em:nth-child(4) {\r\n    transform: rotate(90deg);\r\n    -webkit-transform: rotate(90deg);\r\n    background-color: #858585;\r\n}\r\n\r\n.tip .loading em:nth-child(5) {\r\n    transform: rotate(120deg);\r\n    -webkit-transform: rotate(120deg);\r\n    background-color: #858585;\r\n}\r\n\r\n.tip .loading em:nth-child(6) {\r\n    transform: rotate(150deg);\r\n    -webkit-transform: rotate(150deg);\r\n    background-color: #858585;\r\n}\r\n\r\n.tip .loading em:nth-child(7) {\r\n    transform: rotate(180deg);\r\n    -webkit-transform: rotate(180deg);\r\n    background-color: #858585;\r\n}\r\n\r\n.tip .loading em:nth-child(8) {\r\n    transform: rotate(210deg);\r\n    -webkit-transform: rotate(210deg);\r\n    background-color: #858585;\r\n}\r\n\r\n.tip .loading em:nth-child(9) {\r\n    transform: rotate(240deg);\r\n    -webkit-transform: rotate(240deg);\r\n    background-color: #858585;\r\n}\r\n\r\n.tip .loading em:nth-child(10) {\r\n    transform: rotate(270deg);\r\n    -webkit-transform: rotate(270deg);\r\n    background-color: #969696;\r\n}\r\n\r\n.tip .loading em:nth-child(11) {\r\n    transform: rotate(300deg);\r\n    -webkit-transform: rotate(300deg);\r\n    background-color: #a5a5a5;\r\n}\r\n\r\n.tip .loading em:nth-child(12) {\r\n    transform: rotate(330deg);\r\n    -webkit-transform: rotate(330deg);\r\n    background-color: #b6b6b6;\r\n}\r\n\r\n@-webkit-keyframes loading {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: rotate(720deg);\r\n    }\r\n}\r\n\r\n.tip .tip-content p {\r\n    margin: auto;\r\n    padding: 19px 40px;\r\n    text-align: center;\r\n    line-height: 48px;\r\n    font-family: SourceHanSansCN-Normal;\r\n    font-size: 30px;\r\n    color: #ffffff;\r\n    letter-spacing: -0.57px;\r\n    word-break: break-all;\r\n}\r\n\r\n.tip .tip-content button {\r\n    margin: 25px auto 0 auto;\r\n    display: block;\r\n    width: 150px;\r\n    height: 50px;\r\n    background-color: #fff;\r\n    border: 1px solid #fcb828;\r\n    border-radius: 25px;\r\n    font-family: SourceHanSansCN-Bold;\r\n    font-size: 16px;\r\n    color: #fcb828;\r\n    letter-spacing: -0.46px;\r\n    text-align: center;\r\n}\r\n",""]),n.exports=r},function(n,r,t){"use strict";t.r(r),r.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAllBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AJcWoAAAAMXRSTlMAneVDBAbsC/lqVRH89aml9PDg26+SiTEjHBfp1cS6s5WAc2FKOzgq0My+TaF5Xj0o9LR3gAAAAalJREFUWMPt1tlugkAAheFhWAUFVxBxwRXF2jrv/3JNY6ycKan00JsmPZdefMnoxH/E/3Dm2FHO2GyH2Ia6zbDbMLG6L2qhHLrqcz6tuCP1WEkzE1VZxiqmqm7OHmkIjEEyhoLtOGWHypBTAolMh2MiVOY2pfioeAmlzBxk1oLaGJWTRSmvqPQKSkkHyGwEtSUqC+5IHVT6U0qZ9n/l4i1QWXLKBpVBSilFD5ktpVgnVFaC2hoVZ0YpiYeMz9XtiErI1g0mA7ZusDNft/YtmKAyDMi64eofI29hBg+VJ3VTk9rbmavbXuxmdRu5omb543rbTerW3deeqHqnrAZ1i5/Hy6DrJvHbY+umcDFZN6k5F65ukdLW+aZuXtHwhuKfY+o0rluuM12fqZu90h3vzNTNLXWnZzJ1cxdfnMPH5+UP6xYcdWeQMHWbzXUnK65E3dKR7sgjU7ep1B2ubtdM4ci6Jfgeo+t2gGvC182E34av2w5yz9fNh8byddvWMSb5ZMXlgtgFCKwb/zjDuvHPh5gQoNkQdmJWCDeGd4y7YolW20fSk+Fe/Mm9A/0H8QvgVhlGAAAAAElFTkSuQmCC"},function(n,r,t){"use strict";t.r(r),r.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAilBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2N2iNAAAALXRSTlMABPDzvkzoqhxi+TvZE5HSr0gP47WEWlc1ai/HgkAswVTeDNq3jIdRTsCcIR9Vq360AAAClklEQVRYw6SU2ZKCMBBFb9iXQTaVRRGlXGYe8v+/N1XdGZyJiJI5L1QlqUNzOw1mOITXLC1tKe0yza7hActJQt+TGp4fJlhCnkVykijL8SYi/JAzfITirUpIMit6XVHgyxHrvK/qYACGoK72Z0uO+AFmOY5ny0usFS/iSzm+4TiXykoqeldMHnC/pGIlnja5l4wT4ymxI5ld8iQWla23xSxbTyUdTFpOKr4CLyhUG04TnoRriRpt3XVs23G1xSbiehJoiB1t2J22vpHERlvuLM5Hz3nFsdR6LVKh19N63C/tvvBtaKHhSIUD3cP1HP/ES2tRBx1bKmzodJSPFeAOR9/gATmCBxpaX2Mk505jgeb+8k/8QL0ui6WaoqSuCzAVnbthqQY32tmCSbkVyzXcyPR3MrGJJqat/J5UDxMN+rE3BfXfNdO4dN8KACFNgTDTCJqJEEDGs2Gm4VnMAGFRwIYaDtkSaPlpquEqWo5mDVMN1hQOf9zGXLOnaNlWmWsq+hqehNpcU/M8UOMDc01A147/b4O5ZuB/I58x1/CRf2vEdy/mrsMgDENRoCJDKw8sHdoKqcpCofz/73XIcBZix6RwR5AixbHvw+lv7aUkXaq2xN9UYv3BERj9wY32Q+709kvD8OKzIr7KMBijiRXQRxOiyGDCmGhEAW35AW1BonsAiULpfkDpCMwuIDDInR/IHeLrBeJrWgGcqGkFmjvGxNF+GBPbJjEMlk3CtKmjaZo2LKSDKLCQfza0VDmM5ZcaA/UFczrnUVRiTpm3o0dXGD1umejRSNwOQpMShKIcE8vqQyKQpy+y2gH6kxlGI0D747xzubBI28pSulwAQ1wNxOGMxQvo82ug/sillLkiC5f12r2tFdkPFXXj912nczwAAAAASUVORK5CYII="},function(n,r,t){"use strict";t.r(r),r.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAWlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ZMre9AAAAHXRSTlMABbWsq7SQ7K+c5srBfltBC/MV3tmjQzwuLfnyGbr69SUAAAFaSURBVFjDzdbJcoMwEIRhBERiX7w7ybz/a6aEwRyc8q+pubhvtIqvBKfOPi+Hvju1/p7pcqmChOryfB5mWeKdAnG1PFK7VZEtpUtXvmRL/fiiH/nHYWXPGJteBBxQpIpVJ+CQIiF2RwGHFJFYtgIOKiG2XsABZf03NwGHFBmXAw8OKfV6UrxxWMldBo5GYYcVdlghR6ewwwo7rLBDisZhhR1QNI5jhR1QUp0JlEQngJLosMIOK+ywwg4r7JCid1hhhxV2WOFM4UUJk1pxubymcFaFHVbYYYUdVthhhR1W2GGFHb0ShB1W8qlghxWXOXZYiT07rICTrLDDCjgqhR1W2GGFHVY0DivssMIOKEqnNu46vxyM5l13i31p2XX7dRrzrmtja991x/02ll3Xxa4077o+Vlfrrpt/l8obd92wNptzTlf2t+bhWV3PzXdTjZkud9+euv6wF/b8AZDA3xJjjfEaAAAAAElFTkSuQmCC"},function(n,r,t){var e=t(0),o=t(9);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};e(o,i);n.exports=o.locals||{}},function(n,r,t){var e=t(1),o=t(2),i=t(10);r=e(!1);var a=o(i);r.push([n.i,".msgbox-wrap {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: 9998;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.msgbox-wrap .msgbox-bg {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    background: rgba(4, 4, 15, 0);\r\n    transition: all 0.2s linear;\r\n}\r\n\r\n.msgbox-wrap .msgbox {\r\n    position: relative;\r\n    margin: 0 36px;\r\n    background: #ffffff;\r\n    border-radius: 8px;\r\n    transform-origin: center center;\r\n    transform: scale(0.2, 0.2);\r\n    transition: all 0.2s linear;\r\n    opacity: 0;\r\n}\r\n\r\n.msgbox-wrap.fade-in .msgbox-bg {\r\n    background: rgba(4, 4, 15, 0.4);\r\n}\r\n\r\n.msgbox-wrap.fade-in .msgbox {\r\n    transform: scale(1, 1);\r\n    opacity: 1;\r\n}\r\n\r\n.msgbox-wrap .msgbox-header {\r\n    padding: 30px 58px 28px 58px;\r\n    text-align: center;\r\n    line-height: 44px;\r\n    font-family: PingFangSC-Regular;\r\n    font-size: 32px;\r\n    color: #222222;\r\n}\r\n\r\n.msgbox-wrap .msgbox-header .close {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    display: block;\r\n    padding: 35px 30px;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: url("+a+") 30px 34px / 30px 30px no-repeat;\r\n}\r\n\r\n.msgbox-wrap .msgbox-content {\r\n    padding: 0 58px;\r\n    line-height: 34px;\r\n    font-family: PingFangSC-Regular;\r\n    font-size: 24px;\r\n    color: #acacac;\r\n    text-align: center;\r\n}\r\n\r\n.msgbox-wrap .msgbox-footer {\r\n    margin-left: 16px;\r\n    display: flex;\r\n    padding: 44px 58px 46px 58px;\r\n    justify-content: center;\r\n}\r\n\r\n.msgbox-wrap .msgbox-footer .btn {\r\n    margin-right: 16px;\r\n    padding: 14px 54px 16px 54px;\r\n    text-align: center;\r\n    line-height: 42px;\r\n    background: #fff;\r\n    border: 1px solid #bfcbd9;\r\n    border-radius: 8px;\r\n    font-family: PingFangSC-Regular;\r\n    font-size: 30px;\r\n    color: #1f2d3d;\r\n}\r\n\r\n.msgbox-wrap .msgbox-footer .primary {\r\n    border: none;\r\n    background: #24c77e;\r\n    color: #ffffff;\r\n}\r\n",""]),n.exports=r},function(n,r,t){"use strict";t.r(r),r.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZZJREFUSA211zFOwzAUAND/HQ7AyA0aFa4DCwsLQ5cyINGJgbGIBQZuwMLEXZo24QBIbHAAiPk/JFXsJrG/63hIY9ffT9+tbRnXeX5RAlwnSt1OJ5M3GLFk+fulhnJO1gJXm+ILQB+S96MUnh+n6esY9roo5mWpH6uxETIFWFcADuiLF+pwFhs2UBocQT0hI9mmWGrQNzUYNXMbpVm9oln9h8fC+1D2qozrTKNmPoTuwNwQY9pdaCe8L+6D9sKhuC86CEtxCeqEfXEp6gW78BDUG+7Dqf1ouw1SpdkcuL+rGOvY1dlYaoi/oHXSxEhQjhHBHGDg3EBFilYxVaTggQo+jO6cOcCn0eZREWVs/5Fa44sPFtUKHny1UZ5eBLyvg8RHqlfGXSgfbYxav7l35k54CG2mKAQfhH3QULwXlqAheCccgkrxHXgfVIIbcAzUF9/CMVEfvILHQF04ropiBqV+bjqGbPhNbN+nvc6TRJ22rzBBp0wfZrcbOF9hFOKSTsdvepk126AdFKN+Mk0XdAjfsUVXmIc/9jugZaI3tM4AAAAASUVORK5CYII="},function(n,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return a}));t(3);function e(n){var r=(n="object"==typeof n?n:{message:n}).type||"tip",t=n.message||"提示信息";t="object"==typeof t?JSON.stringify(t):t;var e=n.duration||1500,o="";switch(r){case"success":o='<i class="tip-icon success"></i>';break;case"warn":o='<i class="tip-icon warn"></i>';break;case"error":o='<i class="tip-icon error"></i>';break;case"loading":o='\n            <span class="tip-icon loading" id="loading">\n                <em></em>\n                <em></em>\n                <em></em>\n                <em></em>\n                <em></em>\n                <em></em>\n                <em></em>\n                <em></em>\n                <em></em>\n                <em></em>\n                <em></em>\n                <em></em>\n            </span>\n        '}var i=`\n        <div class="tip ${r}">\n            ${"tip"===r?"":'<div class="tip-bg"></div>'}\n            <div class="tip-box">\n                <div class="tip-content">\n                    ${o}\n                    <p>${t}</p>\n                </div>\n            </div>\n        </div>\n    `;$(".tip").remove(),$("body").append(i),"loading"!==r&&setTimeout((function(){$(".tip").addClass("hide")}),e)}function o(){$(".tip").addClass("hide")}t(8);function i({title:n,content:r,btns:t,animation:e="fade-in"}){var o=[];window.msgbox_btn_close=()=>{$(".msgbox-wrap").removeClass(e),setTimeout(()=>{$(".msgbox-wrap").remove()},200)},t.forEach((n,r)=>{window["msgbox_btn_callback_"+(r+1)]=()=>{"function"==typeof n.callback&&n.callback().then(window.msgbox_btn_close)},o.push(`<div class="btn ${n.type||""}" onclick="msgbox_btn_callback_${r+1}()">${n.text}</div>`)});var i=`\n        <div class="msgbox-wrap">\n            <div class="msgbox-bg"></div>\n            <div class="msgbox">\n                <div class="msgbox-header">\n                    ${n}\n                    <span class="close" onclick="msgbox_btn_close()"></span>\n                </div>\n                <div class="msgbox-content">${r}</div>\n                <div class="msgbox-footer">${o.join("")}</div>\n            </div>\n        </div>\n    `;$("body").append(i),window.requestAnimationFrame(()=>{$(".msgbox-wrap").addClass(e)})}function a(n){n.prototype.$showTip=e,n.prototype.$hideTip=o,n.prototype.$msgbox=i}}]);