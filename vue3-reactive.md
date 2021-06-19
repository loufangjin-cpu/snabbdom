## render => 安装渲染函数的副作用： setupRenderEffect

***** 由于render中会对数据进行访问， 此时就会进行数据的依赖收集
在视图中访问数据，此时对应的数据就会和setupRenderEffect建立一个映射关系。

setupRenderEffect何时会调用？
createApp => createAppApi => render渲染传入vnode到指定容器中 => patch => processComponent 初始化组件 => mountComponent挂在组件 => setupComponent 安装组件（此时组件准备就绪，已经proxy ） => setupRenderEffect 副作用 （建立依赖关系）
updateComponent 对标 setupRenderEffect

## setupRenderEffect => effect(fn) 将传入fn和它内部调用的响应式数据之间产生一个映射关系
rootComponent.render() 会访问内部proxy数据
## renderComponentRoot 执行当前组件的渲染函数（template 编译或者手写render而来）

## 先响应在收集依赖？？
setupStatefulComponent 中进行响应处理（reactive）， 此时就可以知道那些数据可以拦截，
然后setupRenderEffect中当执行render的时候，就可以知道哪些数据被访问了，
这个时候就可以把effect副作用函数和当前的响应式数据建立映射关系(effect)。后续数据发生改变
，内部副作用函数重新执行。


### 手写proxy
 1、其实proxy是一个浅层拦截， 所以对象和数组需要递归，好处时， 如果用户不访问内部深度元素
 ，就不需要进行返回内部的数据。
 2、数组操纵的优化
 3、手写的代码， effect中没与包裹的数据 ， 后续去更改是否会触发更改？？ 应该不更改. 但是vue3中不会出现这样问题