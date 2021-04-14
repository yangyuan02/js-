#grid布局
## 学习的顺序
1. 九宫格布局.html
2. 移动端nav布局.html
## 名词解释
- 容器
    - 设置了display: grid 属性的被称之为属性
- 元素
    - 被容器包裹的称为元素

## 容器属性
- display: grid; 将容器变成grid布局
- grid-template-rows 将容器分为多少行
    - grid-template-rows:repeat(3, 1fr) 分为3行，且每个大小一样
        - <b>注意:此时就算元素设置了具体的宽度高度，划分的网格大小不变，只是元素宽度高度被设置了为定值(也适用于grid-template-columns)</b>
    - grid-template-rows: 100px 100px 100px 分为3个一样大的元素，且都是100px
- grid-template-columns 将容器分为多少列
    - grid-template-columns:repeat(3, 1fr) 分为3列，且每个大小一样
    - grid-template-columns: 100px 100px 100px 分为3个一样大的元素，且都是100px