---
layout: default
title: 关于
permalink: /about/
---

<div class="about-page">
  <header class="page-header">
    <h1>关于我</h1>
    <p class="page-description">探索技术，记录生活</p>
  </header>
  
  <div class="about-content">
    <section class="about-section">
      <h2>👋 你好</h2>
      <p>欢迎来到我的个人博客！我是 Yuriko Lily，一名热爱技术和写作的开发者。</p>
      <p>在这里，我会分享关于编程、技术、生活和思考的文章。希望这些内容能对你有所帮助。</p>
    </section>
    
    <section class="about-section">
      <h2>💻 技术栈</h2>
      <ul>
        <li>前端开发：HTML, CSS, JavaScript, React, Vue</li>
        <li>后端开发：Node.js, Python, Java</li>
        <li>其他：Git, Docker, Linux</li>
      </ul>
    </section>
    
    <section class="about-section">
      <h2>📫 联系方式</h2>
      <p>如果你想与我交流，可以通过以下方式联系我：</p>
      <ul>
        <li>Email: <a href="mailto:{{ site.email }}">{{ site.email }}</a></li>
        <li>GitHub: <a href="https://github.com/YurikoLily" target="_blank" rel="noopener">@YurikoLily</a></li>
      </ul>
    </section>
    
    <section class="about-section">
      <h2>🎯 博客目标</h2>
      <p>通过写作来整理思路，分享知识，结识志同道合的朋友。</p>
      <p>如果你喜欢我的文章，欢迎订阅和分享！</p>
    </section>
  </div>
</div>

<style>
.about-page {
  max-width: 800px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
  padding-bottom: var(--spacing-2xl);
  border-bottom: 1px solid var(--border-color);
}

.page-header h1 {
  font-size: var(--text-4xl);
  margin-bottom: var(--spacing-md);
}

.page-description {
  font-size: var(--text-xl);
  color: var(--text-secondary);
}

.about-content {
  font-size: var(--text-lg);
  line-height: 1.8;
}

.about-section {
  margin-bottom: var(--spacing-3xl);
}

.about-section h2 {
  font-size: var(--text-2xl);
  margin-bottom: var(--spacing-lg);
  color: var(--primary-color);
}

.about-section ul {
  list-style: none;
  padding-left: 0;
}

.about-section li {
  padding: var(--spacing-sm) 0;
  padding-left: var(--spacing-xl);
  position: relative;
}

.about-section li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: var(--primary-color);
}
</style>
