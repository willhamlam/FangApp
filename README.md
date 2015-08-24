####Slider Template

**项目文件**
```
--app
  |--css
  |--js
  |--index.html
--dist
  |--style
  |--script
  |--index.html
--img
--.gitignore
--deploy.hs
--gulpfile.js
--package.json
--README.md
```
**项目主内容**

放置于`/app`文件下面，`/app/index.html`为slider主要文件。
因`/dist`为上线文件，则图片文件夹放置于主目录中

**上线部署**
```php
//安装package.json中所需要的gulp文件
npm install
//压缩至 dist 文件夹中
gulp build
```
上线文件为`/dist`