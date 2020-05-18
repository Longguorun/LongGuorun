# HTML基础

#### 1.web相关

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

#### 2.HTML5语法特性(相较于HTML4)

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

#### 3.常用标签

##### 3.1排版标签

- 标题标签

  ```html
  <hn>   标题文本   </hn>
  ```

- 段落标签

  ```html
  <p>  文本内容  </p>
  ```

- 水平线标签

  ```html
  <hr />是单标签
  ```

- 换行标签

  ```html
  <br />
  ```

- div标签

  ```html
  <div> 这是头部 </div>    
  ```

- span标签

  ```html
  <span>今日价格</span>
  ```

##### 3.2文本格式化标签

- 斜体标签

  ```html
  <i></i>
  ```

- 加粗标签

  ```html
  <b></b>
  ```

- 删除线标签

  ```html
  <s></s>
  ```

- 下划线标签

  ```html
  <u></u>
  ```

##### 3.3插入文件标签

- 图片标签

  ```html
  <img src="图像URL" />
  ```

- 链接标签

  ```html
  <a href="跳转目标" target="目标窗口的弹出方式">文本或图像</a>
  ```

- 多媒体标签

  ```html
  <embed src="http://player.youku.com/player.php/sid/XMTI4MzM2MDIwOA==/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
  ```

- 音乐标签

  ```html
  <audio></audio>方法上同
  ```

- 视频标签

  ```html
  <video></video>方法上同
  ```

##### 3.4列表标签

- 无序列表（最常用）

  ```html
  <ul>
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
    ......
  </ul>
  ```


- 有序列表（较少用）

  ```html
  <ol>
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
    ......
  </ol>
  ```


- 自定义列表（较少用）

  ```html
  <dl>
    <dt>名词1</dt>
    <dd>名词1解释1</dd>
    <dd>名词1解释2</dd>
    ...
    <dt>名词2</dt>
    <dd>名词2解释1</dd>
    <dd>名词2解释2</dd>
    ...
  </dl>
  ```

##### 3.5表格标签

合并单元格：跨行合并rowspan；跨列合并colspan

```html
<table>
  <thead>
  	<tr>
    	<td>单元格内的文字</td>
    ...
 	</tr>  
  </thead>
  <tbodt>
  	<tr>
  	  <td>单元格内的文字</td>
  	  ...
 	 </tr>
	  ...  
  </tbody>
</table>
```

##### 3.6表单标签（重要）

- input控件，单标签

  各属性值的说明：

  1. type：表单的类型。常用的有：text文本输入框、password、radio单选输入框、checkbox多选输入框、button、submit、reset、image图像形式的提交按钮、file文件域
  2. name：控件的名称
  3.  value：默认文本值或用户输入的文本值
  4. size：在页面中的显示宽度
  5. checked：默认被选中的项或用户选中的项
  6. maxlength：控件允许输入的最大字符个数

  ```html
  <input type="" name="" value="" size="" checked="" maxlength="" />
  ```

- textarea控件（文本域）

  ```html
  <textarea cols="每行中的字符数" rows="显示的行数">
    文本内容
  </textarea>
  ```

- 下拉菜单

  ```html
  <select>
    <option>选项1</option>
    <option>选项2</option>
    <option>选项3</option>
    ...
  </select>
  ```

- 表单域（Ajax中常用）

  ```html
  <form action="url地址" method="提交方式" name="表单名称">
    各种表单控件
  </form>
  ```

  ​