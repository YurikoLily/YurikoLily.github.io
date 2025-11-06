# 🔧 博客故障排查指南

## 问题：文章推送到 GitHub 后没有显示

### 📋 检查清单

#### 1️⃣ 文件命名检查

**问题症状**：文章推送了但网站上看不到

**原因**：Jekyll 要求文章文件名必须遵循特定格式

✅ **正确格式**：
```
YYYY-MM-DD-title.md
```

❌ **错误示例**：
- `HelloWorld.md` - 缺少日期
- `2025-1-10-hello.md` - 月份/日期不是两位数
- `hello-world.md` - 缺少日期

**解决方法**：
```bash
# 重命名文件
mv _posts/HelloWorld.md _posts/2025-01-10-hello-world.md
```

---

#### 2️⃣ Front Matter 检查

**问题症状**：文章文件存在但不显示，或显示异常

**原因**：缺少或格式错误的 YAML 头部

❌ **错误示例**：
```markdown
Hello World!
```

✅ **正确格式**：
```markdown
---
layout: post
title: "Hello World"
date: 2025-01-10 10:00:00 +0800
categories: [日常]
tags: [开始]
excerpt: "我的第一篇文章"
---

Hello World!
```

**必需字段**：
- `layout: post`
- `title: "标题"`
- `date: YYYY-MM-DD HH:MM:SS +0800`

---

#### 3️⃣ GitHub Actions 部署检查

**问题症状**：推送后等待很久仍未更新

**检查步骤**：

1. **访问 GitHub Actions 页面**
   ```
   https://github.com/你的用户名/你的仓库名/actions
   ```

2. **查看最新的工作流运行状态**
   - ✅ 绿色勾号 = 部署成功
   - ❌ 红色叉号 = 部署失败
   - 🟡 黄色圆圈 = 正在部署

3. **点击查看详细日志**
   - 查看具体错误信息
   - 常见错误会在下方列出

**常见部署错误**：

##### 错误 1：Ruby 版本不兼容
```
Error: The current runner (ubuntu-22.04-x64) was detected as self-hosted...
```
**解决**：检查 `.github/workflows/jekyll.yml` 中的 Ruby 版本设置

##### 错误 2：依赖安装失败
```
Bundler could not find compatible versions for gem...
```
**解决**：更新 `Gemfile.lock`
```bash
bundle update
git add Gemfile.lock
git commit -m "Update dependencies"
git push
```

##### 错误 3：构建失败
```
Liquid Exception: Liquid syntax error...
```
**解决**：检查文章中的 Liquid 语法，特别是 `{{ }}` 和 `{% %}` 标签

---

#### 4️⃣ GitHub Pages 设置检查

**检查步骤**：

1. 进入仓库的 **Settings** → **Pages**

2. **Source** 应该设置为：
   - Source: `GitHub Actions`
   
   或者（旧版设置）：
   - Source: `Deploy from a branch`
   - Branch: `gh-pages` 或 `main`
   - Folder: `/ (root)` 或 `docs`

3. **确认网站 URL**
   - 应该显示：`Your site is live at https://用户名.github.io/仓库名/`

**如果显示 404**：
- 等待 1-3 分钟让部署完成
- 清除浏览器缓存
- 尝试无痕模式访问

---

#### 5️⃣ 配置文件检查

**检查 `_config.yml`**：

```yaml
# 确保这些设置正确
baseurl: ""  # 如果是 username.github.io 仓库，留空
             # 如果是项目仓库，填写 "/仓库名"

url: "https://用户名.github.io"  # 你的 GitHub Pages URL

# 确保没有设置 future: false（这会隐藏未来日期的文章）
future: true  # 或者删除这一行
```

---

#### 6️⃣ 文章日期检查

**问题症状**：文章存在但列表中看不到

**原因**：文章日期设置为未来时间，且 `future: false`

**解决方法**：

方法 1：修改文章日期为当前或过去时间
```yaml
date: 2025-01-10 10:00:00 +0800  # 改为实际日期
```

方法 2：在 `_config.yml` 中允许未来文章
```yaml
future: true
```

---

#### 7️⃣ 文件位置检查

**确认文件在正确位置**：

✅ 正确：
```
_posts/2025-01-10-hello-world.md
```

❌ 错误：
```
posts/2025-01-10-hello-world.md  # 缺少下划线
_post/2025-01-10-hello-world.md  # 目录名错误
2025-01-10-hello-world.md        # 不在 _posts 目录
```

---

## 🔍 完整排查流程

### 步骤 1：本地测试

```bash
# 1. 安装依赖
bundle install

# 2. 本地运行
bundle exec jekyll serve

# 3. 访问 http://localhost:4000
# 检查文章是否显示
```

**如果本地能看到**：问题在部署环节
**如果本地看不到**：问题在文章格式

---

### 步骤 2：检查文件格式

