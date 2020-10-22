/**
 * [rem换算]
 * @param  {Object} doc [document]
 * @param  {Object} win [window]
 * @return {String}     [fontSize]
 */

(function(doc, win) {
var docEl = doc.documentElement || doc.body;
var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
var recalc = function() {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) {
      return;
    }
    docEl.style.fontSize = clientWidth /10 + 'px';
};
if (!doc.addEventListener) return;
win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


// window.onresize = setHtmlFontSize;
// function setHtmlFontSize(){
//     const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//     const htmlDom = document.getElementsByTagName('html')[0];
//     htmlDom.style.fontSize = htmlWidth /10 + 'px';
// };
// setHtmlFontSize();
