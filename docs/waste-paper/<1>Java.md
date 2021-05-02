# Java复习纲要

众所周知，Java准备要考试，但是不知道是哪天。编辑时间：2021-05-02 19:31:23。

我的目标是：能过就行！

## 先从去年的期末考试题目入手

> [桂林电子科技大学2018级JAVA-A卷](/file/2018级JAVA-A卷.pdf)

### 设计一能求解多种椎体体积的控制台程序

要求：求解圆锥、三棱锥。必须具备强大的可拓展性，未来可能需要求其他类型的椎体体积。请说明关键设计步骤。（可用UML图表示）

::: tip 关于
别弄那么多华丽胡哨的UML,认真写就好了，中文字多优美啊。

接口、抽象类至少得用一个，不然老师都不好给分。所以啊，说明题就得凑，就硬凑。
:::

这类描述体有六点，都得踩点答题

* 抽象类

设计一抽象类`Shape`表示平面几何形状，用来当作椎体的底，含有一抽象方法`double getArea()`。

* 继承类

设计一椎体类`Cone`，包含两个属性：`Shape bottomShaper`、`double height`，分别代表椎体底面形状和高度。

该椎体的构造方法为：`Cone(Shape bottomShape, double height)`

获取体积的方法为：`double getV() {return bottomShape.getArea() * height / 3.0;}`

* 实现抽象类的类

> 圆形

设计一`Circle`类，继承抽象类`Shape`，表示圆形。它继承抽象类`Shape`。

构造方法为：`Circle(double radius)`

基本属性为`radius`表示圆的半径，重写获取其面积的方法`getArea()`。

> 三角形

描述方法同上

* 利用代码举例

```java
Cone 圆锥 = new Cone(new Circle(3.0), 5); // 构建圆锥对象，底面半径为3,高为5
Cone 三棱锥 = new Cone(new Triangle(3, 4, 5), 6); // 描述....
double v1 = 圆锥.getV();
double v2 = 三棱锥.getV();
```

* 描述拓展性

若要求其他类型的椎体的体积，只需要定义表示其底部形状、且继承`Shape`的类，只需要在类的定义中重写`getArea`方法，
就可以像之前那样，求新的类型的椎体体积，不用修改其他任何代码。