```bash
# 查看文件列表
ls -la _posts/

# 应该看到类似：
# 2025-01-10-hello-world.md
```

**检查文件内容**：
```bash
cat _posts/2025-01-10-hello-world.md
```

**确认包含**：
1. 开头的 `---`
2. Front Matter 字段
3. 结尾的 `---`
4. 文章内容

---

### 步骤 3：检查 Git 状态

```bash
# 查看文件是否已提交
git status

# 查看最近的提交
git log -1

# 确认文件已推送
git ls-tree -r HEAD --name-only | grep _posts
```

---

### 步骤 4：检查 GitHub Actions

1. 访问：`https://github.com/用户名/仓库名/actions`
2. 查看最新工作流状态
3. 如果失败，点击查看错误日志
4. 根据错误信息修复问题

---

### 步骤 5：强制重新部署

如果一切看起来正常但仍未更新：

```bash
# 方法 1：空提交触发部署
git commit --allow-empty -m "Trigger rebuild"
git push

# 方法 2：修改配置文件
# 在 _config.yml 添加一个空行，然后：
git add _config.yml
git commit -m "Trigger rebuild"
git push
```

---

## 🐛 常见错误速查表

| 症状 | 可能原因 | 解决方法 |
|------|----------|----------|
| 文章完全不显示 | 文件名格式错误 | 重命名为 `YYYY-MM-DD-title.md` |
| 文章不显示 | 缺少 Front Matter | 添加 YAML 头部 |
| 文章显示异常 | Front Matter 格式错误 | 检查 YAML 语法 |
| 推送后未更新 | GitHub Actions 失败 | 查看 Actions 日志 |
| 显示 404 | Pages 未启用 | 检查 Settings → Pages |
| 样式丢失 | baseurl 配置错误 | 检查 `_config.yml` |
| 未来文章不显示 | `future: false` | 设置 `future: true` |

---

## 📞 获取帮助

### 查看构建日志

```bash
# 本地构建查看详细信息
bundle exec jekyll build --verbose
```

### 检查 Jekyll 版本

```bash
bundle exec jekyll --version
```

### 验证配置文件

```bash
# 检查 YAML 语法
ruby -ryaml -e "YAML.load_file('_config.yml')"
```

---

## ✅ 预防措施

### 1. 使用模板创建文章

创建文件：`new-post.sh`

```bash
#!/bin/bash
# 快速创建新文章

TITLE=$1
DATE=$(date +%Y-%m-%d)
TIME=$(date +%H:%M:%S)
FILENAME="_posts/${DATE}-${TITLE}.md"

cat > "$FILENAME" << EOF
---
layout: post
title: "${TITLE}"
date: ${DATE} ${TIME} +0800
categories: []
tags: []
excerpt: ""
---

## 标题

内容...
EOF

echo "Created: $FILENAME"
```

使用：
```bash
chmod +x new-post.sh
./new-post.sh hello-world
```

### 2. 提交前检查

创建文件：`check-posts.sh`

```bash
#!/bin/bash
# 检查文章格式

for file in _posts/*.md; do
    echo "Checking: $file"
    
    # 检查文件名格式
    if [[ ! $(basename "$file") =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}-.+\.md$ ]]; then
        echo "  ❌ Invalid filename format"
    fi
    
    # 检查 Front Matter
    if ! grep -q "^---$" "$file"; then
        echo "  ❌ Missing Front Matter"
    fi
    
    echo "  ✅ OK"
done
```

### 3. 设置 Git Hooks

创建文件：`.git/hooks/pre-commit`

```bash
#!/bin/bash
# 提交前自动检查

for file in $(git diff --cached --name-only | grep "^_posts/"); do
    if [[ ! $(basename "$file") =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}-.+\.md$ ]]; then
        echo "Error: Invalid post filename: $file"
        echo "Format should be: YYYY-MM-DD-title.md"
        exit 1
    fi
done
```

---

## 🎯 快速修复：您的情况

基于您的 `HelloWorld.md` 文件，问题是：

1. ❌ 文件名缺少日期：`HelloWorld.md`
2. ❌ 缺少 Front Matter
3. ❌ 内容过于简单

**已为您创建正确的文件**：
- ✅ `_posts/2025-01-10-hello-world.md`
- ✅ 包含完整的 Front Matter
- ✅ 包含丰富的内容

**下一步操作**：

```bash
# 1. 删除旧文件
git rm _posts/HelloWorld.md

# 2. 添加新文件
git add _posts/2025-01-10-hello-world.md

# 3. 提交并推送
git commit -m "Fix: Rename and format blog post correctly"
git push origin main

# 4. 等待 1-3 分钟，访问您的博客查看效果
```

---

**记住**：Jekyll 文章的两个黄金法则
1. 文件名必须是 `YYYY-MM-DD-title.md`
2. 文件必须以 Front Matter 开头

遵循这两点，99% 的问题都能避免！🎉
