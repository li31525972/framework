# 性能优化

## 图片优化

### 图片类型基础知识
#### JPEG
- 针对彩色照片而广泛使用的有损压缩图形格式
- 适合：颜色丰富的图片、彩色图大焦点图、结构不规则的图形
- 不适合：线条、文字、图标图形，因为它的压缩算法对这种类型的图片不太适合，并且不支持透明度

#### PNG
- 便携式网络图形，一种无损压缩的位图图形格式，支持索引、灰度、RGB三种颜色方案以及 alpha 通道等特性
- 适合：纯色、透明、线条绘图、图标，边缘清晰，有大块相同颜色区域，颜色数较少但需要半透明
- 不适合：由于是无损压缩，彩色图形体积太大，所以不太适合

#### GIF
- 图像互换格式是一种位图图形文件格式，以8位色(即256种颜色)重现真彩色的图像，采用LAW压缩算法进行编码
- 适合：动画图标
- 不适合：每个像素只有8比特，不适合存储彩色照片

### 用工具进行图片压缩

#### 压缩PNG
```
npm install node-pngquant-native
压缩过后体积大约能缩减百分之七十
```
[官网地址](https://www.npmjs.com/package/node-pngquant-native)

#### 压缩JPEG
```
npm install -g jpegtran 
使用方法：jpegtran -copy none -optimize -outfile out.jpeg in.jpeg
压缩过后体积大约能缩减百分之十
```
[官网地址](https://www.npmjs.com/package/jpegtran)

#### 压缩GIF
```
npm install gifsicle
使用方式：
    1. gifsicle --optimize=3 -o out.gif in.gif
    2. gifsicle --optimize=3 --copy-transparency -o out.gif in.gif  // 将透明部分截去
    
压缩过后体积大约能缩减百分之十
```
[官网地址](https://www.npmjs.com/package/gifsicle)


### 图片尺寸随网络环境变化
- 在不同的网络环境让用户看到不同尺寸或者不同像素的图片，可以节省用户的流量和图片的加载速度
- 实现方式：在图片的地址上面添加不同的参数

### 响应式图片
#### JavaScript绑定事件检测窗口大小

#### CSS媒体查询
```css
@media screen and (max-width:640px) {
    .my-image {
        width: 640px;
    }
}
```

#### img标签属性
```html
<!-- 通过 srcset 属性可以根据设备的像素比选择图片 不支持 srcset 默认显示src -->
<img srcset="img-320.jpg, img-640.jpg, img-960.jpg" src="img-960.jpg" alt="">
```

### 逐步加载图片
1. 使用统一占位符图片(比如APP的logo)
2. 使用 LQIP(低质量图像占位符)`npm install lqip`
3. 使用 SQIP(基于SVG的图像占位符)`npm install sqip`

### 图片其它优化方式
1. 字体图标代替图片
2. 将图片转换为base64
3. 采用雪碧图

## HTML优化
- 减少html的嵌套、减少dom节点数
- 减少无意义的代码
- 删除http或者https, 删除多余的空格、换行符、注释(可以通过工具来做)
- 省略冗余标签和属性，使用相对路径URL
- css放在页面顶部，JavaScript放在页面底部
- 设置favicon.ico, 如果没有控制台会报错，另外loading的时候也是没有网站图标的
- 增加首屏必要的css和js, 比如：骨架屏、图片等，主要提升用户体验

## CSS优化
### 谨慎使用`expensive`属性
- 如：`nth-child`伪类，`position:fixed absolute`定位等(造成页面的重排重绘消耗浏览器性能)

### 减少样式层级
- 最好不要超过3个以上的层级(现在的客户端层级过深对性能的影响可以忽略不计)

### 尽量避免使用占用过多CPU和内存的属性
- 如：`text-indent: -999999px`

### 避免使用耗电量大的属性
- 如css3的 `3d transform transtion opacity`

### 尽量避免使用css表达式
- 如计算宽度、高度等`width: calc(100% - 100px)`

### 其它
- 避免使用通配符选择器`*`
- 避免使用类正则的属性选择器`!= *= &= ^=`

## JavaScript优化
### 缓存优化



## 研发开发流程优化
























