// diff 处理新旧节点不是同一个节点时
import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const myVnode1 = h('ul', {}, [
  h('li', {}, '牛奶'),
  h('li', {}, '咖啡'),
  h('li', {}, [h('div', {}, [h('p', {}, '可口可乐'), h('p', {}, '百事可乐')])]),
  h('li', {}, h('p', {}, '雪碧'))
])

const container = document.getElementById('container')
patch(container, myVnode1)

const btn = document.getElementById('btn')
const myVnode2 = h('section', {}, [
  h('h1', {}, '我是新的h1'),
  h('h2', {}, '我是新的h2')
])
btn.onclick = function () {
  patch(myVnode1, myVnode2)
}

