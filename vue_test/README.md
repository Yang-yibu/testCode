## VUE 官方文档

### 指令（v-*）：

### 参数
参数即为标签属性  
`<a v-bind:href="url"></a>`

### 修饰符


```
bind: 绑定数据 缩写 v-bind:href -> :href
on: 绑定事件 缩写 v-on:click -> @click
model: 表单数据双向绑定
if: 条件控制
```

### 数据绑定

```sh
# 标签内
{{ message }}

# 标签属性
<span v-bind:title="message">
```

一次性插值  
`<span v-once>{{ a }}</span>`

渲染 HTML 代码

#### 关键字
true: boolean 类型的 true
false: boolean 
```html
<span v-if="false">hahhaha</span>
```

#### [class 和 style 属性上的绑定](https://vuejs.bootcss.com/v2/guide/class-and-style.html)

支持对象语法，数组语法 - 完全的JS语句
```vue
<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>
```

组件上使用 class 属性：可将组件视为自定义标签与正常标签无异

内联样式：  

CSS 属性名：驼峰 fontSize, 短横线 'font-size'
对象语法，数组语法（样式对象）

```vue
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

#### 运算
支持完全的单个表达式运算（小程序只支持简单的 算术运算，字符串运算，逻辑运算条件运算）

#### 注意
* 当实例被创建时 data 中存在的属性才是响应式：数据变化视图做相应的变化

### 计算属性
相当于把两个值（message 和 reversedMessage）关联起来

计算属性是基于依赖进行缓存的：函数需要时纯函数

如果在小程序中实现：
每次设置 message 时 调用 对应的函数
```js
page({
    data: {
        message: 'hello!'
    },
    reversedMessage: function () {
        let { message } = this.data;
        this.setData({
            reversedMessage: message.split('').reverse().join('')
        })
    }
})
```

### 条件渲染

```
v-if
# wx:if

v-else
# wx:if

v-else-if
# wx:elif

template v-if 
# 不可见的包装元素
# block wx:if

v-if vs v-show
# wx:if vs hidden
```

[Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做除了使 Vue 变得非常快之外](https://vuejs.bootcss.com/v2/guide/conditional.html#%E7%94%A8-key-%E7%AE%A1%E7%90%86%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%9A%84%E5%85%83%E7%B4%A0)

### 列表渲染

迭代数组：of in 互换好像没区别
```vue
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>

v-for="(item, index) in items"

```
小程序
```vue
<view wx:for="{{ items }}" 
    wx:for-item="item"
    wx:for-index="index">

</view>
```

迭代对象

```vue
 <li v-for="{ value, key, index) in obj">
    {{ value }}
  </li>
```
> 在遍历对象时，是按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下是一致的。

### 数据更新

vue

数组更新检测：

变异方法
> js 调用这些方法的会改变原始数组
```js
arr.push()
arr.pop()
arr.shift()
arr.unshift()
arr.splice()
arr.sort()
arr.reverse()
```

```vue
# 数组
Vue.set(vm.items, indexOfItem, newValue)
vm.$set(vm.items, indexOfItem, newValue)

# 对象
Vue.set(object, key, value)
vm.$set(vm.userProfile, 'age', 27)
```

小程序：`this.setData()`

### 事件绑定

事件处理：函数名
```vue
<button v-on:click="greet">Greet</button>
```

内联处理器中的方法
> 直接调用； $event 原生 DOM 事件
```vue
 <button v-on:click="say('hi', $event)">Say hi</button>
```

[事件修饰符](https://vuejs.bootcss.com/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6)