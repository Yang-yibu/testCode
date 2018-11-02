;
(function(win, doc) {
    // 'use strict';
    Function.prototype.getName = function() {
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
    // arrraySplice();

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
    // switchLoop('background');


    function parseUrl(url) {
        if (!url) { return false }

        let arr = url.split('?'),
            obj = {};

        let parameter = arr[url.indexOf('?') === -1 ? 0 : 1].split('&');
        for (let val of parameter) {
            if (!val) continue;
            let valArr = val.split("=");
            obj[valArr[0]] = valArr[1];
        }

        return obj;
    }
    var a = parseUrl('https://yxh.126net.com/poster_res/tpl/shuangshiyi05.html?&openId=ozH-P4pJONiASJtjzZv63ZkyErkY&merchantId=121&tplId=50');
    // console.log(a);

    function urlEncode(param, key, encode) {
        debugger
        if (param == null) return '';
        let paramStr = '';
        let t = typeof(param);
        if (t === 'string' || t === 'number' || t === 'boolean') {
            paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
        } else {
            // for (let i in param) {
            for (let i in param) {
                let k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
                paramStr += urlEncode(param[i], k, encode);
            }
        }
        return paramStr;
    }
    console.log(urlEncode({ a: 1, b: 2, c: 3 }));
}(window, document));