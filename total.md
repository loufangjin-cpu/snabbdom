### 研究1：虚拟DOM如何被渲染函数（h函数）产生？ - 手写h函数
### 研究2：diff算法原理？ - 手写 diff 算法
### 研究3：虚拟DOM如何通过diff变为真正的DOM的 - 事实上，虚拟DOM变回真正的DOM，是涵盖在diff算法里面的

参考链接： https://blog.csdn.net/wanghuan1020/article/details/112506075

### h函数实现思路
    return vode DOM树结构

### diff 算法
 心得
  1、diff 算法确实是最小量更新，key 很重要，key 是这个节点的唯一标识，告诉 diff 算法，在更改前后它们是同一个 DOM 节点
  2、只有是同一个虚拟节点，才进行虚拟化比较，否则就是暴力删除旧的、插入新的。延伸问题：如何定义同一个虚拟节点？
  ### 答：选择器相同 且 key 相同
  3、只进行同层比较，不会进行跨层比较。即使是同一片虚拟节点，但是如果跨层了，那么 diff 算法也不会进行精细化比较。而是暴力删除旧的、然后插入新的

  // vue3 diff: https://blog.csdn.net/webyouxuan/article/details/108505807
  // 对比diff : https://juejin.cn/post/6919376064833667080#heading-9
