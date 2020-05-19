## CSS基础

### 关于CSS

Cascading Style Sheets：层叠样式表

### CSS引入

1. 内部样式

   ```html
   <head>
   <style type="text/CSS">
       选择器 {属性1:属性值1; 属性2:属性值2; 属性3:属性值3;}
   </style>
   </head>
   ```

2. 行内样式。标签内添加style属性（不推荐）

   ```html
   <标签名 style="属性1:属性值1; 属性2:属性值2; 属性3:属性值3;"> 内容 </标签名>
   ```

3. 外链样式（最推荐）

   ```html
   <head>
     <link href="CSS文件的路径" type="text/CSS" rel="stylesheet" />
   </head>
   ```

### CSS样式规则

![gz](./img/gz.png)

### 属性

#### 字体样式属性

- font-size：字号大小，默认使用px（像素）作为单位

- font-family：字体属性

  - 可以同时指定多个字体，中间以逗号隔开，表示如果浏览器不支持第一个字体，则会尝试下一个，直到找到合适的字体


-    中文字体需加英文状态下的引号，英文字体不需加引号。当需要设置英文字体时，英文字体名必须位于中文字体名之前

-    font-weight：字体粗细。可用属性值：normal（400）、bold（700）、bolder、lighter、100~900（100的整数倍）

-    font-style：字体风格。可用属性值：normal标、italic斜体、oblique倾斜

-    **font综合设置字体样式**

     ```css
                 选择器{font: font-style  font-weight  font-size/line-height  font-family;}
                 *必须保留font-size和font-family属性
     ```

#### 外观样式

- color：文本颜色，属性值有三种方法

  - ​1）	与设定的英文颜色，red、pink、yellow等

    - ​2）十六进制颜色，如#000000黑色（简写为#000）、#FFFFFF白色（简写为#FFF）

    - ​3)RGB颜色，RGB分别填写0-255的数字。另有带透明程度的写法rgba();

  ```css
  rgb(255,255,0);
  rgba(255,255,255,0.4);
  ```

- line-height：行间距

- text-align：水平对齐方式。可用属性值：left、center、right

- text-indent：首行缩进。em为单位，1em为一个汉字的宽度

- letter-spacing：字间距

- word-spacing：单词间距。对中文无效

- text-shadow：文字阴影。默认右、下为正

  ```css
  text-shadow:水平位置 垂直位置 模糊距离 阴影颜色;
  ```

### 选择器

#### 选择器分类

- 标签选择器（元素选择器）
- 类选择器
- ID选择器
- 伪类选择器：伪类选择器用于向某些选择器添加特殊的效果。
  - 链接伪类选择器
    - :link      /* 未访问的链接 */
    - :visited   /* 已访问的链接 */
    - :hover     /* 鼠标移动到链接上 */
    - :active    /* 选定的链接 */

  - 结构伪类选择器
    - :first-child :选取属于其父元素的首个子元素的指定选择器
    - :last-child :选取属于其父元素的最后一个子元素的指定选择器
    - :nth-child(n) ： 匹配属于其父元素的第 N 个子元素，不论元素的类型

  - 目标伪类选择器

    -  :target目标伪类选择器 :选择器可用于选取当前活动的目标元素。只有在目标为a标签并指向另一个标签时才生效

    ```html
      css样式
           #big-bam-boom:target {
               color: red;
           }
      html
      	<h1 id="big-bam-boom">Kaplow!</h1>
      	<a href="#big-bam-boom">Mission Control, we're a little parched up here.</a>
    ```

#### 复合选择器

- 交集选择器：既是...又是...的意思，两个选择器之间**无任何字符**。不常用

  ```css
  .one.two {color: #F00;}
  ```


- 并集选择器：使用**逗号**分隔

  ```css
  .one, p , #test {color: #F00;}
  ```


- 后代选择器：外层标签写前面，内层标签写后面，使用**空格**分开

  ```css
  .one p #test {color: #F00;}
  ```


- 父子选择器：直属父子关系的选择器，使用**>**分开

  ```css
  .one >p >#test {color: #F00;}
  ```


