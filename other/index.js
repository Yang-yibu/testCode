
; (function (win, doc) {
    // 'use strict';
    Function.prototype.getName = function () {
        return this.name || this.toString().match(/function\s*([^(]*)\(/)[1]
    }

    function aa() {
        console.log(this)
        console.log(this.get)
    }
    aa();
}(window, document));
console.log(aa)
