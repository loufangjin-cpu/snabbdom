import h from "./mysnabbdom/h";

// 创建虚拟节点
const myVNode1 = h('div', {}, 'first')
const myVNode2 = h('div', {}, [
  h('p', {}, 'hh')
])
const myVNode3 = h('div', {},
  h('p', {}, 'hh')
)
console.log('myVNode1', myVNode1)
console.log('myVNode2', myVNode2)
console.log('myVNode3', myVNode3)

//对应的虚拟dom树结构
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