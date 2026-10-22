# Echo，下班了。

一个可以拆开的微缩房间。打开包裹后，可以关掉电脑、打印午饭提案、让桌上长出小城、听一段旋律、翻电影票，以及保存一张下班卡。

## 本地运行

需要 Node.js 20.19+ 或 22.12+。

```sh
npm ci
npm run dev
```

打开 http://127.0.0.1:8767 。源代码位于 `app/src`；所有模型和纸面纹理由代码生成，无需模型、图片或音频服务。

## 发布

```sh
npm run publish:static
```

将 `index.html` 和 `assets/` 连同源代码一起提交。构建结果已放在仓库根目录，Cloudflare Pages 继续使用空构建命令和根输出目录。资源使用相对路径，兼容现有 GitHub Pages 项目路径；原有部署工作流未变动。

- Cloudflare Pages: https://echo-anomaly.pages.dev/
- 不需要后端、API Key 或付费服务。
- 探索进度和卡片名字只保存在访问者自己的浏览器。
- 声音默认关闭，旋律由浏览器现场合成。
- 支持手机菜单、键盘操作和系统减少动态效果偏好；无 WebGL 时仍可使用物件菜单。

## 开源组件

React、Three.js、React Three Fiber / Drei、GSAP、Phosphor Icons。许可说明见 `THIRD_PARTY_NOTICES.md` 和 `licenses/`；完整依赖版本记录在 `package-lock.json`。场景、文案与交互为本项目实现，未引入私人聊天导出文件。
