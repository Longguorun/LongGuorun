### 变量

#### 变量声明

- let

  ```javascript
  let与var声明的区别
  1.作用域：			var作用域为当前函数的整个函数作用域；	let为当前的块作用域（花括号内）；
  2.可作window的属性：	var可以；							let不行
  3.重复声明：			var可以；							let不行
  4.变量提升（预解析）：var可以；							let不行
  	
  在for循环中体现的非常明显
  for (var i = 0; i < 10; i++) {
    setTimeout(function(){
      console.log(i);
    })
  }
  // 输出十个 10
  for (let j = 0; j < 10; j++) {
    setTimeout(function(){
      console.log(j);
    })
  }
  // 输出 0123456789
  ```


- const：声明一个只读变量，声明时就必须赋值，且赋值后不可被更改

  特殊：

  ```
  暂时性死区，若块作用域内存在let或const，则声明的变量在声明之前不能被调用
  var PI = "a";
  if(true){
    console.log(PI);  // ReferenceError: PI is not defined
    const PI = "3.1415926";
  }
  ```

#### 解构赋值

- 数组解构赋值

  ```javascript
  //基本
  let [a, b, c] = [1, 2, 3];

  //嵌套
  let [a, [[b], c]] = [1, [[2], 3]];

  //可忽略
  let [a, , b] = [1, 2, 3];

  //不完全结构
  let [a = 1, b] = [];

  //剩余运算符
  let [a, ...b] = [1, 2, 3];
  //a = 1
  //b = [2, 3]

  //字符串
  let [a, b, c, d, e] = 'hello';

  //结构默认值：默认值在赋值时undefined时生效
  let [a = 2] = [undefined]; // a = 2
  ```


- 对象解构赋值

  ```javascript
  //基本
  let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
  let { baz : foo } = { baz : 'ddd' };

  //可嵌套可略
  let obj = {p: ['hello', {y: 'world'}] };
  let {p: [x, { y }] } = obj;

  let obj = {p: ['hello', {y: 'world'}] };
  let {p: [x, {  }] } = obj;
  ```


  //不完全解构
  let obj = {p: [{y: 'world'}] };
  let {p: [{ y }, x ] } = obj;
  // x = undefined
  // y = 'world'

  //剩余运算符
  let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
  // a = 10
  // b = 20
  // rest = {c: 30, d: 40}

  //解构默认值：默认值在赋值时undefined时生效
  let {a = 10, b = 5} = {a: 3};
  // a = 3; b = 5;
  let {a: aa = 10, b: bb = 5} = {a: 3}; //设置别名后原来的名字无效
  // aa = 3; bb = 5;
  ```

#### 字符串

#### 子串的识别

- **includes()**：返回布尔值，判断是否找到参数字符串

- **startsWith()**：返回布尔值，判断参数字符串是否在原字符串的头部

- **endsWith()**：返回布尔值，判断参数字符串是否在原字符串的尾部

  ```javascript
  let string = "apple,banana,orange";
  string.includes("banana");     // true
  string.startsWith("apple");    // true
  string.endsWith("apple");      // false
  string.startsWith("banana",6)  // true
  ```

#### 模板字符串

```javascript
let name = "Mike";
let age = 27;
let info = `My Name is ${name},I am ${age+1} years old next year.`
console.log(info);
```
### 类

在ES6中，class (类)作为对象的模板被引入，可以通过 class 关键字定义类

#### 声明方法

- 与普通定义构造函数的区别

```javascript
以下两种声明构造函数方法等价

function Sayhi(x,y){
  this.x = x;
  this.y = y;
}
Sayhi.prototype.helo() = function(){
  console.log(this.x+this.y);
}

class Sayhi {
  constructor(x,y) {
      this.x = x;
      this.y = y;
  }
  helo() {
    console.log(this.x+this.y);
  }
}
```

- 注意要点
  1. 不可重复声明
  2. 类定义不会被提升，这意味着，必须在访问前对类进行定义，否则就会报错

#### 属性

- 静态属性

  class 本身的属性，即直接定义在类内部的属性（ Class.propname ），不需要实例化。 ES6 中规定，Class 内部只有静态方法，没有静态属性。

  ```javascript
  class Sayhi {
    static a = function(){
      console.log('hello~');
    }
  }

  静态方法定义后不可被实例化的对象调用，只能经由构造函数直接调用，如
  Sayhi();
  ```


- 公共属性

  定义在.prototype中的属性


- 实例属性

  定义在实例对象（ this ）上的属性

  ```javascript
  //公共属性
  class Example{}
  Example.prototype.a = 2;
  //实例属性
  class Example {
      a = 2;
      constructor () {
          console.log(this.a);
      }
  }
  ```


- name属性

  返回跟在 class 后的类名

  ```javascript
  let Example=class Exam {
      constructor(a) {
          this.a = a;
      }
  }
  console.log(Example.name); // Exam class的实际命名
   
  let Example=class {
      constructor(a) {
          this.a = a;
      }
  }
  console.log(Example.name); // Example  若以匿名方式进行的声明，则name属性为后定义的名称
  ```

#### 方法

- constructor

  类的默认方法，创建类的实例化对象时调用

  ```javascript
  返回对象：默认为实例对象this
  class Test {
      constructor(){
          // 默认返回实例对象 this
      }
  }
  ```


- 静态方法

  ```javascript
  class Example{
      static sum(a, b) {
          console.log(a+b);
      }
  }
  Example.sum(1, 2); // 3
  ```


- 原型方法

  ```javascript
  class Example {
      sum(a, b) {
          console.log(a + b);
      }
  }
  let exam = new Example();
  exam.sum(1, 2); // 3
  ```


- 实例方法

  ```javascript
  class Example {
      constructor() {
          this.sum = (a, b) => {
              console.log(a + b);
          }
      }
  }
  ```

#### 继承

class Child extends Father { ... }

```javascript
class Point {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
	toString() {
		console.log(this);
	};
}	
class PP extends Point {
	constructor(x,y) {
	// this.x = 1;
	super();	
	}
}
var p = new PP(1,2);
console.log(p);
```

- super

  **子类 constructor 方法中必须有 super ，且必须出现在 this 之前，可加参数如super(x,y)**

  **调用父类构造函数,只能出现在子类的构造函数**

  **调用父类方法, super 作为对象，在普通方法中，指向父类的原型对象，在静态方法中，指向父类**

```javascript
class Father {
    constructor() {}
}
class Child extends Father {
    constructor() {
      super();
    }
}
let test = new Child(); 

class Child2 extends Father {
    constructor(){
        super();
        // 调用父类普通方法
        console.log(super.test()); // 0
    }
    static test3(){
        // 调用父类静态方法
        return super.test1+2;
    }
}
Child2.test3(); // 3
```

