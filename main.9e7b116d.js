!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},c={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in c)return c[e].exports;if(e in n){var o=n[e];delete n[e];var t={id:e,exports:{}};return c[e]=t,o.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,c){n[e]=c},e.parcelRequired7c6=o),o.register("8dFP0",(function(e,c){var n=0;function o(e,c){t(c[n=(n+e+c.length)%c.length].dataset.word,c)}function t(e,c){!function(e){document.querySelectorAll(".main_image_item .mainImage").forEach((function(c){c.style.display=c.dataset.word===e?"block":"none"}))}(e),function(e){var c=document.querySelector(".main_title");if(!c)return;var n="Чімі з ".concat(e.toLowerCase()," присипкою");switch(e){case"Кокос":n="Чімі з кокосовою присипкою";break;case"Кориця":n="Чімі з присипкою кориця";break;case"Горіх":n="Чімі з горіховою присипкою";break;case"Цукор":n="Чімі з цукровою присипкою";break;case"Вафля":n="Чімі з вафельною присипкою";break;case"Орео":n="Чімі з присипкою орео";break;case"Нонпарель":n="Чімі з присипкою нонпарель";break;case"Печиво":n="Чімі з присипкою печиво"}c.textContent=n}(e),function(e,c){c.forEach((function(c){c.dataset.word===e?(c.classList.add("active-word"),c.classList.add("active")):(c.classList.remove("active-word"),c.classList.remove("active"))}))}(e,c),function(e){var c=r[e],n=document.getElementById(c);n&&(document.querySelectorAll(".additional-images").forEach((function(e){e.classList.add("hidden")})),n.classList.remove("hidden"))}(e),function(e){console.log("Спроба оновлення кольорів для слова: ".concat(e));var c=a[e];if(c){console.log("Кольори знайдено: bg = ".concat(c.bg,", circle = ").concat(c.circle));var n=document.documentElement;n.style.setProperty("--current-bg","var(".concat(c.bg,")")),n.style.setProperty("--current-circle","var(".concat(c.circle,")")),console.log("Кольори оновлено")}else console.error('Кольори для слова "'.concat(e,'" не знайдено.'))}(e)}document.addEventListener("DOMContentLoaded",(function(){var e=Array.from(document.querySelectorAll("#circle-text .word"));!function(e){e.forEach((function(c,o){c.addEventListener("click",(function(){n=o,t(c.dataset.word,e)}))}))}(e),function(e){var c=document.querySelector(".slider-icon-prev").closest("button"),n=document.querySelector(".slider-icon-next").closest("button");c.addEventListener("click",(function(){return o(-1,e)})),n.addEventListener("click",(function(){return o(1,e)}))}(e),t(e[0].dataset.word,e)}));var r={"Кокос":"coconutImages","Кориця":"cinnamonImages","Горіх":"nutImages","Цукор":"sugarImages","Вафля":"waffleImages","Орео":"oreoImages","Нонпарель":"nonparelImages","Печиво":"cookieImages"};var a={"Кокос":{bg:"--coconut-bg",circle:"--coconut-circle"},"Кориця":{bg:"--cinnamon-bg",circle:"--cinnamon-circle"},"Горіх":{bg:"--nut-bg",circle:"--nut-circle"},"Цукор":{bg:"--sugar-bg",circle:"--sugar-circle"},"Вафля":{bg:"--waffle-bg",circle:"--waffle-circle"},"Орео":{bg:"--oreo-bg",circle:"--oreo-circle"},"Нонпарель":{bg:"--nonparel-bg",circle:"--nonparel-circle"},"Печиво":{bg:"--cookie-bg",circle:"--cookie-circle"}}})),o("8dFP0")}();
//# sourceMappingURL=main.9e7b116d.js.map
