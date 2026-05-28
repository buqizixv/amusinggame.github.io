/* ═══════════════════════════════════════
   i18n — All UI Strings (en + zh)
   ═══════════════════════════════════════ */

const I18N = {
  en: {
    site_name: "Prank Toolkit",
    site_tagline: "30+ Funny Prank Pages — Share & Laugh",
    nav_home: "Home",
    nav_pranks: "Pranks",
    nav_about: "About",
    lang_switch: "中文",
    hero_title: "30+ Hilarious Prank Pages to Share With Friends",
    hero_sub: "Carefully crafted interactive prank pages. Preview online, copy the link, send to your friends — and watch them fall for it. Bilingual EN / 中文.",
    hero_cta: "Browse Pranks",
    hero_cta2: "How It Works →",
    stat_total: "30+",
    stat_total_label: "Prank Pages",
    stat_free: "Free",
    stat_free_label: "No Sign-up",
    stat_bilingual: "Bilingual",
    stat_bilingual_label: "EN / 中文",
    section_title: "All Prank Pages",
    search_placeholder: "Search pranks...",
    cat_all: "All",
    cat_classic: "Classic",
    cat_daily: "Daily Life",
    cat_social: "Social",
    cat_romance: "Romance",
    cat_power: "Power Play",
    cat_money: "Money",
    preview: "Preview",
    copy_link: "Copy Link",
    copied: "Copied!",
    toast_copied: "Link copied! Send it to your friends!",
    reset: "Reset",
    close: "Close",
    zh_label: "Chinese",
    en_label: "English",
    zh_path: "Chinese version",
    en_path: "English version",
    no_results: "No pranks found",
    no_results_tip: "Try a different search term or category.",
    cookie_text: "This site uses cookies from Google to serve ads and analyze traffic. By continuing, you agree to our use of cookies.",
    cookie_learn: "Learn more",
    cookie_ok: "OK",
    footer_copyright: "© 2026 Prank Toolkit. All rights reserved.",
    footer_disclaimer: "For harmless fun between friends only. Please do not use for malicious purposes.",
  },

  zh: {
    site_name: "整蛊工具箱",
    site_tagline: "30+ 款搞怪整蛊网页 · 分享即快乐",
    nav_home: "首页",
    nav_pranks: "整蛊列表",
    nav_about: "关于",
    lang_switch: "English",
    hero_title: "30+ 款搞笑整蛊网页，一键分享给朋友",
    hero_sub: "精心设计的互动整蛊页面，在线预览，复制链接直接发给朋友，看他们中招！中英双语版本。",
    hero_cta: "浏览整蛊",
    hero_cta2: "怎么玩 →",
    stat_total: "30+",
    stat_total_label: "整蛊页面",
    stat_free: "免费",
    stat_free_label: "无需注册",
    stat_bilingual: "双语",
    stat_bilingual_label: "中 / 英",
    section_title: "全部整蛊页面",
    search_placeholder: "搜索整蛊...",
    cat_all: "全部",
    cat_classic: "经典必装",
    cat_daily: "日常生活",
    cat_social: "朋友互怼",
    cat_romance: "恋爱甜蜜",
    cat_power: "霸气排面",
    cat_money: "金钱相关",
    preview: "预览",
    copy_link: "复制链接",
    copied: "已复制!",
    toast_copied: "链接已复制，发送给朋友即可！",
    reset: "重新开始",
    close: "关闭",
    zh_label: "中文版",
    en_label: "English",
    zh_path: "中文版路径",
    en_path: "英文版路径",
    no_results: "未找到相关整蛊",
    no_results_tip: "试试换个关键词或分类筛选。",
    cookie_text: "本站使用 Google 的 Cookie 来提供广告和分析流量。继续使用即表示您同意我们使用 Cookie。",
    cookie_learn: "了解更多",
    cookie_ok: "好的",
    footer_copyright: "© 2026 整蛊工具箱. 保留所有权利。",
    footer_disclaimer: "适合朋友间无害玩笑，请勿用于恶意用途。",
  }
};

let currentLang = localStorage.getItem('prankLang') || 'en';

function t(key) {
  return I18N[currentLang] && I18N[currentLang][key] || I18N['en'][key] || key;
}

function switchLang() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  localStorage.setItem('prankLang', currentLang);
  document.getElementById('lang-toggle').textContent = t('lang_switch');
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  renderPage();
}
