// 主要交互功能
(function() {
  // 移动端导航菜单切换
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
    
    // 点击导航链接后关闭菜单
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
  }
  
  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#0') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // 滚动时头部样式变化
  const header = document.querySelector('.site-header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.style.boxShadow = 'var(--shadow-md)';
    } else {
      header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });
  
  // 图片懒加载
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
  
  // 为外部链接添加图标和属性
  document.querySelectorAll('.post-content a').forEach(link => {
    if (link.hostname !== window.location.hostname) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
  
  // 代码块复制功能
  document.querySelectorAll('pre code').forEach(block => {
    const button = document.createElement('button');
    button.className = 'copy-code-button';
    button.textContent = '复制';
    button.setAttribute('aria-label', '复制代码');
    
    const pre = block.parentElement;
    pre.style.position = 'relative';
    pre.appendChild(button);
    
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(block.textContent);
        button.textContent = '已复制!';
        setTimeout(() => {
          button.textContent = '复制';
        }, 2000);
      } catch (err) {
        console.error('复制失败:', err);
      }
    });
  });
  
  // 阅读进度条
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: var(--primary-color);
    width: 0%;
    z-index: 1000;
    transition: width 0.1s ease;
  `;
  
  if (document.querySelector('.post-single')) {
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      
      progressBar.style.width = Math.min(progress, 100) + '%';
    });
  }
})();
