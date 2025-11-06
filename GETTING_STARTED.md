# 快速开始指南

欢迎使用您的新博客！以下是快速上手的步骤。

## 📋 前置要求

确保您已安装：
- Ruby 2.7+ 
- Bundler
- Git

## 🚀 本地运行

### 1. 安装依赖

```bash
bundle install
```

### 2. 启动本地服务器

```bash
bundle exec jekyll serve
```

或使用实时重载：

```bash
bundle exec jekyll serve --livereload
```

### 3. 访问网站

打开浏览器访问：`http://localhost:4000`

## ✍️ 创建新文章

### 方法一：手动创建

在 `_posts` 目录创建文件，命名格式：`YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: "我的新文章"
date: 2025-01-10 10:00:00 +0800
categories: [技术]
tags: [Jekyll, 博客]
excerpt: "这是文章摘要"
---

文章内容从这里开始...
```

### 方法二：使用命令（可选）

创建一个简单的脚本来生成文章模板：

```bash
#!/bin/bash
# 保存为 new-post.sh

TITLE=$1
DATE=$(date +%Y-%m-%d)
TIME=$(date +%H:%M:%S)
FILENAME="_posts/${DATE}-${TITLE}.md"

cat > $FILENAME << EOF
---
layout: post
title: "${TITLE}"
date: ${DATE} ${TIME} +0800
categories: []
tags: []
excerpt: ""
---

## 开始写作

在这里写下你的内容...
EOF

echo "文章已创建: $FILENAME"
```

使用方法：
```bash
chmod +x new-post.sh
./new-post.sh "my-new-post"
```

## 🎨 自定义配置

### 修改网站信息

编辑 `_config.yml`：

```yaml
title: 你的博客名称
description: 你的博客描述
author: 你的名字
email: your-email@example.com
```

### 修改导航菜单

在 `_config.yml` 中找到 `navigation` 部分：

```yaml
navigation:
  - title: 首页
    url: /
  - title: 文章
    url: /posts/
  - title: 分类
    url: /categories/
  - title: 标签
    url: /tags/
  - title: 关于
    url: /about/
```

### 修改颜色主题

编辑 `_sass/_variables.scss` 中的颜色变量：

```scss
:root {
  --primary-color: #6366f1;  // 主色调
  --accent-color: #ec4899;   // 强调色
  // ... 更多颜色
}
```

## 📝 写作技巧

### 使用代码高亮

```markdown
​```javascript
function hello() {
  console.log("Hello, World!");
}
​```
```

### 添加图片

```markdown
![图片描述](/assets/images/my-image.jpg)
```

### 创建表格

```markdown
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 内容1 | 内容2 | 内容3 |
```

### 添加引用

```markdown
> 这是一段引用文本
```

## 🚢 部署到 GitHub Pages

### 1. 创建 GitHub 仓库

仓库名称必须是：`yourusername.github.io`

### 2. 推送代码

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### 3. 启用 GitHub Pages

1. 进入仓库的 Settings
2. 找到 Pages 选项
3. Source 选择 GitHub Actions
4. 等待自动部署完成

### 4. 访问网站

几分钟后访问：`https://yourusername.github.io`

## 🔧 常见问题

### Q: 本地预览出错？

```bash
# 清除缓存
bundle exec jekyll clean

# 重新安装依赖
bundle install

# 重新启动
bundle exec jekyll serve
```

### Q: 修改后没有生效？

- 修改 `_config.yml` 后需要重启服务器
- 清除浏览器缓存
- 使用无痕模式测试

### Q: 如何更新依赖？

```bash
bundle update
```

## 📚 更多资源

- [Jekyll 官方文档](https://jekyllrb.com/docs/)
- [Markdown 语法](https://www.markdownguide.org/)
- [Liquid 模板语言](https://shopify.github.io/liquid/)
- [GitHub Pages 文档](https://docs.github.com/pages)

## 💡 下一步

1. ✅ 修改 `_config.yml` 中的个人信息
2. ✅ 编辑 `pages/about.md` 完善关于页面
3. ✅ 删除或修改示例文章
4. ✅ 创建你的第一篇文章
5. ✅ 添加网站图标到 `assets/images/favicon.png`
6. ✅ 推送到 GitHub 并部署

## 🎉 开始创作吧！

现在一切就绪，开始你的博客之旅吧！

如有问题，请查看 [README.md](README.md) 或提交 Issue。

---

祝写作愉快！✨
