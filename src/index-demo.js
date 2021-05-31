import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

const patch = init([
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
]);
// 创建虚拟节点
const myVNode3 = h('ul', [
  h('li', '牛奶'),
  h('li', '咖啡'),
  h('li', [h('div', [h('p', '可口可乐'), h('p', '百事可乐')])]),
  h('li', h('p', '雪碧'))
])
//  让虚拟节点上树
const container = document.getElementById("container");
patch(container, myVNode3)

//myVNode3 对应的虚拟dom树
// {
//   'sel': 'ul',
//   'data': {},
//   'children': [
//     {},
//     {},
//     {},
//     {}
//   ]
// }