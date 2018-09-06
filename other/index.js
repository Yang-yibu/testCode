
; (function (win, doc) {
    // 'use strict';
    Function.prototype.getName = function () {
        return this.name || this.toString().match(/function\s*([^(]*)\(/)[1]
    }

    function aa() {
        console.log(this)
        console.log(this.get)
    }
    // aa();


    // 数组热更新
    function arrraySplice() {
        let a = ['a', 'b', { a: 1, b: 2 }, 'c', 'd', 'f'];
        let b = [{ c: 2, d: { a: 1 } }, { a: 1 }, '1'];

        // 替换的起始位置（下标），替换的数组长度，替换的元素
        let c = a.splice(5, b.length, ...b);

        console.log(c);
        console.log(a, c)
    }
    arrraySplice();

    // js 循环
    function switchLoop(styleName) {
        switch (styleName) {
            case 'text-align':
                console.log('textAlign')
                break;
            case 'font-weight':
                console.log('fontWeight')
                break;
            case 'font-size':
                console.log('fontSize')
                break;
            case ('background-color'):
                console.log('background')
                break;
            case 'color':
                console.log('colorArr')
                break;
        }
    }
    switchLoop('background');
}(window, document));

