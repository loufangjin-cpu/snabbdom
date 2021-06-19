## 编译
template => ast => render
compileToFunction
yarn template 命令执行可以在浏览器里面看见render的过程
## ast => render底的过程
baseCompile =>
ast: (parse解析： 把字符窜template变成ast ) 可以知道是静态节点还是动态节点
=> tranform 转换： 解析styLe等(此部是ast的深加工)
=> generate 生成渲染函数： 递归遍历ast生成对应的js代码
## 静态节点提升
1、静态提升： render的时候直接使用缓存
2、动态打补丁：通过生成对应的二进制， 然后只需要打补丁
3、缓存事件处理程序(click)： 避免重新创建, 触发children
4、块blocK: 避免diff整棵树
## dom 和 patch
重要参数
dynamicChildren \ dynamicProps
patchFlag : 标注动态内容类型，（注重更新过程）
shapeFlag: 标记组件形态 (teleport \ fragment) （注重初始化过程）
type: 标明节点类型

1、何时创建vnode ？
mount => createVnode => render(初始化) => patch更新
2、初始化流程和更新流程
（1）根据根节点开始进行递归patch， 然后去查找是是否是动态， children是否是text
mounteElement 创建元素
（2）renderComponentRoot
(3) 更新过程是静态节点直接跳过， 动态节点进行循环递归patch, 然后进行patchElement
(4)不带key (动静分离，patchFlag， shapeFlag, dynamicChildren会首先进行判断， 有多孩子才会今日patchUnKeyChildren )和 带 key(数组) 会进入 KEYED_FRAGMENT
V-FOR不会考虑dynamicChildren, 会进入 patchChildren

## 尽可能去找更新的部分， 主要是编译过程中的优化很十足