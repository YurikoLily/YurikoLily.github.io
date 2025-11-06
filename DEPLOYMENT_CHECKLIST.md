# 部署前检查清单

在将博客部署到 GitHub Pages 之前，请确保完成以下步骤：

## ✅ 必须完成

- [ ] **修改 `_config.yml`**
  - [ ] 更新 `title`（博客标题）
  - [ ] 更新 `description`（博客描述）
  - [ ] 更新 `author`（作者名称）
  - [ ] 更新 `email`（联系邮箱）
  - [ ] 更新 `url`（改为你的 GitHub Pages 地址）
  - [ ] 检查 `social.links`（社交媒体链接）

- [ ] **修改关于页面**
  - [ ] 编辑 `pages/about.md`
  - [ ] 添加个人介绍
  - [ ] 更新联系方式
  - [ ] 添加技能和兴趣

- [ ] **处理示例文章**
  - [ ] 删除或修改 `_posts/2025-01-01-welcome.md`
  - [ ] 删除或修改 `_posts/2025-01-05-jekyll-guide.md`
  - [ ] 创建你的第一篇真实文章

- [ ] **添加网站图标**
  - [ ] 准备 favicon.png（32x32 或 64x64 像素）
  - [ ] 放置到 `assets/images/` 目录

- [ ] **更新 README.md**
  - [ ] 修改项目描述
  - [ ] 更新联系方式
  - [ ] 添加个性化内容

## 🎨 推荐完成

- [ ] **自定义样式**
  - [ ] 修改 `_sass/_variables.scss` 中的颜色
  - [ ] 调整字体设置
  - [ ] 自定义间距和圆角

- [ ] **添加更多内容**
  - [ ] 创建至少 3-5 篇文章
  - [ ] 设置合适的分类和标签
  - [ ] 添加文章封面图片

- [ ] **SEO 优化**
  - [ ] 为每篇文章添加 excerpt（摘要）
  - [ ] 确保标题和描述有意义
  - [ ] 添加合适的关键词标签

- [ ] **社交媒体**
  - [ ] 在 `_config.yml` 中添加社交链接
  - [ ] 考虑添加分享按钮

## 🔧 可选功能

- [ ] **评论系统**
  - [ ] 选择评论系统（Giscus/Utterances/Disqus）
  - [ ] 在 `_layouts/post.html` 中集成
  - [ ] 测试评论功能

- [ ] **统计分析**
  - [ ] 注册 Google Analytics
  - [ ] 添加跟踪代码
  - [ ] 验证数据收集

- [ ] **搜索功能**
  - [ ] 集成搜索工具（Algolia/Lunr.js）
  - [ ] 添加搜索界面
  - [ ] 测试搜索功能

- [ ] **RSS 订阅**
  - [ ] 确认 jekyll-feed 插件已启用
  - [ ] 测试 RSS feed
  - [ ] 添加订阅链接

- [ ] **自定义域名**
  - [ ] 购买域名
  - [ ] 创建 CNAME 文件
  - [ ] 配置 DNS 记录
  - [ ] 等待 DNS 生效

## 🚀 部署步骤

### 1. 本地测试

```bash
# 安装依赖
bundle install

# 本地运行
bundle exec jekyll serve

# 访问 http://localhost:4000 检查
```

### 2. Git 初始化（如果还没有）

```bash
git init
git add .
git commit -m "Initial commit: Blog setup complete"
```

### 3. 创建 GitHub 仓库

- 仓库名称：`yourusername.github.io`
- 设置为 Public
- 不要初始化 README（已有）

### 4. 推送代码

```bash
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### 5. 配置 GitHub Pages

1. 进入仓库 Settings
2. 找到 Pages 选项
3. Source 选择 "GitHub Actions"
4. 等待 Actions 完成部署

### 6. 验证部署

- [ ] 访问 `https://yourusername.github.io`
- [ ] 检查所有页面是否正常
- [ ] 测试导航链接
- [ ] 测试响应式布局
- [ ] 测试夜间模式切换
- [ ] 在不同浏览器测试

## 📱 测试清单

### 功能测试

- [ ] 首页文章列表显示正常
- [ ] 文章详情页可以访问
- [ ] 分类页面工作正常
- [ ] 标签页面工作正常
- [ ] 文章归档页面正常
- [ ] 关于页面显示正确
- [ ] 导航菜单可以点击
- [ ] 移动端菜单可以展开/收起

### 样式测试

- [ ] 桌面端显示正常
- [ ] 平板端显示正常
- [ ] 手机端显示正常
- [ ] 夜间模式切换正常
- [ ] 代码高亮显示正确
- [ ] 图片加载正常
- [ ] 字体显示清晰

### 性能测试

- [ ] 页面加载速度快
- [ ] 图片已优化
- [ ] 没有控制台错误
- [ ] 链接都可以访问

## 🐛 常见问题

### 部署失败？

1. 检查 GitHub Actions 日志
2. 确认 Gemfile 配置正确
3. 验证 _config.yml 语法
4. 检查文件路径是否正确

### 样式不显示？

1. 检查 assets/css/main.scss 是否存在
2. 确认 _sass 目录下的文件完整
3. 清除浏览器缓存
4. 检查 baseurl 配置

### 文章不显示？

1. 确认文件名格式：YYYY-MM-DD-title.md
2. 检查 Front Matter 格式
3. 确认日期不是未来时间
4. 验证 Markdown 语法

## 📞 获取帮助

如果遇到问题：

1. 查看 [GETTING_STARTED.md](GETTING_STARTED.md)
2. 阅读 [Jekyll 文档](https://jekyllrb.com/docs/)
3. 搜索 [GitHub Issues](https://github.com/jekyll/jekyll/issues)
4. 在项目仓库提交 Issue

## 🎉 完成！

当所有检查项都完成后，你的博客就可以正式上线了！

记得定期：
- 📝 发布新文章
- 🔄 更新内容
- 🐛 修复问题
- ✨ 添加新功能

祝你的博客越来越好！🚀

---

最后更新：2025-01-01
