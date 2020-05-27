### 检测网络状态

```javascript
window.online();
window.offline();	//返回布尔值
```

### 全屏

原则上，所有元素都可以全屏

```javascript
开启全屏
	node.webkitRequestFullScreen();
关闭全屏
	document.webkitCancelFullScreen();
检测是否全屏
	document.fullScreen();
```

### 上传文件的获取

自有对象FileReader

```javascript
上传文件
	<input type='file' multiple id='f'>
上传文件的获取
	var f = document.getElementById('f');
	f.onchange = function(){
      var reader = new FileReader;
      reader.readAsDaraURL(this.files[0]);
      reader.onload = function(){
        xxx = reader.result
      }
	}
```

### 拖拽

在标签中设置 draggable = true;

```javascript
源对象事件
	ondragstart		ondrag 		ondargend
拖动进入目标事件
	ondragenter		ondragover 	ondragleave 	ondrop
```

### WEB存储

```javascript
window.sessionStorage	5M；关闭浏览器失效；同一浏览器同一页面可共享
window.localStorage		20M；永久生效；同意浏览器可共享
方法：
	setItem("key",value);
	getItem("key");
	removeItem("key");
	clear();		清空所有，慎用！
```

### 多媒体

方法：load()、play()、pause()

属性：currentSrc、currentTime、duration

事件：oncanplay，  ontimeupdate，onended 等