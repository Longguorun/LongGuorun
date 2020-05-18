# HTML基础

#### web相关

- 浏览器内核：渲染引擎（rendering engine）和 JS引擎。常见的浏览器内核

1. Trident（IE内核）：IE、傲游、世界之窗浏览器、Avant、腾讯TT、猎豹安全浏览器、360极速浏览器、百度浏览器等。
2. Gecko（firefox）
3. webkit（Safari）：代表浏览器：傲游浏览器3、 Apple Safari (Win/Mac/iPhone/iPad)、Symbian手机浏览器、Android 默认浏览器
4. Chromium/bink（Chrome）
5. Presto（Opera）字符集

- 字符集

```html
<meta charset="UTF-8">
utf-8是目前最常用的字符集编码方式，常用的字符集编码方式还有gbk和gb2312。
gb2312 简单中文  包括6763个汉字
BIG5   繁体中文 港澳台等用
GBK包含全部中文字符    是GB2312的扩展，加入对繁体字的支持，兼容GB2312
UTF-8则包含全世界所有国家需要用到的字符
```

#### HTML5语法特性(相较于HTML4)

- ##### 文档类型,声明方法不同

html4

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
```

html5

```html
<!DOCTYPE html>
```

- ##### 标记省略

  1. 不允许写结束标记的元素：area、base、**br**、col、command、embed、hr、**img**、**input**、keygen、**link**、meta、param、source、track、wbr
  2. 可以省略结束标记的元素：**li**、**dt**、dd、p、rt、rp、optgroup、**option**、colgroup、**thead**、**tbody**、**tfoot**、**tr**、**td**、**th**
  3. 可以省略全部标记的元素：html、head、body、colgroup、**tbody**


- ##### 布尔值

  对于布尔属性(disabled,readonly,selected,checked等)，有如下几种设置方法

  ```html
  <!-- 1.只写属性,不写属性值,代表属性值为true -->
  <input type="checkbox" checked>
  <!-- 2.不写属性,代表属性值为默认false -->
  <input type="checkbox">
  <!-- 3.写属性和属性值,代表属性值为true -->
  <input type="checkbox" checked = "checked">
  <!-- 4.写属性,属性值为空,代表属性值为true -->
  <input type="checkbox" checked = "">
  ```


- ##### 属性值

  属性值可以加双引号，也可以加单引号。HTML5的改进特点：当属性值不包含空字符串、<、>、=、单引号、双引号、等字符时，属性值两边的引号可省去

  ```html
  <input type="text">
  <input type=text>
  ```

#### 常用标签

|  标签类型   |  标签名   |            标签             | 使用说明                                     |
| :-----: | :----: | :-----------------------: | ---------------------------------------- |
|  排版标签   |  标题标签  |       <hN>标题文本<hN>        | N为数字1~5                                  |
|         |  段落标签  |        <p>文本内容</p>        |                                          |
|         | 水平线标签  |          <hr />           | 单标签                                      |
|         |  换行标签  |          <br />           | 单标签                                      |
|         | div标签  |        <div></div>        | 拥有块特性                                    |
|         | span标签 |       <span></span>       | 拥有行特性                                    |
| 文本格式化标签 |  加粗标签  |          <b></b>          |                                          |
|         |  斜体标签  |          <i></i>          |                                          |
|         | 删除线标签  |          <s></s>          |                                          |
|         | 下划线标签  |          <u></u>          |                                          |
| 插入文件标签  |  图片标签  |      <img  src=" "/>      | 单标签，src为文件地址                             |
|         |  链接标签  | <a href="" target=""></a> | href中添加链接地址；<br>target中添加目标弹出方式：self（默认），blank（新窗口中打开） |
|         |        |                           |                                          |
|         |        |                           |                                          |
|         |        |                           |                                          |
|         |        |                           |                                          |
|         |        |                           |                                          |
|         |        |                           |                                          |
|         |        |                           |                                          |
|         |        |                           |                                          |
|         |        |                           |                                          |
|         |        |                           |                                          |
|         |        |                           |                                          |
|         |        |                           |                                          |
|         |        |                           |                                          |
|         |        |                           |                                          |
|         |        |                           |                                          |
|         |        |                           |                                          |
|         |        |                           |                                          |