---
layout: post
title: "Jekyll 博客搭建指南"
date: 2025-01-05 14:30:00 +0800
categories: [技术, 教程]
tags: [Jekyll, GitHub Pages, 博客]
excerpt: "详细介绍如何使用 Jekyll 和 GitHub Pages 搭建个人博客"
---

## 为什么选择 Jekyll？

Jekyll 是一个静态网站生成器，特别适合搭建博客。它有以下优势：

- ✅ **简单易用**：使用 Markdown 写作，无需数据库
- ✅ **免费托管**：GitHub Pages 提供免费托管
- ✅ **高度可定制**：完全控制网站的外观和功能
- ✅ **快速安全**：静态网站，加载快速且安全
- ✅ **版本控制**：使用 Git 管理内容

## 环境准备

### 安装 Ruby

Jekyll 基于 Ruby，首先需要安装 Ruby 环境：

```bash
# macOS (使用 Homebrew)
brew install ruby

# Ubuntu/Debian
sudo apt-get install ruby-full

# 验证安装
ruby -v
gem -v
```

### 安装 Jekyll 和 Bundler

```bash
gem install jekyll bundler
```

## 创建博客

### 1. 初始化项目

```bash
# 创建新的 Jekyll 站点
jekyll new my-blog

# 进入项目目录
cd my-blog

# 本地预览
bundle exec jekyll serve
```

访问 `http://localhost:4000` 即可看到你的博客。

### 2. 项目结构

```
my-blog/
├── _config.yml      # 配置文件
├── _posts/          # 博客文章
├── _layouts/        # 页面布局
├── _includes/       # 可复用组件
├── _sass/           # 样式文件
├── assets/          # 静态资源
├── pages/           # 独立页面
└── index.md         # 首页
```

### 3. 配置文件

编辑 `_config.yml`：

```yaml
title: 我的博客
description: 分享技术与生活
author: Your Name
email: your-email@example.com
url: "https://yourusername.github.io"

# 构建设置
markdown: kramdown
theme: minima
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag
```

## 写作流程

### 创建文章

在 `_posts` 目录下创建文件，命名格式为 `YYYY-MM-DD-title.md`：

```markdown
---
layout: post
title: "文章标题"
date: 2025-01-05 14:30:00 +0800
categories: [分类1, 分类2]
tags: [标签1, 标签2]
---

文章内容...
```

### Markdown 语法

Jekyll 支持完整的 Markdown 语法：

```markdown
# 一级标题
## 二级标题

**粗体** *斜体* ~~删除线~~

- 无序列表
1. 有序列表

[链接](https://example.com)
![图片](path/to/image.jpg)

> 引用文本

`行内代码`

​```language
代码块
​```
```

## 部署到 GitHub Pages

### 1. 创建仓库

在 GitHub 上创建名为 `username.github.io` 的仓库。

### 2. 推送代码

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

### 3. 配置 GitHub Pages

1. 进入仓库的 Settings
2. 找到 Pages 选项
3. Source 选择 `main` 分支
4. 点击 Save

几分钟后，你的博客就会在 `https://username.github.io` 上线！

## 进阶技巧

### 自定义域名

1. 在仓库根目录创建 `CNAME` 文件
2. 写入你的域名：`blog.example.com`
3. 在域名提供商处添加 DNS 记录

### 添加评论系统

可以集成第三方评论系统：

- **Giscus**：基于 GitHub Discussions
- **Utterances**：基于 GitHub Issues
- **Disqus**：传统评论系统

### SEO 优化

```yaml
# _config.yml
plugins:
  - jekyll-seo-tag
  - jekyll-sitemap

# 在 <head> 中添加
{% raw %}{% seo %}{% endraw %}
```

### 性能优化

1. **图片优化**：压缩图片，使用 WebP 格式
2. **懒加载**：延迟加载图片
3. **CDN 加速**：使用 CDN 托管静态资源
4. **代码压缩**：压缩 CSS 和 JS

## 常见问题

### Q: 本地预览时出现错误？

```bash
# 清除缓存
bundle exec jekyll clean

# 重新安装依赖
bundle install

# 重新启动
bundle exec jekyll serve
```

### Q: 如何更新 Jekyll？

```bash
bundle update jekyll
```

### Q: 如何添加自定义页面？

在 `pages` 目录创建 `.md` 文件：

```markdown
---
layout: page
title: 关于
permalink: /about/
---

页面内容...
```

## 总结

Jekyll + GitHub Pages 是搭建个人博客的绝佳选择。它简单、免费、强大，让你专注于写作本身。

开始你的博客之旅吧！✨

## 参考资源

- [Jekyll 官方文档](https://jekyllrb.com/)
- [GitHub Pages 文档](https://docs.github.com/pages)
- [Markdown 语法指南](https://www.markdownguide.org/)
- [Jekyll 主题](https://jekyllthemes.io/)

---

*如果这篇文章对你有帮助，欢迎分享给更多人！*