- 属性选择器（不常用）

  ```css
  div[class^=font] { /*  class^=font 表示 font 开始位置就行了 */
  			color: pink;
  		}
  div[class$=footer] { /*  class$=footer 表示 footer 结束位置就行了 */
  			color: skyblue;
  		}
  div[class*=tao] { /* class*=tao  *=  表示tao 在任意位置都可以 */
  			color: green;
  		}
  ```

  ```html
  <div class="font12">属性选择器</div>
  <div class="font12">属性选择器</div>
  <div class="font24">属性选择器</div>
  <div class="font24">属性选择器</div>
  <div class="font24">属性选择器</div>
  <div class="24font">属性选择器123</div>
  <div class="sub-footer">属性选择器footer</div>
  <div class="jd-footer">属性选择器footer</div>
  <div class="news-tao-nav">属性选择器</div>
  <div class="news-tao-header">属性选择器</div>
  <div class="tao-header">属性选择器</div>
  ```


- 伪元素选择器（**CSS3**中属性）

1. E::first-letter文本的第一个单词或字（如中文、日文、韩文等）

2. E::first-line 文本第一行

3. E::selection 可改变选中文本的样式

4. E::before和E::after   在E元素内部的开始位置和结束位创建一个元素，该元素为**行内元素**，且必须要结合content属性使用。

   ```css
   p::first-letter {
     font-size: 20px;
     color: hotpink;
   }

   /* 首行特殊样式 */
   p::first-line {
     color: skyblue;
   }

   p::selection {
     /* font-size: 50px; */
     color: orange;
   }

   div::befor {
     content:"开始";
   }
   div::after {
     content:"结束";
   }
   ```

### CSS三大特性

```
总结：权重是优先级的算法，层叠是优先级的表现
```

#### 层叠性

样式冲突，以后一个样式为准。“内联属性”——>“写在 style标签里”——>“外部链接”：以写在文件上代码行越靠下的为准

#### 继承性

子元素会继承父元素的样式特性

- 不可继承的：

  **display**、**margin**、**border**、**padding**、**background**、**height**、min-height、max-height、**width**、min-width、max-width、**overflow**、**position**、**left**、**right**、**top**、**bottom**、**z-index**、**float**、**clear**、table-layout、vertical-align、page-break-after、page-bread-before和unicode-bidi。 


- 所有元素可继承：visibility和cursor。 


- **内联元素可继承：主要时字体类样式和外观类样式**

  **letter-spacing、word-spacing、white-space、line-height、color、font、font-family、font-size、font-style、font-variant、font-weight、text-decoration、text-transform、direction。** 

- 终端块状元素可继承：text-indent和text-align。 



- 列表元素可继承：list-style、list-style-type、list-style-position、list-style-image。


#### 特殊性（优先级）

​	子元素继承来的样式权重为0

| 继承或者* 的贡献值      | 0,0,0,0 |
| --------------- | ------- |
| 每个元素（标签）贡献值为    | 0,0,0,1 |
| 每个类，伪类贡献值为      | 0,0,1,0 |
| 每个ID贡献值为        | 0,1,0,0 |
| 每个行内样式贡献值       | 1,0,0,0 |
| 每个!important贡献值 | ∞ 无穷大   |

#### 权重精华练习（重要）

```html
	<head>
		<meta http-equiv="content-type" content="text/html;charset=utf-8" />
		<meta name="keywords" content="关键词1,关键词2,关键词3" />
		<meta name="description" content="对网站的描述" />
		<title>第1题</title>
		<style type="text/css">
			#father #son{  
				color:blue;
			}						0200--正确答案
			#father p.c2{
				color:black;
			}						0111
			div.c1 p.c2{
				color:red;
			}						0022
			#father{
				color:green !important;  /* 继承的权重为0 */
			}						0000
		</style>
	</head>
	<body>
		<div id="father" class="c1">
			<p id="son" class="c2">
				试问这行字体是什么颜色的？
			</p>
		</div>
	</body>
```

```html
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>Document</title>
	<style type="text/css">
		div div div div div div div div div div div div{  
			color:red;			0，0，0，11
		}
		.me{ 
			color:blue;			0010---正确答案
		}
	</style>
</head>
<body>
	<div>
		<div>
			<div>
				<div>
					<div>
						<div>
							<div>
								<div>
									<div>
										<div>
											<div>
												<div class="me">试问这行文字是什么颜色的</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
```

```html
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>Document</title>
	<style type="text/css">
		.c1 .c2 div{  
			color: blue;			0021
		}
		div #box3{
			color:green;			0101
		}
		#box1 div{
			color:yellow;			0101----正确答案，相同时就近
		}
	</style>
</head>
<body>
	<div id="box1" class="c1">
		<div id="box2" class="c2">
			<div id="box3" class="c3">
				试问这行文字是什么颜色的
			</div>
		</div>
	</div>
</body>
```
