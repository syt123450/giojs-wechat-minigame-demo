<p align="center"><a href="https://giojs.org" target="_blank"><img width="100" src="https://raw.githack.com/syt123450/giojs-weixin-minigame-demo/master/assets/logo.png" alt="Gio logo"></a></p>

<h1 align="center">Gio.js - 微信小游戏使用示例</h1>
<p align="center">原项目: <a href="https://github.com/syt123450/giojs">giojs</a></p>

<!-- [START screenshot] -->
<p align="center">
  <img src="https://raw.githack.com/syt123450/giojs-weixin-minigame-demo/master/assets/wechat_giojs.gif"/>
</p>
<!-- [END screenshot] -->

## 目录

- [基本说明](#basic)
- [源码目录介绍](#source)
- [Gio.js使用方法](#usage)
- [证书](#license)
- [感谢](#thanks)

## <div id="basic">基本说明</div>

这个项目展示了如何在小游戏中使用Gio.js来创建3D数据可视化模型。clone本项目并在本地用[微信开发者工具](https://developers.weixin.qq.com/minigame/dev/devtools/devtools.html)打开，即可直接查看效果。

## <div id="source">源码目录介绍</div>
```
/
├── assets                                // 在readme中使用的图片
├── js
│   ├── symbol.js                         // ES6 Symbol简易兼容
│   ├── three.wx.js                       // 修改后的 three.js，未压缩，在开发环境使用
│   ├── gio.wx.js                         // Gio lib文件，在开发环境和three.wx.js配合使用，需要放在three.wx.js同级目录
│   ├── three.wx.min.js                   // three.wx.js的压缩文件，在生产环境中使用
│   ├── gio.wx.min.js                     // gio.wx.js的压缩文件，在生产环境和three.wx.min.js配合使用，需要放在three.wx.min.js同级目录
│   └── weapp-adapter.js                  // 小游戏适配器
├── data                                  
│   ├── sampleData.js                     // demo中使用的数据文件
├── LICENSE                               // 证书文件
├── README.md                             // read me
├── game.js                               // 小游戏入口文件
├── game.json                             // 小游戏配置文件
└── project.config.json                   // 微信小程序项目配置文件
```

## <div id="usage">Gio.js使用方法</div>

### 安装

Gio.js提供两种在微信小游戏中的安装方式

- 开发环境，方便debug

    在项目中同时引入three.wx.js和gio.wx.js，并将两文件置于同级目录

- 生产环境，文件体积更小

    在项目中同时引入three.wx.min.js和gio.wx.min.js，并将两文件置于同级目录

说明：最新three.wx.js, three.wx.min.js, gio.wx.js, gio.wx.min.js可以giojs的[build目录](https://github.com/syt123450/giojs/tree/master/build)下取得，或通过npm，yarn等包管理工具下载giojs，在下载文件的build文件夹下取得。因为微信小游戏并不是一个完整的web环境，不能直接使用web版的three.js和gio.js，从eastecho的[这篇文章](https://www.indienova.com/indie-game-development/run-threejs-on-wechat-game-platform/)中可以了解更多有关这方面的信息。

### 使用

Gio.js的使用方法，具体代码在本项目的[game.js](https://github.com/syt123450/giojs-weixin-minigame-demo/blob/master/game.js)文件中。在微信小游戏中，可以对3D地球进行配置，配置方法与网页版的Gio.js相同，了解更多有关这方面的API信息，查看Gio.js [API部分](https://github.com/syt123450/giojs#api-list)。

```
import './js/weapp-adapter'
import './js/symbol'

// 获取data
var data = require('./data/sampleData.js');

// 在开发环境中引入gio.wx.js
var Gio = require('./js/gio.wx.js');

// 在生产环境中引入gio.wx.min.js，不同环境引入不同的gio.js版本，只需要引入一个版本即可运行，不许要重复引入
// var Gio = require('./js/gio.wx.min.js');

// 创建Gio Controller，并将需要绘制的canvas传入
var controller = new Gio.Controller(canvas);

// 添加数据
controller.addData(data);

// 初始化并显示
controller.init();
```

## <div id="license">证书</div>
[Apache-2.0](https://github.com/syt123450/giojs-weixin-minigame-demo/blob/master/LICENSE)

## <div id="thanks">感谢</div>

特别感谢[@TxOne](https://github.com/TxOne)的技术建议与支持