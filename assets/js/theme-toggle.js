// 夜间模式切换功能
(function() {
  const themeToggle = document.querySelector('.theme-toggle');
  const html = document.documentElement;
  
  // 从本地存储获取主题设置
  const currentTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', currentTheme);
  
  // 切换主题
  function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // 添加过渡动画
    html.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
      html.style.transition = '';
    }, 300);
  }
  
  // 绑定点击事件
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // 监听系统主题变化
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });
})();
