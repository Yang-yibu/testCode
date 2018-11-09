// 先注册组件 后实例化
Vue.component('todo-item', {
    props: ['todo'], // 自定义属性
    template: '<li>{{ todo.text }}</li>'
});

let app = new Vue({
    el: '#app',
    data: {
        rawHtml: '<div class="a" style="color: red;">哈啊</div>',
        message: 'hello world!',
        msg: {
            isMsg: true
        },
        groceryList: [
            {id: 0, text: '蔬菜'},
            {id: 1, text: '奶酪'},
            {id: 2, text: '随便其它什么人吃的东西'}
        ],

        dynamicId: 'a',
        isButtonDisabled: null,

        isActive: false,
        hasError: true,
        className: 'active',

        activeColor: 'red',
        fontSize: 30,
        style: {fontSize: '30px',background: 'yellow'},

        isShow: true,

        loginType: 'userName',

        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ],

        items1: ['a', 'b', 'c'],

        data: {
            items: ['a', 'b', 'c']
        },

        name: 'Vue.js',
        age: 1
    },

    methods: {
        toggleType: function () {
            if (this.loginType === 'userName') {
                this.loginType = 'aaa'
            } else {
                this.loginType = 'userName'
            }
        },

        greet: function (event) {
            // `this` 在方法里指向当前 Vue 实例
            alert('Hello ' + this.name + '!');
            // `event` 是原生 DOM 事件
            console.log(event);
            if (event) {
                alert(event.target.tagName)
            }
        },

        say: function (message, e) {
            console.log(message);
            console.log(e);
        }
    },

    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
});
app.$data.data.items[0] = 'aa';

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        // 如果 `question` 发生改变，这个函数就会运行
        question: function (newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            // this.debouncedGetAnswer()
            this.getAnswer();
        }
    },
    created: function () {
        // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
        // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
        // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
        // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
        // 请参考：https://lodash.com/docs#debounce
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function () {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark. ;-)';
                return
            }
            this.answer = 'Thinking...';
            var vm = this;
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function (error) {
                    vm.answer = 'Error! Could not reach the API. ' + error
                })
        }
    }
});
// app.message = 'hello';

